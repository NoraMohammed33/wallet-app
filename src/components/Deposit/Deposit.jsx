import React, { useState } from 'react';
import Styles from "./Deposit.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { setTransaction, updateTransactions } from "../../Redux/transactionSlice"

export default function Deposit({ onClose }) {

    const [depositInput, setDepositInput] = useState(0);
    const dispatch = useDispatch();
    const { transactions } = useSelector((state) => state.transactions)
    const currentTime = new Date().getTime();

    const addFunds = () => {
        console.log(recentTransactions)
        const storedBalance = parseFloat(localStorage.getItem('currentBalance')) || 0;
        let amount = parseFloat(depositInput);
        if (amount) {
            let newBalance = storedBalance + amount
            let bons;
            if (amount >= 100 && amount < 500) {
                bons = 5;
                newBalance += bons;
            }
            else if (amount >= 500 && amount < 1000) {
                bons = 20;
                newBalance += bons;
            }
            else if (amount >= 1000) {
                bons = 50;
                newBalance += bons;
            }
            setDepositInput(0);

            const newTransaction = {
                date: new Date().toLocaleString(),
                type: 'deposit',
                amount: amount,
                balance: newBalance,
            };

            dispatch((setTransaction(newTransaction)))
            localStorage.setItem('currentBalance', newBalance);

        }

    }
    const recentTransactions = transactions.filter(transaction => {
        const transactionTime = new Date(transaction.date).getTime();
        const timeDifference = currentTime - transactionTime;
        return timeDifference >= 0 && timeDifference <= 5 * 60 * 1000; // Within 5 minutes
    });

    return (
        <>
            <div className={`${Styles.popup} row w-75 justify-content-between text-center`}>
                <div className="col-lg-3">
                    <input className="form-control my-5 mb-3" value={depositInput} onChange={(e) => setDepositInput(e.target.value)} placeholder='enter here' />
                    <button className="btn btn-success mx-2" onClick={() => { addFunds(); onClose(); }}>Deposit</button>
                    <button className="btn btn-danger" onClick={onClose}>Close</button>
                </div>
                {(recentTransactions.length?true:false) && (
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
