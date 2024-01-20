import { configureStore } from "@reduxjs/toolkit";
import { transactionReducer } from "./transactionSlice";

let store = configureStore({
    reducer: {
        transactions: transactionReducer
    }
})
export default store;