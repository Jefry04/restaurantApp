import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NewOrder from './pages/NewOrder';
import Menu from './pages/Menu';
import DishesDetail from './pages/DishesDetail';
import OrderForm from './pages/OrderForm';
import OrderSummary from './pages/OrderSummary';
import ProgressOrder from './pages/ProgressOrder';
import FirebaseState from './store/firebase/firebaseState';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <FirebaseState>
      <NavigationContainer>
        <>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#FFDA00',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen
              name="NewOrder"
              component={NewOrder}
              options={{title: 'NUEVA ORDEN'}}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{title: 'NUESTRO MENU'}}
            />
            <Stack.Screen
              name="DishesDetail"
              component={DishesDetail}
              options={{title: 'DETALLE PLATO'}}
            />
            <Stack.Screen
              name="OrderForm"
              component={OrderForm}
              options={{title: 'ORDENAR PLATO'}}
            />
            <Stack.Screen
              name="OrderSummary"
              component={OrderSummary}
              options={{title: 'RESUMEN PEDIDO'}}
            />
            <Stack.Screen
              name="ProgressOrder"
              component={ProgressOrder}
              options={{title: 'PROGRESO PEDIDO'}}
            />
          </Stack.Navigator>
        </>
      </NavigationContainer>
    </FirebaseState>
  );
}

export default App;
