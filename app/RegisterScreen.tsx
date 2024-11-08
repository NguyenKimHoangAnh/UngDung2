import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Nhập useNavigation
import { useUser } from './UserContext'; // Nhập UserContext
import backgroundImage from '../assets/images/1.jpg'; // Đường dẫn đến file hình nền

const RegisterScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigation = useNavigation();
  const { register } = useUser(); // Lấy hàm register từ UserContext

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    
    register(username, password); // Đăng ký người dùng
    alert('Đăng ký thành công!');
    navigation.navigate('Login'); // Chuyển đến trang đăng nhập
  };
  return (
    <ImageBackground 
      source={backgroundImage} // Sử dụng hình ảnh nội bộ
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Đăng Ký</Text>
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
        <TextInput
          style={styles.input}
          placeholder="Xác nhận mật khẩu"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <Button title="Đăng Ký" onPress={handleRegister} />
        
        {/* Liên kết đến trang đăng nhập */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>
            Đã có tài khoản? Đăng nhập
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
  loginLink: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default RegisterScreen;