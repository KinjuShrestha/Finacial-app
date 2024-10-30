import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList ,TouchableOpacity} from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { setTransactions } from '../network/transaction_call';
import dummyTransactions from '../../../../data/transaction_dummy_data';
import { useNavigation } from '@react-navigation/native';
export default function TransactionComponent(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTransactions(dummyTransactions)); 
    }, [dispatch]);
    const transactionList = useSelector(state => state.transactions.transactionList);
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <TouchableOpacity 
           
            onPress={() => navigation.navigate('transactiondetail', { transaction: item })} 
        >
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
            <Text style={styles.date}>{item.date}</Text>
        </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
         
            <FlatList 
                data={transactionList} 
                renderItem={renderItem} 
                keyExtractor={item => item.transactionId} 
                contentContainerStyle={styles.listContainer} 
            />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        padding: 16,
    },
    item: {
        backgroundColor: '#e0bbf1',
        padding: 16,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4b0082',
    },
    amount: {
        fontSize: 16,
        color: '#333',
    },
    date: {
        fontSize: 14,
        color: '#666',
    },
});