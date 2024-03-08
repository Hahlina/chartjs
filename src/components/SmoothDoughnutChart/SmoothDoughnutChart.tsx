import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions, ChartData, ChartMeta, Plugin } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const centerText: Plugin<'doughnut'> = {
    id: 'centerText',
    beforeDatasetsDraw(chart: ChartJS<'doughnut'>) {
        const { ctx } = chart;
        const chartMeta: ChartMeta<'doughnut'> = chart.getDatasetMeta(0);
        const totalValue = String(chartMeta.total);

        ctx.save();
        const x = chart.getDatasetMeta(0).data[0].x;
        const y = chart.getDatasetMeta(0).data[0].y;

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = 'bold 20px sans-serif';
        ctx.fillText(totalValue, x, y);
        ctx.fillStyle = '#AAAAAA';
    }
};

const options: ChartOptions<'doughnut'> = {
    cutout: 75,
    layout: {
        padding: 5
    },
    responsive: true,
    elements: {
        arc: {
            borderWidth: 6,
            spacing: 10,
            borderRadius: 10
        }
    },
    plugins: {
        legend: {
            display: false,
            position: 'top',
            align: 'end'
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

const data: ChartData<'doughnut'> = {
    labels: ['Red', 'Grey', 'Blue'],
    datasets: [
        {
            data: [400, 540, 290],
            backgroundColor: ['red', 'gray', 'blue']
        }
    ]
};

export const SmoothDoughnutChart = () => (
    <div style={{ background: 'white', padding: 20, borderRadius: 10 }}>
        <Doughnut plugins={[centerText]} data={data} options={options} width={200} height={200} />
    </div>
);
