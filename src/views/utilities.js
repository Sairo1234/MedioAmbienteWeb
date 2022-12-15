import { Point } from 'leaflet';

export const Utilities = {

    /**--------------------------------------------
    * Devuelve true se la coordenada está contenida 
    * en un array de puntos (polígono) y false si no
    * 
    * @param {coordenada} Punto El punto del que se quiere saber si está contenido
    * @param {polygon} Array Array de de coordenadas que forman el polígono
    * 
    * @return true si está contenida / false si no lo está
    */

    EstaLaCoordenadaContenida(coordenada, polygon, noneZeroMode) {
        var ptNum = polygon.length
        if (ptNum < 3) return false

        var j = ptNum - 1
        var oddNodes = false
        var zeroState = 0

        for (var k = 0; k < ptNum; k++) {
            var ptK = new Point()
            var ptJ = new Point()

            ptK = polygon[k]
            ptJ = polygon[j]

            if (((ptK.y > coordenada.y) != (ptJ.y > coordenada.y)) &&
                (coordenada.x < (ptJ.x - ptK.x) * (coordenada.y - ptK.y) / (ptJ.y - ptK.y) + ptK.x)) {
                oddNodes = !oddNodes
                if (ptK.y > ptJ.y) zeroState++
                else zeroState--
            }

            j = k
        }

        return noneZeroMode ? zeroState != 0 : oddNodes;
    },


    IsPointInPolygon(p, polygon) 
    {
        var minX = polygon[0][1];
        var maxX = polygon[0][1];
        var minY = polygon[0][1];
        var maxY = polygon[0][1];

        polygon.map(p => 
        {
            minX = Math.min(p[0], minX);
            maxX = Math.max(p[0], maxX);
            minY = Math.min(p[1], minY);
            maxY = Math.max(p[1], maxY);
        })

        console.log({minX, p: p.x})
 
        if (p.x < minX || p.x > maxX || p.y < minY || p.y > maxY) return false;

        var inside = false;

        for (let i = 0, j = polygon.Length - 1; i < polygon.Length; j = i++) 
        {
            if ((polygon[i][1] > p.y) != (polygon[j][1] > p.y) &&
                p.x < (polygon[j][0] - polygon[i][0]) * (p.y - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0]) inside = !inside
        }

        return inside;
    },

    /**--------------------------------------------
    * Escala de colores predefinida
    * 
    * @param {coordenada} Punto El punto del que se quiere saber si está contenido
    * @param {polygon} Array Array de de coordenadas que forman el polígono
    * 
    * @return true si está contenida / false si no lo está
    */

    getColor(d) {
        return d > 50 ? 'rgb(0, 0, 0)' :
            d > 23 ? 'rgb(24, 53, 103)' :
                d > 15 ? 'rgb(46, 100, 158)' :
                    d > 12 ? '#FF9C32' :
                        'Orange';
    },

    /**--------------------------------------------
    * Promedia los valores de un distrito dados los datos
    * de las mediciones contenidas en este
    * 
    * @param {datos} Array Array de valores de las mediciones
    * 
    * @return El promediado
    */

    PromediadoDeValoresDeunDistrito(datos) {
        var i = 0, summ = 0, ArrayLen = datos.length;
        while (i < ArrayLen) summ = summ + datos.properties.value;

        return summ / ArrayLen;
    },
}