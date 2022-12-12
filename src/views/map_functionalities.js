//import * as medidasJson from './medidas.json'
import * as L from 'leaflet';
import 'leaflet.markercluster';
//import { onMounted } from 'vue'
//import { MedicionesAPI } from '@/logicaFake/resources/mediciones'

export const mapFunctions = {

    generarMapa(mymap)
    {
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            maxZoom: 19,
            attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mymap);
    },

    generarGeoJson(features)
    {
        var geojsonFeature =
        {
            "type": "FeatureCollection",
            "features" : features
        };

        return geojsonFeature
    },

    generarFeatures(medidasJson)
    {
        let features = []

        medidasJson.forEach(function(j) 
        {
            var coordenadas = {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    // Coordenadas del json
                    "coordenadas": [j["lat"], j["lng"],j["value"]],
                },
                "properties":
                {
                    "value": j["value"]
                }  
            }
    
            features.push(coordenadas)
        })

        return features
    },

    generarHeatMap(geojsonFeature, mymap)
    {
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

        geojsonFeature.features.forEach(function(feature)
        {
            var puntos = {
                "lat": feature.geometry.coordenadas[0],
                "lng": feature.geometry.coordenadas[1],
                "value": feature.geometry.coordenadas[2]
            }

            heatMapPoints.push(puntos)
        })

        // Configuración del heatmap
        var cnfg = 
        {
            max: 1,
            radius: 45,
            minOpacity: 0.3,
            gradient: 
            {
                '0.0': 'rgb(0, 0, 0)',
                '0.6': 'rgb(24, 53, 103)',
                '0.75': 'rgb(46, 100, 158)',
                '0.9': '#FF9C32',
                '1.0': 'Orange'
            },
            // Escala el radio dependiendo del zoom
            scaleRadius: true,
            // si se establece en falso, el mapa de calor usa el máximo global para la coloración
            // si está activado: utiliza el máximo de datos dentro de los límites del mapa actual
            useLocalExtrema: false,
            blur: 12,
            latField: "lat",
            lngField: "lng",
            valueField: "value"
        }
    
        var heatmap = L.heatLayer(heatMapPoints, cnfg).addTo(mymap)

        return heatmap
    },

    generarAgrupacionDeMedidas(geojsonFeature, mymap)
    {
        var markers = L.markerClusterGroup();

        geojsonFeature.features.forEach(function(feature)
        {
            markers.addLayer(L.marker([feature.geometry.coordenadas[0], feature.geometry.coordenadas[1]]))
        })

        mymap.addLayer(markers)
    },
}