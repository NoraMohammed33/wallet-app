import React, { useState, useEffect } from "react";
import Styles from './Wallet.module.css'
import MainSlider from "../../Layouts/MainSlider/MainSlider";
import { NavLink } from "react-router-dom";

export default function Wallet() {

    const [currentBalance, setcurrentBalance] = useState(0);

    useEffect(() => {
        const storedBalance = parseFloat(localStorage.getItem('currentBalance')) || 0;
        setcurrentBalance(storedBalance)
    }, [setcurrentBalance])

    return (
        <>
            <MainSlider />
            <div className="row text-center justify-content-center ">
                <h2 className=" mt-3">Our Servies</h2>

                <div className="col-3 mt-3">
                    <div className={`card ${Styles.card}`}>
                        <div className="card-body">
                            <h5 className="card-title">Balance <span className="text-success"> {currentBalance}</span></h5>
                        </div>
                    </div>
                </div>

                <div className="col-3 my-3">
                    <NavLink to="/deposit" className="text-decoration-none">
                        <div className={`card ${Styles.card}`}>
                            <h5 className="card-body">Deposit</h5>
                        </div>
                    </NavLink>
                </div>

                <div className="col-3 my-3">
                    <NavLink to="/withdraw" className="text-decoration-none">
                        <div className={`card ${Styles.card}`}>
                            <h5 className="card-body">Withdraw</h5>
                        </div>
                    </NavLink>
                </div>

            </div>
        </>
    );
}
