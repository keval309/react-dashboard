import {
  ArcElement,
    BarElement,
    CategoryScale,
    ChartData,
    Chart as ChartJS,
    ChartOptions,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);




type BarChartProps = {
    horizontal?: boolean;
    data1: number[];
    data2: number[];
    title1: string;
    title2: string;
    bgColor1: string;
    bgColor2: string;
    label?: string[];
}
export const BarChart = (props: BarChartProps) => {
    const months =['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const {horizontal= false, data1, data2, title1, title2, bgColor1, bgColor2, label=months} = props
  
   
    const options:ChartOptions<'bar'> = {
        responsive: true,
        scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        indexAxis: horizontal ? 'y' : 'x' as const,
        plugins: {
            legend: {
                position: 'top' as const,
                display : false
            },
            title: {
                display : false,
                text: 'Chart.js Bar Chart',
            },   
        },
    };

    const data:ChartData<"bar" , number[] , string> = {
        labels:label,
        datasets: [
            {
                label: title1,
                data: data1,
                backgroundColor: bgColor1,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.4,
            },
            {
                label: title2,
                data: data2,
                backgroundColor: bgColor2,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.4,
              },
        ],
    };
    return <Bar width={horizontal ? "200%" : ""} options={options} data={data} id='barChart' />;
}


interface DoughnutChartProps {
    labels: string[];
    data: number[];
    backgroundColor: string[];
    cutout?: number | string;
    legends?: boolean;
    offset?: number[];
  }
  
  export const DoughnutChart = ({
    labels,
    data,
    backgroundColor,
    cutout,
    legends = true,
    offset,
  }: DoughnutChartProps) => {
    const doughnutData: ChartData<"doughnut", number[], string> = {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          borderWidth: 0,
          offset,
        },
      ],
    };
  
    const doughnutOptions: ChartOptions<"doughnut"> = {
      responsive: true,
      plugins: {
        legend: {
          display: legends,
          position: "bottom",
          labels: {
            padding: 40,
          },
        },
      },
      cutout,
    };
  
    return <Doughnut data={doughnutData} options={doughnutOptions} id='doughnutChart'  />;
  };
  