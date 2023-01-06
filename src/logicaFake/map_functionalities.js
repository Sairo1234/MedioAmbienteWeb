//import * as medidasJson from './medidas.json'
import * as L from 'leaflet';
import 'leaflet.markercluster';

import {antPath} from 'leaflet-ant-path';

//import glify from '@khiemntu/leaflet.glify'

import 'leaflet.idw/src/leaflet-idw.js'

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

        medidasJson.forEach(function (j) 
        {
            data.push([j["lat"], j["lng"], j["value"]])
        })

        var idw_ = L.idwLayer(data, {  // Opciones del mapa
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