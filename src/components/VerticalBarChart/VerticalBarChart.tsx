import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import styles from './VerticalBarChart.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: true,

    layout: {
        padding: 20
    },
    scales: {
        y: {
            grid: {
                display: false
            },
            border: {
                display: false
            },
            ticks: {
                font: {
                    size: 14
                }
            },
            stacked: true
        },
        x: {
            grid: {
                display: false
            },
            border: {
                display: false
            },
            ticks: {
                font: {
                    size: 14
                }
            },
            stacked: true
        }
    },

    plugins: {
        legend: {
            position: 'bottom',
            rtl: true,
            labels: {
                pointStyle: 'circle',
                padding: 30,
                usePointStyle: true,
                boxHeight: 10,
                font: {
                    size: 16
                }
            }
        },
        title: {
            display: true,
            text: 'Vertical Bar Chart',
            align: 'start',
            font: {
                size: 20
            },
            padding: {
                bottom: 40
            }
        },
        tooltip: {
            titleColor: 'white',
            bodySpacing: 10,
            footerSpacing: 10,
            usePointStyle: true,
            padding: 10,
            footerAlign: 'center',
            boxPadding: 4
        }
    }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data: ChartData<'bar'> = {
    labels,
    datasets: [
        {
            label: 'Activity',
            data: labels.map(() => faker.number.int({ min: 2, max: 12 })),
            backgroundColor: '#292D30',
            borderRadius: 10,
            barThickness: 20,
            borderSkipped: 'middle'
        },
        {
            label: 'Activity - 2',
            data: labels.map(() => faker.number.int({ min: 2, max: 12 })),
            backgroundColor: '#34B3F1',
            borderRadius: 10,
            barThickness: 20,
            borderSkipped: 'middle'
        }
    ]
};

export const VerticalBarChart = () => (
    <div className={styles.wrapper}>
        <Bar options={options} data={data} height={400} width={400} />
    </div>
);
