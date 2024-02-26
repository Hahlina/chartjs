import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ChartData,
    ChartOptions,
    ScriptableContext
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

import styles from './LineChart.module.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
        y: {
            grid: {
                display: true
            },
            ticks: {
                stepSize: 100,
                align: 'end',
                font: {
                    size: 15
                }
            },
            border: {
                display: false
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            display: false,
            position: 'top',
            align: 'end'
        },
        title: {
            display: true,
            text: 'Line Chart',
            align: 'start',
            font: {
                size: 20
            },
            padding: {
                bottom: 40
            }
        }
    }
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const data: ChartData<'line'> = {
    labels,
    yLabels: [0],
    datasets: [
        {
            fill: true,
            label: 'Dataset',
            // data: labels.map(() => faker.number.int({ min: 0, max: 300 })),
            data: [50, 150, 100, 275, 140, 200, 140],
            borderColor: '#95A4FC',
            borderWidth: 4,
            borderCapStyle: 'round',
            backgroundColor: (context: ScriptableContext<'line'>) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, '#95A4FC');
                gradient.addColorStop(0.5, 'rgba(149, 164, 252, 0.4)');
                gradient.addColorStop(1, 'rgba(149, 164, 252, 0)');
                return gradient;
            },
            tension: 0.5,
            pointRadius: 0
        }
    ]
};

export const LineChart = () => (
    <div className={styles.wrapper}>
        <Line options={options} data={data} />
    </div>
);
