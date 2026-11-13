import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AthleteTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Treino' component={() => null} />
      <Tab.Screen name='Inicio' component={() => null} />
      <Tab.Screen name='Balanco' component={() => null} />
    </Tab.Navigator>
  );
}

export function ManagerTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Aulas' component={() => null} />
      <Tab.Screen name='Dashboard' component={() => null} />
      <Tab.Screen name='Alunos' component={() => null} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='EscolherLogin' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='EscolherLogin' component={() => null} />
        <Stack.Screen name='LoginClientes' component={() => null} />
        <Stack.Screen name='RegistarClientes' component={() => null} />
        <Stack.Screen name='AutenticarClientes' component={() => null} />
        <Stack.Screen name='RecuperarPasswordEnviarLink' component={() => null} />
        <Stack.Screen name='RecuperarPasswordConfirmar' component={() => null} />
        <Stack.Screen name='MainClientes' component={AthleteTabNavigator} />
        <Stack.Screen name='MainGestores' component={ManagerTabNavigator} />
        <Stack.Screen name='MainAdmin' component={() => null} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}