import React, { useState } from 'react';
import Styles from "./Withdraw.module.css"
import { useDispatch} from 'react-redux';
import { setTransaction } from "../../Redux/transactionSlice"

export default function Withdraw({onClose }) {

    const [withdrawInput, setWithdrawInput] = useState(0);
    const [disabledInput, setDisabledInput] = useState(false);
    const dispatch = useDispatch();

    const handleDisabled = (e) => {
        console.log(localStorage.getItem('currentBalance'))
        if (parseFloat(e) < parseFloat(localStorage.getItem('currentBalance'))) {
            setDisabledInput(false);
        }
        else {
            setDisabledInput(true);
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
    return (
        <>
            <div className={Styles.popup}>
                <input className="form-control mb-3" value={withdrawInput} onChange={(e) => { setWithdrawInput(e.target.value); handleDisabled(e.target.value) }} />
                <button className="btn btn-success mx-2" onClick={() => { handleWithdraw(); onClose(); }} disabled={disabledInput}>Withdraw</button>
                <button className="btn btn-danger" onClick={onClose}>Close Popup</button>
            </div>
        </>
    );
}
