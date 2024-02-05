import { useEffect } from "react"
import { Chart } from "chart.js";
function CircleChart() {
    useEffect(() => {
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart1 = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                  'Red',
                  'Blue',
                  'Yellow'
                ],
                datasets: [{
                  label: 'My First Dataset',
                  data: [300, 50, 100],
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                  ],
                  hoverOffset: 4
                }]
              },
            options: {
                // scales: {
                //     xAxes: [{
                //         display: false,
                //     }],
                //     yAxes: [{
                //         display: false,
                //     }],
                // }
            },

        });
    }, [])


    return (
     
         <div className='border border-gray-400 pt-0 rounded-xl w-full h-full '>
                    <canvas id='myChart1'></canvas>
       </div>
    
    )
}

export default CircleChart;