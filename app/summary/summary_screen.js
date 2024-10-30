import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import transactions from '../../data/transaction_dummy_data';
export default function SummaryScreen() {
    const totalExpenses = transactions.reduce((acc, item) => acc + item.amount, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>This Month</Text>
            <Text style={styles.total}>Total Expenses: ${totalExpenses.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f3e8ff',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#6a0dad',
    },
    total: {
        fontSize: 24,
        marginTop: 20,
        color: '#333',
    },
});
