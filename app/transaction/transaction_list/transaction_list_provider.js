import React from 'react';
import transactionStore from './store/transaction_store';
import { Provider } from 'react-redux';
import TransactionComponent from './component/transaction_list_widget';
export default function TransactionListScreen() {

return <Provider store={transactionStore}>
<TransactionComponent/>
</Provider>
}

 