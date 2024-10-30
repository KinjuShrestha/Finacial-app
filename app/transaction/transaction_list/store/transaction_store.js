import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../network/transaction_call'
const transactionStore= configureStore({
    reducer:{
        transactions: transactionReducer,
    }
})



export default transactionStore;
