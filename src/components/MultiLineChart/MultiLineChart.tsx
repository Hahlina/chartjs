import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options: ChartOptions<'line'> = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false
    },
    scales: {
        y: {
            grid: {
                display: false
            },
            ticks: {
                stepSize: 500
            },
            suggestedMin: 0
        },
        x: {
            grid: {
                color: 'rgba(225, 255, 255, 0.02)'
            }
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data: ChartData<'line'> = {
    labels,
    datasets: [
        {
            data: [3400, 3000, 2500, 4500, 2500, 3400, 3000],
            label: 'Front',
            fill: true,
            backgroundColor: 'rgba(195, 40, 96, 0.1)',
            borderColor: 'rgba(195, 40, 96, 1)',
            pointBackgroundColor: 'rgba(195, 40, 96, 1)',
            pointBorderColor: '#202b33',
            pointHoverBorderColor: 'rgba(225,225,225,0.9)',
            pointRadius: 6,
            pointBorderWidth: 2,
            borderWidth: 3,
            tension: 0.5
        },
        {
            label: 'Middle',
            fill: true,
            backgroundColor: 'rgba(255, 172, 100, 0.1)',
            borderColor: 'rgba(255, 172, 100, 1)',
            pointBackgroundColor: 'rgba(255, 172, 100, 1)',
            pointBorderColor: '#202b33',
            pointHoverBorderColor: 'rgba(225,225,225,0.9)',
            data: [1900, 1700, 2100, 3600, 2200, 2500, 2000],
            pointRadius: 6,
            pointBorderWidth: 2,
            borderWidth: 3,
            tension: 0.5
        },
        {
            label: 'Back',
            fill: true,
            backgroundColor: 'rgba(19, 71, 34, 0.3)',
            borderColor: 'rgba(88, 188, 116, 1)',
            pointBackgroundColor: 'rgba(88, 188, 116, 1)',
            pointBorderColor: '#202b33',
            pointHoverBorderColor: 'rgba(225,225,225,0.9)',
            data: [1000, 1400, 1100, 2600, 2000, 900, 1400],
            pointRadius: 6,
            pointBorderWidth: 2,
            borderWidth: 3,
            tension: 0.5
        }
    ]
};

export const MultiLineChart = () => (
    <div style={{ width: 800, height: 500 }}>
        <Line options={options} data={data} />
    </div>
);
