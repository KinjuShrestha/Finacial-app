
import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import { useRoute } from '@react-navigation/native';
export default function TransactionDetailScreen(){
    
    
   
        const route = useRoute();
        const { transaction } = route.params;
    
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{transaction.name}</Text>
                <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{transaction.date}</Text>
                <Text style={styles.details}>{transaction.details}</Text>
            </View>
        );
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#f3e8ff',
        },
        title: {
            fontSize: 28,
            fontWeight: 'bold',
            color: '#6a0dad',
        },
        amount: {
            fontSize: 24,
            color: '#333',
            marginVertical: 10,
        },
        date: {
            fontSize: 18,
            color: '#666',
        },
        details: {
            fontSize: 16,
            marginTop: 20,
            color: '#444',
        },
    });