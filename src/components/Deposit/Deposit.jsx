import React, { useState } from 'react';

export default function Deposit({ currentBalance, onClose }) {

    const [depositInput, setDepositInput] = useState(0);
    const addFunds = () => {
        let amount = parseFloat(depositInput);
        if (amount) {
            let newBalance = currentBalance + amount
            setDepositInput(0);
            localStorage.setItem('currentBalance', newBalance);
        }
    }

    return (
        <>
            <div className="popup">
                <input className="form-control mb-3"  onChange={(e) => setDepositInput(e.target.value)} />
                <button className="btn btn-success mx-2" onClick={addFunds}>Deposit</button>
                <button className="btn btn-danger" onClick={onClose}>Close Popup</button>
            </div>
        </>
    );
}
