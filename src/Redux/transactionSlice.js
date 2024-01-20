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
        updateTransactions: (state, actions) => {
            state.transactions.forEach((transaction, index) => {
                if (transaction.date === actions.payload.date) {
                        state.transactions.splice(index,1)
                    }
            });
            localStorage.setItem('transactions', JSON.stringify(state.transactions))
            let balance = localStorage.getItem('currentBalance')
            if (actions.payload.type === 'deposit') {
                balance -= actions.payload.amount
                localStorage.setItem('currentBalance',balance)
            }
            else {
                balance += actions.payload.amount
                localStorage.setItem('currentBalance',balance)
            }
        }
    }
});

export let transactionReducer = transactionSlice.reducer;
export let {setTransaction,updateTransactions} = transactionSlice.actions; 