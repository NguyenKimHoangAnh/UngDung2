// HomeScreen.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './(tabs)/navigation/types';
import { useCart } from './CartContext'; // Import useCart 

const { width: windowWidth } = Dimensions.get('window');

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

// Dữ liệu sản phẩm
const products = [
  { id: '1', name: 'Iphone', image: require('../assets/images/pro/16.jpg'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 50 },
  { id: '2', name: 'Redmi note 12', image: require('../assets/images/pro/18.jpg'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 60 },
  { id: '3', name: 'Oppo A3', image: require('../assets/images/pro/19.jpg'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 70 },
  { id: '4', name: 'samsung s24 ultra', image: require('../assets/images/pro/20.jpg'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 80 },
];

// Dữ liệu cho slider
const sliderImages = [
  { id: '1', uri: require('../assets/images/sli/4641946fa7ab77c5753f804a8327a859.jpg') },
  { id: '2', uri: require('../assets/images/sli/sli1.jpg') },
  { id: '3', uri: require('../assets/images/sli/sli1.jpg') },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { addToCart } = useCart(); // Lấy addToCart từ context

  return (
    <View style={styles.container}>
      {/* Header: Logo, Search Bar, and Cart */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/cate/Dell_Logo.png')} // Lấy logo từ tệp
          style={styles.logo}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search products..."
        />
        <Icon 
          name="cart" 
          size={30} 
          onPress={() => navigation.navigate('Cart')} 
          style={styles.cartIcon}
        />
          <Icon 
          name="person" 
          size={30} 
          onPress={() => navigation.navigate('Login')} // Cập nhật điều hướng đến trang đăng nhập
          style={styles.userIcon}
        />
      </View>

      {/* Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => console.log('Điện thoại clicked')}>
          <Text>Điện thoại</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Laptop clicked')}>
          <Text>Laptop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('PC clicked')}>
          <Text>PC</Text>
        </TouchableOpacity>
      </View>

      {/* Slider (ScrollView) */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={[styles.scrollView, { width: windowWidth }]}
      >
        {sliderImages.map((item) => (
          <Image
            key={item.id}
            source={item.uri}
            style={styles.sliderImage}
            resizeMode="contain"
          />
        ))}
      </ScrollView>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image 
              source={item.image} 
              style={styles.productImage} 
              resizeMode="contain" 
            />
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
              >
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => addToCart(item)} // Thêm sản phẩm vào giỏ hàng
              >
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  cartIcon: {
    marginLeft: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  scrollView: {
    height: 200,
    marginBottom: 20,
  },
  sliderImage: {
    width: windowWidth,
    height: '100%',
    borderRadius: 5,
  },
  productCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default HomeScreen;