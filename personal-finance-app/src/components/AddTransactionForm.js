import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransactionForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount
        };
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    };

    return (
        <div className="add-transaction-form">
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="text">Text: </label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..."
                        required
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount: </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..."
                        required
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    );
};

export default AddTransactionForm;