import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './screens/HomePage';
import ProfilePage from './screens/ProfilPage';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Accueil" 
          component={HomePage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" size={size} color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Profil" 
          component={ProfilePage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-person" size={size} color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Connexion" 
          component={LoginPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-log-in" size={size} color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Inscription" 
          component={RegisterPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-create" size={size} color={color} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
