import React, { useState} from 'react';
import Styles from "./Withdraw.module.css"

export default function Withdraw({ currentBalance, onClose }) {
    const [withdrawInput, setWithdrawInput] = useState(0);
    const [disabledInput, setDisabledInput] = useState(true);

    const handleDisabled = () => {
        if (withdrawInput > localStorage.getItem('currentBalance')) {
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
                localStorage.setItem('currentBalance', newBalance);
            }
        }
    }
    return (
        <>
            <div className={Styles.popup}>
                <input className="form-control mb-3" value={withdrawInput} onChange={(e) => { setWithdrawInput(e.target.value); handleDisabled()}} />
                <button className="btn btn-success mx-2" onClick={() => { handleWithdraw(); onClose(); }} disabled={!disabledInput}>Withdraw</button>
                <button className="btn btn-danger" onClick={onClose}>Close Popup</button>
            </div>
        </>
    );
}
