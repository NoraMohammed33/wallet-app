import React, { useState } from 'react';
import Styles from "./Withdraw.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { setTransaction, updateTransactions } from "../../Redux/transactionSlice"

export default function Withdraw({ onClose }) {

    const [withdrawInput, setWithdrawInput] = useState(0);
    const [disabledInput, setDisabledInput] = useState(false);
    const dispatch = useDispatch();
    const { transactions } = useSelector((state) => state.transactions)
    const currentTime = new Date().getTime();

    const handleDisabled = (e) => {
        if (parseFloat(e) > parseFloat(localStorage.getItem('currentBalance'))) {
            setDisabledInput(true);
        }
        else {
            setDisabledInput(false);
        }
    }
    const handleWithdraw = () => {
        const storedBalance = parseFloat(localStorage.getItem('currentBalance')) || 0;

        let amount = parseFloat(withdrawInput);
        if (amount) {
            if (amount <= localStorage.getItem('currentBalance')) {
                let newBalance = storedBalance - amount
                setWithdrawInput(0);

                const newTransaction = {
                    date: new Date().toLocaleString(),
                    type: 'Withdraw',
                    amount: amount,
                    balance: newBalance,
                };

                dispatch((setTransaction(newTransaction)))
                localStorage.setItem('currentBalance', newBalance);
            }
        }
    }
    const recentTransactions = transactions.filter(transaction => {
        const transactionTime = new Date(transaction.date).getTime();
        const timeDifference = currentTime - transactionTime;
        return timeDifference >= 0 && timeDifference <= 5 * 60 * 1000; // Within 5 minutes
    })

    return (
        <>
            <div className={`${Styles.popup} row w-75 justify-content-between text-center m-auto mt-5`}>
                <div className="col-lg-3">
                    <input className="form-control my-5 mb-3" value={withdrawInput} onChange={(e) => { setWithdrawInput(e.target.value); handleDisabled(e.target.value) }} />
                    <button className="btn btn-success mx-2" onClick={() => { handleWithdraw();}} disabled={disabledInput}>Withdraw</button>
                </div>
                {(recentTransactions.length ? true : false) && (
                    <div className="col-lg-6 ">
                        <div className="row justify-content-between">
                            <h5 className='col-lg-3'>Undo</h5>
                            <h5 className='col-lg-3'>Amount</h5>
                            <h5 className='col-lg-3'>type</h5>
                        </div>
                        <div >
                            {recentTransactions.map((transaction, index) => (
                                <div className="row justify-content-between align-aitems-center" key={index}>
                                    <div className="col-lg-3"><button className='btn btn-danger' onClick={() => dispatch(updateTransactions(transaction))}>undo</button></div>
                                    <p className='col-lg-3'>{transaction.amount}</p>
                                    <p className='col-lg-3'>{transaction.type}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                )}
            </div>
        </>
    );
}
