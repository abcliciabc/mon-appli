import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ProfilePage from './ProfilPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const logoUrl = './../assets/logo1.png';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require(logoUrl)} style={styles.logo} />
      <Text>Bienvenue sur mon application !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#e8e4d9',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
  },
});

export default HomePage;
