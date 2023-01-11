import { json } from 'body-parser';
import Chart from 'chart.js/auto';
import { map } from 'core-js/core/array';

export const estaFunctions = 
{
    estadisticaPrueba(nombreEstadistica)
    {
      const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];
      
      new Chart(
        document.getElementById(nombreEstadistica),
        {
          type: 'line',
          
          data: {
            labels: data.map(row => row.year),
            datasets: [
              {
                label: 'Acquisitions by year',
                data: data.map(row => row.count),
                fill: true,
                backgroundColor: 'rgba(0, 0, 0, 0.1)'
              }
            ]
          },
        }
      );
    },

    calcularMediaDeUnDia(jsonMedidasDeUnDia)
    {
      valorMedio = 0

      cantidadDeMedidas = 0

      jsonMedidasDeUnDia.map(function(medida)
      {
        valorMedio = valorMedio + medida.value
        cantidadDeMedidas++
      })

      return valorMedio/cantidadDeMedidas
    },

    calcularMediaDeUnaSemana(jsonMedidasDeUnaSemana)
    {
      valorMedio = 0

      jsonMediasDeUnaSemana
    }
}