import React from 'react';
import Styles from "./CurrentBalance.module.css"

export default function CurrentBalance({ onClose }) {
    const storedBalance = parseFloat(localStorage.getItem('currentBalance')) || 0;
    return (
        <div className={Styles.popup}>
            <h2>Your Current Balance: <span> {storedBalance}</span> </h2>
            <button className="btn btn-danger" onClick={onClose}>Close Popup</button>
        </div>
    );
}
