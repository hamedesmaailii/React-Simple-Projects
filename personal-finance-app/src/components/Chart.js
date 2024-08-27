import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalState';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const totalIncome = amounts.filter(amount => amount > 0).reduce((acc, item) => acc + item, 0);
    const totalExpense = amounts.filter(amount => amount < 0).reduce((acc, item) => acc + item, 0) * -1;

    const data = {
        labels: ['Income', 'Expense'],
        datasets: [
            {
                label: 'Income vs Expense',
                data: [totalIncome, totalExpense],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }
        ]
    };

    return (
        <div>
            <h3>Expense vs Income</h3>
            <Pie data={data} />
        </div>
    );
};

export default Chart;