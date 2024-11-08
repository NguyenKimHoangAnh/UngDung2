import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RootStackParamList } from './(tabs)/navigation/types';
import { RouteProp } from '@react-navigation/native';

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const { width: windowWidth } = Dimensions.get('window');

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailScreenRouteProp>();
  const { productId } = route.params; // Lấy productId từ params

  // Dữ liệu sản phẩm
  const products = [
    { id: '1', name: 'Iphone', image: require('../assets/images/pro/16.jpg'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 50 },
    { id: '2', name: 'Redmi note 12', image: require('../assets/images/pro/18.jpg'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 60 },
    { id: '3', name: 'Oppo A3', image: require('../assets/images/pro/19.jpg'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 70 },
    { id: '4', name: 'samsung s24 ultra', image: require('../assets/images/pro/20.jpg'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 80 },
  ];

  // Tìm sản phẩm tương ứng với productId
  const productData = products.find(product => product.id === productId);

  // Kiểm tra nếu không tìm thấy sản phẩm
  if (!productData) {
    return (
      <View style={styles.container}>
        <Text>Sản phẩm không tồn tại.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={productData.image} style={styles.image} resizeMode="contain" />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{productData.name}</Text>
        <Text style={styles.price}>Price: ${productData.price}</Text>
        <Text style={styles.description}>{productData.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'flex-start',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});

export default ProductDetailScreen;