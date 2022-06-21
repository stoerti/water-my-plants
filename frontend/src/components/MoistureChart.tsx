import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
    scales: {
        'x': {
            type: 'timeseries'
        }
    }
};

const labels = [
    new Date(),
    new Date(new Date().getTime() + (1000 * 60 * 60 * 24)),
    new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 2)),
    new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 3)),
    new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 4))
];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => 1),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => 2),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

function MoistureChart() {
    return <Line options={options} data={data} />;
}
export default MoistureChart;
