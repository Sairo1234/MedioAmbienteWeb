//import * as medidasJson from './medidas.json'
import * as L from 'leaflet';
import 'leaflet.markercluster';

import { Point } from 'leaflet';
import { Utilities } from './utilities';
import {antPath} from 'leaflet-ant-path';

//import glify from '@khiemntu/leaflet.glify'

import '../../node_modules/leaflet.idw/src/leaflet-idw.js'

export const mapFunctions = 
{
    /**--------------------------------------------
    * Genera un mapa de OpenStreetMap dado el id de un mapa
    * 
    * @param {mymap} map
    */

    generarMapa(mapa) 
    {
        let mymap = L.map(mapa, {
            attributionControl: true,
            zoomControls: true,
            gestureHandling: true,
        }).setView([47.085107, 7.13], 12);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                maxZoom: 19,
                attribution:
                    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(mymap);

        return mymap
    },

    /**--------------------------------------------
    * Genera un geojson de mediciones dado un json unas medidas
    * 
    * @param {medidasJson} Array
    * @return GeoJson de Features
    */

    generarGeoJson(medidasJson) 
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

        var geojsonFeatures =
        {
            "type": "FeatureCollection",
            "features": features
        };

        return geojsonFeatures
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

    /**--------------------------------------------
    * Dado un geoJson con las mediciones del usuario en las últimas
    * 24 horas, calcula su recorrido y lo devuelve
    * 
    * @param {geojsonFeatureDelusuario} GeoJson con las mediciones en un intervalo de tiempo determinado
    *  
    * @return Devuelve la ruta del usuario
    */

    generarRutaDeUsuarioLogeado(geojsonFeatureDelusuario)
    {
        // Ruta del usuario de hoy
        var routeDelusuario = []
        geojsonFeatureDelusuario.features.forEach(feature => {

            routeDelusuario.push(feature.geometry.coordenadas)
        })

        // Estilo de la ruta del usuario
        const pathDelUsuario = antPath(routeDelusuario,
        {
            "delay": 733,
            "dashArray": [
                11,
                42
            ],
            "weight": 5,
            "color": "#0000FF",
            "pulseColor": "#FFFFFF",
            "paused": false,
            "reverse": false,
            "hardwareAccelerated": true
        });

        return pathDelUsuario
    },


    /**--------------------------------------------
    * Dado un json con las medidas y el mapa a implementar
    * se crea una layer de mapa de interpolación
    * 
    * @param {medidicasJson} Json con las mediciones en un intervalo de tiempo determinado
    * @param {mymap} map Nuestro mapa
    *  
    * @return Devuelve el heatMap
    */

    generarMapaDeInterpolacion(medidasJson)
    {
        var data = []

        var meteoPoints = 
        [
            [ 47.11285 , 7.222309, 8], //Ipsach
            [ 47.085272, 7.20377 , 12], //M�rigen
            [ 47.092285, 7.156734, 11], //Twann
            [ 47.13294 , 7.220936, 0], //Vingelz
            [ 47.088311, 7.128925, 15], //Twannberg
            [ 47.124765, 7.234669, 5], //Nidau
            [ 47.07911446468586, 7.212085324850676 , 1],  //lelanderon
            [ 47.12815434175707, 7.186518919824749 , 6],  //lelanderon
            [ 47.109400663649694, 7.129305863212892 , 19],  //lelanderon
            [ 47.03447041893412, 7.123050798160193 , 14],  //lelanderon
            [ 47.115626585672885, 7.243417717964917 , ],  //lelanderon
            [ 47.084634997854465, 7.09780481469582 , 1],  //lelanderon

        ];

        medidasJson.forEach(function (j) 
        {
            data.push([j["lat"], j["lng"], j["value"]])
        })

        var idw_ = L.idwLayer(meteoPoints, {  // Opciones del mapa
            opacity: 0.65,
            maxZoom: 18,
            cellSize: 4,
            exp: 4,
            max: 20,
            gradient : {
                0.2: 'lime',
                0.4: 'yellow',            
                0.5: 'orange',
                0.6: 'red',
                0.7: 'Maroon',
                0.8: '#660066',
                0.9: '#990099',
                1.0: '#ff66ff'
            },
        }) 

        return idw_
    },
}