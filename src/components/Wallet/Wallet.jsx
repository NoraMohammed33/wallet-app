import React, { useState, useEffect } from "react";
import Styles from './Wallet.module.css'
import CurrentBalance from "../CurrentBalance/CurrentBalance";
import Deposit from "../Deposit/Deposit";
import Withdraw from "../Withdraw/Withdraw";

export default function Wallet() {

    const [balancePopup, setBalancePopup] = useState(false);
    const [depositPopupOpen, setDepositPopupOpen] = useState(false);
    const [withdrawPopupOpen, setWithdrawPopupOpen] = useState(false);

    const balanceButtonClick = () => {
        setBalancePopup(true);
    };
    const DepositButtonClick = () => {
        setDepositPopupOpen(true);
    };
    const withdrawButtonClick = () => {
        setWithdrawPopupOpen(true);
    };
    const handleClosePopup = () => {
        setBalancePopup(false);
        setDepositPopupOpen(false);
        setWithdrawPopupOpen(false);
    };

    return (
        <>
            <div className="container">

                <div className="currentBalance mt-3">
                    <button className="btn btn-primary" onClick={balanceButtonClick}>Current balance inquiry</button>
                    {balancePopup && <CurrentBalance onClose={handleClosePopup} />}
                </div>

                <div className="deposit my-3">
                    <button className="btn btn-primary" onClick={DepositButtonClick}>Deposit</button>
                    {depositPopupOpen && <Deposit onClose={handleClosePopup} />}
                </div>

                <div className="withdrawm my-3">
                    <button className="btn btn-primary" onClick={withdrawButtonClick}>Withdraw</button>
                    {withdrawPopupOpen && <Withdraw onClose={handleClosePopup} />}
                </div>

            </div>
        </>
    );
}
