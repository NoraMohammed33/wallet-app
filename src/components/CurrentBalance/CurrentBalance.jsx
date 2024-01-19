import React from 'react';

export default function CurrentBalance({ currentBalance, onClose }) {
    return (
        <div>
            <h2>Your Current Balance: {currentBalance}</h2>
            <button className="btn btn-danger" onClick={onClose}>Close Popup</button>
        </div>
    );
}
