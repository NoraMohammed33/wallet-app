import { createSlice } from "@reduxjs/toolkit";

const loadStoredTransactions = () => {
    const transactions = localStorage.getItem('transactions');
    return transactions ? JSON.parse(transactions) : [];
};

let initialState = { transactions: loadStoredTransactions() };

let transactionSlice = createSlice({
    name: 'transaction',
    initialState: initialState,
    reducers: {
        setTransaction: (state,actions) => {
            state.transactions.push(actions.payload)
            localStorage.setItem('transactions', JSON.stringify(state.transactions))
        },
        // getTransactions: () => {
        //     localStorage.getItem('transactions')
        // }
    }
});

export let transactionReducer = transactionSlice.reducer;
export let {setTransaction} = transactionSlice.actions; 