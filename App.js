import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionDetailScreen from './app/transaction/transaction_detail/transcation_detail_provider';
import TransactionListScreen from './app/transaction/transaction_list/transaction_list_provider';
import SummaryScreen from './app/summary/summary_screen';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
export default function App() {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  function MainTabNaviagtor(){
    return (
      <Tab.Navigator>
        <Tab.Screen name="Transaction" component={TransactionNaviagtor} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="attach-money" color={color} size={size} /> 
                    ),
                    headerShown:false
                }}/>
  
   <Tab.Screen name="Summary" component={SummaryScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="assessment" color={color} size={size} /> 
                    ),
                }} />
      </Tab.Navigator>
    );
  
  }

  function TransactionNaviagtor(){
    return (
      <Stack.Navigator>
        <Stack.Screen name="transactionlist" component={TransactionListScreen} options={{ title: 'Transaction List' }}/>
        <Stack.Screen name="transactiondetail" component={TransactionDetailScreen} options={{ title: 'Transaction Detail' }}/>

        

      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <MainTabNaviagtor></MainTabNaviagtor>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
