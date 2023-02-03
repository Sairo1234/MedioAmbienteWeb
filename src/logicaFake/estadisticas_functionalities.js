import Chart from 'chart.js/auto';

export const estaFunctions =
{
  estadisticaDeLaSemana(nombreEstadistica, mediasO3, label) 
  { 
    let delayed;

    let options = {
      plgins:
      {
        legend: {},
      },
      elements:
      {
        tension: 1
      },
      scales: 
      {
        x: {
          grid: {
            display: false
         }
        },
      },
      animation: {
  
        onComplete: () => 
        {
          delayed = true
        },
  
        delay: (context) => 
        {
          let delay = 0
          if(context.type === "data" && context.mode === "default" && !delayed)
          {
            delay = context.dataIndex * 400
          }
  
          return delay
        },
      },
    }
    var c = document.getElementById(nombreEstadistica);
    var ctx = c.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(58,123,213, 1)');
    gradient.addColorStop(1, 'rgba(0,210,255, 0.3)');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        datasets: [
          {
            label: label,
            data: mediasO3,
            fill: true,
            borderColor:  "#fff",
            backgroundColor: gradient,
            tension: 0.2,
          }]
      },
      options: options
    })
  },
  
  estadisticaDelMes(nombreEstadistica, mediasO3, label) 
  {
    console.log(mediasO3)

    let delayed;
    
    var c = document.getElementById(nombreEstadistica);
    var ctx = c.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(58,123,213, 1)');
    gradient.addColorStop(1, 'rgba(0,210,255, 0.3)');

    let options = 
    {
      plgins:
      {
        legend: {},
      },
      elements:
      {
        tension: 1
      },
      scales: 
      {
        x: {
          grid: {
            display: false
         }
        },
      },
      animation: {
  
        onComplete: () => 
        {
          delayed = true
        },
  
        delay: (context) => 
        {
          let delay = 0
          if(context.type === "data" && context.mode === "default" && !delayed)
          {
            delay = context.dataIndex * 400
          }
  
          return delay
        },
      },
    }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [1,2,3,4],
        datasets: [
          {
            label: label,
            data: mediasO3,
            fill: true,
            borderColor:  "#fff",
            backgroundColor: gradient,
            tension: 0.2,
          }]
      },
      options: options
    })
  },
}