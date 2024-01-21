import React from 'react';
import Styles from "./Transactions.module.css"
import {useSelector} from 'react-redux';

export default function Transactions() {

    const { transactions } = useSelector((state) => state.transactions)

    return (
        <>
            <div className={`${Styles.transactions} row w-75 m-auto mt-5 text-center`}>
                <div className="row justify-content-between align-aitems-baselign">
                    <h5 className='col-lg-3'>Balance</h5>
                    <h5 className='col-lg-3'>Date</h5>
                    <h5 className='col-lg-3'>Amount</h5>
                    <h5 className='col-lg-3'>Transaction</h5>
                </div>
                <div >
                    {transactions.map((transaction, index) => (
                        <div className="row justify-content-between align-aitems-center" key={index}>
                            <p className="col-lg-3">{transaction.balance}</p>
                            <p className="col-lg-3">{transaction.date}</p>
                            <p className='col-lg-3'>{transaction.amount}</p>
                            <p className='col-lg-3'>{transaction.type}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
