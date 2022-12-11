//import * as medidasJson from './medidas.json'
import L from "leaflet"
//import { onMounted } from 'vue'
//import { MedicionesAPI } from '@/logicaFake/resources/mediciones'
import { random } from 'lodash'


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
                    "coordenadas": [j["lat"], j["lng"]],
                },
                "properties":
                {
                   // valor de la medida, ahora es random porque no tengo. Tiene que ser de 0 a 0.1
                    "value": random(0.0, 0.9)
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
            heatMapPoints.push([feature.geometry.coordenadas[0], feature.geometry.coordenadas[1], feature.properties.value])
        })
    
        L.heatLayer(
            heatMapPoints, 
            {
                radius: 10,
                minOpacity: 0.4,
                gradient: {0.4: 'blue', 0.5: 'lime', 0.9: 'red'}
            }).addTo(mymap);
    }
}