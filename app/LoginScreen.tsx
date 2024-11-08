import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './(tabs)/navigation/types';
import { useUser } from './UserContext'; // Nhập UserContext
import backgroundImage from '../assets/images/1.jpg'; // Đường dẫn đến file hình nền

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();
  const { login } = useUser(); // Lấy hàm login từ UserContext

  const handleLogin = () => {
    if (login(username, password)) {
      alert('Đăng nhập thành công!');
    navigation.navigate('Home'); // Chuyển đến màn hình chính
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
  };
  return (
    <ImageBackground 
      source={backgroundImage} // Sử dụng hình ảnh nội bộ
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Đăng Nhập</Text>
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Đăng Nhập" onPress={handleLogin} />
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: 'blue', textAlign: 'center', marginTop: 16 }}>
            Chưa có tài khoản? Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Thay đổi độ trong suốt nếu cần
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default LoginScreen;