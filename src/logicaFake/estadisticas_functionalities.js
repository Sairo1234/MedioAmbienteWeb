import Chart from 'chart.js/auto';

export const estaFunctions =
{
  estadisticaDeLaSemana(nombreEstadistica, mediasO3, mediasNO2) {

    var c = document.getElementById(nombreEstadistica);
    var ctx = c.getContext("2d");

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        datasets: [
          {
            label: 'NO2',
            data: mediasNO2,
            fill: true,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)'
          },
          {
            label: 'O3',
            data: mediasO3,
            fill: true,
            borderColor: 'rgba(192, 192, 192, 1)',
            backgroundColor: 'rgba(192, 192, 192, 0.2)',
          }]
      },
      options: {
        elements:
        {
          tension: 1
        }
      }
    })
  },
  
  estadisticaDelMes(nombreEstadistica, mediasO3, mediasNO2) {

    console.log(mediasO3)
    var c = document.getElementById(nombreEstadistica);
    var ctx = c.getContext("2d");

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,21],
        datasets: [
          {
            label: 'NO2',
            data: mediasNO2,
            fill: true,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)'
          },
          {
            label: 'O3',
            data: mediasO3,
            fill: true,
            borderColor: 'rgba(192, 192, 192, 1)',
            backgroundColor: 'rgba(192, 192, 192, 0.2)',
          }]
      },
      options: {
        elements:
        {
          tension: 1
        }
      }
    })
  },
}