import React, { useEffect, useState } from 'react';
import Styles from "./Deposit.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { setTransaction, updateTransactions } from "../../Redux/transactionSlice"
import Gamification from '../Gamification/Gamification';
import Loading from '../Loading/Loading';

export default function Deposit() {

    const [depositInput, setDepositInput] = useState(0);
    const dispatch = useDispatch();
    const { transactions } = useSelector((state) => state.transactions)
    const [gam, setGam] = useState(false);
    const [bons, setBons] = useState(false);
    const currentTime = new Date().getTime();
    // let gam = false;
    // let bons;

    const addFunds = () => {
        const storedBalance = parseFloat(localStorage.getItem('currentBalance')) || 0;
        let amount = parseFloat(depositInput);
        if (amount) {
            let newBalance = storedBalance + amount
            if (amount >= 100 && amount < 500) {
                setBons(5);
                newBalance += 5;
                setGam(true)
            }
            else if (amount >= 500 && amount < 1000) {
                setBons(20);
                newBalance += 20;
                setGam(true)
            }
            else if (amount >= 1000) {
                setBons(50);
                newBalance += 50;
                setGam(true)
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
        console.log(gam)

    }
    const recentTransactions = transactions.filter(transaction => {
        const transactionTime = new Date(transaction.date).getTime();
        const timeDifference = currentTime - transactionTime;
        return timeDifference >= 0 && timeDifference <= 5 * 60 * 1000; // Within 5 minutes
    });

    const handleClosePopup = () => {
        setGam(false)
    };
    useEffect(() => {
        // console.log(bons)
    },[setBons],[setGam])

    return (
        <>
            {gam && (<Gamification bons={bons} onClose={handleClosePopup} />)}
            
            <div className={`${Styles.popup} row w-75 justify-content-between  m-auto mt-5`}>
                <div className="col-lg-3">
                    <input className="form-control my-5 mb-3"  onChange={(e) => setDepositInput(e.target.value)} placeholder='enter here' />
                    <button className="btn btn-success mx-2" onClick={() => { addFunds(); }}>Deposit</button>
                </div>
                {(recentTransactions.length?true:false) && (
                    <div className="col-lg-6 text-center">
                        <div className="row justify-content-between align-aitems-baselign">
                            <h5 className="col-1"><i class="fa-solid fa-rotate-left"></i></h5>
                            <h5 className='col-3'>Undo</h5>
                            <h5 className='col-3'>Amount</h5>
                            <h5 className='col-3'>Recent Trans</h5>
                        </div>
                        <div >
                            {recentTransactions.map((transaction, index) => (
                                <div className="row justify-content-between align-aitems-center" key={index}>
                                    <div className="col-1"><Loading /></div>
                                    <div className="col-3"><button className='btn btn-danger' onClick={() => dispatch(updateTransactions(transaction))}>undo</button></div>
                                    <p className='col-3'>{transaction.amount}</p>
                                    <p className='col-3'>{transaction.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
