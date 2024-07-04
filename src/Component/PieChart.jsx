import { Pie } from 'react-chartjs-2';

const PieChart = () => {
    const data = {
        datasets: [
            {
                data: [25, 15, 60],
                backgroundColor: ['#FFC107', '#4CAF50', '#2196F3'],
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                enabled: false,
            },
        },
    };

    return (
        <div className=' w-[130.36px] h-[130.5px]'>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
