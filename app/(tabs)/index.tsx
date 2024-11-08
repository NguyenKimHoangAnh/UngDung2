// index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from '../CartContext'; // Nhập CartProvider
import { UserProvider } from '../UserContext'; // Nhập UserProvider
import HomeScreen from '../HomeScreen';
import ProductDetailScreen from '../ProductDetailScreen';
import CartScreen from './CartScreen';
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';
import { RootStackParamList } from './navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <UserProvider> {/* Bọc CartProvider bên trong UserProvider */}
      <CartProvider>
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </UserProvider>
  );
}

export default App;