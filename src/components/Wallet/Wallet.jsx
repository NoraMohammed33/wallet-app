import React, { useState, useEffect } from "react";
import Styles from './Wallet.module.css'
import CurrentBalance from "../CurrentBalance/CurrentBalance";
import Deposit from "../Deposit/Deposit";

export default function Wallet() {

    const [currentBalance, setCurrentBalance] = useState(0);
    const [balancePopup, setBalancePopup] = useState(false);
    const [depositPopupOpen, setDepositPopupOpen] = useState(false);

    const balanceButtonClick = () => {
        setBalancePopup(true);
    };
    const DepositButtonClick = () => {
        setDepositPopupOpen(true);
    };
    const handleClosePopup = () => {
        setBalancePopup(false);
        setDepositPopupOpen(false);
    };

    useEffect(() => {
        const storedBalance = parseFloat(localStorage.getItem('currentBalance')) || 0;
        setCurrentBalance(storedBalance);
    }, []);

    return (
        <>
            <div className="container">

                <div className="currentBalance mt-3">
                    <button className="btn btn-primary" onClick={balanceButtonClick}>Current balance inquiry</button>
                    {balancePopup && <CurrentBalance onClose={handleClosePopup} currentBalance={currentBalance} />}
                </div>

                <div className="deposit my-3">
                    <button className="btn btn-primary" onClick={DepositButtonClick}>Deposit</button>
                    {depositPopupOpen && <Deposit onClose={handleClosePopup} currentBalance={currentBalance} />}
                </div>

            </div>
        </>
    );
}
