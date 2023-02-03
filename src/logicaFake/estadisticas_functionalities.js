import Chart from 'chart.js/auto';

export const estaFunctions =
{

  /**--------------------------------------------
  * Dado el id de la estadística, los datos a mostrar y un label
  * crear un gráfico de media semanal con estos datos
  * 
  * @param {nombreEstadistica} String Id de la estadística
  * @param {medias} Json Json con las coordenadas y valores de datos
  * @param {label} String Label a mostrar en el gráfico
  */

  estadisticaDeLaSemana(nombreEstadistica, medias, label) 
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

    if(label == "O3")
    {
      gradient.addColorStop(0, 'rgba(58,123,213, 1)');
      gradient.addColorStop(1, 'rgba(0,210,255, 0.3)');
    }
    else
    {
      gradient.addColorStop(0, 'rgba(255, 137, 213, 1)');
      gradient.addColorStop(1, 'rgba(255,196,126, 0.3)');
    }

    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        datasets: [
          {
            label: label,
            data: medias,
            fill: true,
            borderColor:  "#fff",
            backgroundColor: gradient,
            tension: 0.2,
          }]
      },
      options: options
    })
  },
  
  /**--------------------------------------------
  * Dado el id de la estadística, los datos a mostrar y un label
  * crear un gráfico de media mensual con estos datos
  * 
  * @param {nombreEstadistica} String Id de la estadística
  * @param {medias} Json Json con las coordenadas y valores de datos
  * @param {label} String Label a mostrar en el gráfico
  */

  estadisticaDelMes(nombreEstadistica, medias, label) 
  {
    let delayed;
    
    var c = document.getElementById(nombreEstadistica);
    var ctx = c.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    
    if(label == "O3")
    {
      gradient.addColorStop(0, 'rgba(58,123,213, 1)');
      gradient.addColorStop(1, 'rgba(0,210,255, 0.3)');
    }
    else
    {
      gradient.addColorStop(0, 'rgba(255, 137, 213, 1)');
      gradient.addColorStop(1, 'rgba(255,196,126, 0.3)');
    }

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
            data: medias,
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