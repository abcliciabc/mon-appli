import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import LoginPage from './LoginPage';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Prénom:</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre prénom"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nom:</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre nom de famille"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Adresse e-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre adresse e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mot de passe:</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre mot de passe"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirmer le mot de passe:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirmez votre mot de passe"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default RegisterPage;
