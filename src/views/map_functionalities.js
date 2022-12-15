//import * as medidasJson from './medidas.json'
import * as L from 'leaflet';
import 'leaflet.markercluster';
//import { onMounted } from 'vue'
//import { MedicionesAPI } from '@/logicaFake/resources/mediciones'ç

import { Point } from 'leaflet';
import { Utilities } from './utilities';

export const mapFunctions = 
{
    /**--------------------------------------------
    * Genera un mapa de OpenStreetMap dado un map
    * 
    * @param {mymap} map
    */

    generarMapa(mymap) 
    {
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                maxZoom: 19,
                attribution:
                    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(mymap);
    },

    /**--------------------------------------------
    * Genera un array de Features que contiene las 
    * coordenadas (geometry.coordenadas) y el valor de cada
    * una de estas (properties.value)
    * 
    * @param {medidasJson} Array
    * @return Array de features
    */

    generarFeatures(medidasJson) 
    {
        let features = []

        medidasJson.forEach(function (j) 
        {
            var GeoCoordenadas = 
            {
                "type": "Feature", "mediciones": [],
                "geometry": 
                {
                    "type": "Point",
                    // Coordenadas del json
                    "coordenadas": [j["lat"], j["lng"]],
                },
                "properties": { "value": j["value"] }
            }

            features.push(GeoCoordenadas)
        })

        return features
    },

    /**--------------------------------------------
    * Genera un geojson dado un array con features
    * 
    * @param {features} Array
    * @return GeoJson de Features
    */

    generarGeoJson(features) 
    {
        var geojsonFeature =
        {
            "type": "FeatureCollection",
            "features": features
        };

        return geojsonFeature
    },

    
    /**--------------------------------------------
    * Dado un Geojson de Features y un mapa, genera un HeatMap
    * 
    * @param {geojsonFeature} Geojson de las features
    * @param {mymap} map Mapa
    * 
    * @return Devuelve el heatMap
    */

    generarHeatMap(geojsonFeature, mymap) {
        /*
          Opciones del heatmap:

            minOpacity - La mínima opcidad en la que el heat puede empezar (datos despreciables)
            maxZoom - zoom level where the points reach maximum intensity (as intensity scales with zoom), equals maxZoom of the map by default
            max - maximum point intensity, 1.0 by default
            radius - radius of each "point" of the heatmap, 25 by default
            blur - amount of blur, 15 by default
            gradient - color gradient config, e.g. {0.4: 'blue', 0.65: 'lime', 1: 'red'}
        */

        var heatMapPoints = []

        geojsonFeature.features.forEach(function (feature) {
            var puntos = [
                feature.geometry.coordenadas[0],
                feature.geometry.coordenadas[1],
                feature.properties.value
            ]

            heatMapPoints.push(puntos)
        })

        // Configuración del heatmap
        var cnfg =
        {

            radius: 60,
            minOpacity: 0.3,
            gradient:
            {
                '0.0': 'rgb(255, 0, 0)',
                '0.4': 'rgb(24, 53, 103)',
                '0.75': 'rgb(46, 100, 158)',
                '0.9': '#FF9C32',
                '1.0': 'Orange'
            },
            // Escala el radio dependiendo del zoom
            scaleRadius: false,
            // si se establece en falso, el mapa de calor usa el máximo global para la coloración
            // si está activado: utiliza el máximo de datos dentro de los límites del mapa actual
            useLocalExtrema: false,
            blur: 30,
        }

        var heatmap = L.heatLayer(heatMapPoints, cnfg).addTo(mymap)

        return heatmap
    },

    /**--------------------------------------------
    * Dado un Geojson que define los barrios de un Ayuntamiento
    * y otro con las medidas, se fusuiona con el Geojson de los barrios
    * y los divide entre los respectivos barrios donde han sido tomadas
    * 
    * @param {geoJsonMediciones} Geojson de las mediciones
    * @param {geoJsonBarrios} Geojson con los datos de los barrios
    *  
    * @return Devuelve el heatMap
    */

    generarGeoJsonDeDistritosDelAyuntamiento(geoJsonMediciones, geoJsonBarrios) 
    {
        geoJsonMediciones.features.forEach(feature => {

            geoJsonBarrios.features.forEach(distrito => {  

                if (Utilities.IsPointInPolygon( new Point(feature.geometry.coordenadas[0], feature.geometry.coordenadas[1]), distrito.geometry.coordenadas[0]) == true) 
                {
                    distrito.mediciones.push({
                        "geometry": {
                            "type": "Point",
                            "coordenadas": [feature.geometry.coordenadas[0], feature.geometry.coordenadas[1]],
                        },
                        "properties":
                        {
                            "value": feature.properties.value
                        }
                    })

                    distrito.properties.TASA_MEDIA_CO2 = distrito.properties.TASA_MEDIA_CO2 + feature.properties.value
                }
            })
        })

        Utilities.PromediadoDeValoresDeunDistrito(geoJsonBarrios)

        return geoJsonBarrios
    },
}