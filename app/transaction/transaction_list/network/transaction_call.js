import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    transactionList : []
}


const transactionData = createSlice({
   name: 'transactions',
   initialState,
   
    reducers:{
        setTransactions: (state, action) => {
            state.transactionList = action.payload;
        },
    }
})
export const{setTransactions}=transactionData.actions;
export default transactionData.reducer