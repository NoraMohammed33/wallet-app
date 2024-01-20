import React, { useState} from 'react';
import Styles from "./Deposit.module.css"
import {useDispatch} from 'react-redux';
import { setTransaction} from "../../Redux/transactionSlice"

export default function Deposit({onClose }) {

    const [depositInput, setDepositInput] = useState(0);
    const dispatch = useDispatch();

    const addFunds = () => {
        const storedBalance = parseFloat(localStorage.getItem('currentBalance')) || 0;
        let amount = parseFloat(depositInput);
        if (amount) {
            let newBalance = storedBalance + amount
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

    return (
        <>
            <div className={Styles.popup}>
                <input className="form-control mb-3" value={depositInput}  onChange={(e) => setDepositInput(e.target.value)} placeholder='enter here'/>
                <button className="btn btn-success mx-2" onClick={() => { addFunds(); onClose(); }}>Deposit</button>
                <button className="btn btn-danger" onClick={onClose}>Close Popup</button>
            </div>
        </>
    );
}
