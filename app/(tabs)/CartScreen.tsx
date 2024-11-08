// CartScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import { useCart } from '../CartContext'; // Import useCart

const CartScreen = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const renderCartItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text>{item.name}</Text>
        <Text>${item.price} x {item.quantity} = ${item.price * item.quantity}</Text>
        <View style={styles.quantityContainer}>
          <Button title="-" onPress={() => updateQuantity(item.id, -1)} />
          <Text>{item.quantity}</Text>
          <Button title="+" onPress={() => updateQuantity(item.id, 1)} />
        </View>
        <Button title="Remove" onPress={() => removeFromCart(item.id)} />
      </View>
    </View>
  );

  const handleCheckout = () => {
    alert('Checkout functionality will be implemented here.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  image: { width: 50, height: 50, marginRight: 10 },
  infoContainer: { flex: 1 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  total: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
});

export default CartScreen;