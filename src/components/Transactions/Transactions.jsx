import React from 'react';
// import Styles from "./Transactions.module.css"
import {useSelector} from 'react-redux';

export default function Transactions() {

    const { transactions } = useSelector((state) => state.transactions)

    return (
        <div>
            {transactions.map((transaction, index) => (
                <div key={index}>
                    {transaction.type}
                </div>
            ))}
        </div>
    );
}
