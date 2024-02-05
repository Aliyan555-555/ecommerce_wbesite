import { useEffect } from "react"
import { Chart } from "chart.js";
import { economy } from "@/Constants";
function Example() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: [66, 144, 146, 116, 107, 131, 43],
                    label: "Applied",
                    backgroundColor: "rgb(109, 293, 181)",
                    borderWidth: 2
                }, {
                    data: [40, 100, 44, 70, 63, 30, 10],
                    label: "Accepted",
                
                    backgroundColor: "rgb(75, 192, 192)",
                    borderWidth: 2
                }, {
                    data: [20, 24, 50, 34, 33, 23, 12],
                    label: "Pending",
                    backgroundColor: "rgb(255, 205, 86)",
                    borderWidth: 2
                }, {
                    data: [6, 20, 52, 12, 11, 78, 21],
                    label: "Rejected",
                    backgroundColor: "rgb(255, 99, 132)",
                    borderWidth: 2
                }
                ]
            },
        });
    }, [])


    return (
        <>
            {/* Bar chart */}
            
            <div className=" flex mx-auto my-auto">
                <div className='border-2 border-[#9b9a9a] pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas width={1000}   height={500} id='myChart'></canvas>
                </div>
            </div>
        </>
    )
}

export default Example;