import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
// Vistas
import HomeView from './src/Views/HomeView';
import RegistrationView from './src/Views/RegistrationView';
import LoginView from './src/Views/LoginView';
import ProfileView from './src/Views/ProfileView'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

//Para la navegación entre las pantallas
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Proveedor de contexto de usuario
import { AuthProvider } from './src/Views/AuthContext';


// ---------------------------------------------------------------


//Crea la pila de navegación
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    country: "",
    address: "",
    phone: ""
  });

  const [isAuthenticated, setAuthenticated] = useState(false);
  //Funciones utilizarias para la gestión del estado del usuario
  const logIn = (userData) => {
    //Aquí se debería hacer la lógica de inicio de sesión

    //Si es exitosa=>
    setUser(userData);

    setAuthenticated(true);

  }

  const logOut = () => {
    setUser({});
    setAuthenticated(false);

  }

  const register = (userData) => {
    setUser(userData);
    setAuthenticated(true);
    console.log("Registrado correctamente, isAuthenticated: ", isAuthenticated);
  }

  return (
    // Aquí AuthProvider está pasando todas las funciones/propiedades que se 
    //Definieron en el archivo AuthProvider.jsx
    <AuthProvider value={{ user, setUser, setAuthenticated, isAuthenticated, register, logOut, logIn }}>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="Registration" component={RegistrationView} />
        </Stack.Navigator>
      </NavigationContainer>

      <View style={styles.container}>
        <RegistrationView></RegistrationView>
        <StatusBar style="auto" />
      </View> */}

      <NavigationContainer>
        {/*isAuthenticated*/}
        {true ? (
          /*Creqación del bottomNavigator*/
          <Tab.Navigator 
          /*Se define la ruta en la que empieza*/
          initialRouteName='Profile'
          screenOptions={{
            /*Colores bottomNavigator*/
            tabBarActiveTintColor: '#39ab22',
            tabBarInactiveTintColor: '#707070',
            tabBarShowLabel: false
          }}>
            {/*En cada Tab.Screen hay un ícono propio de expo que se trae de @expo/vector-icons*/}
            <Tab.Screen name="Resources" component={HomeView}
              options={{
                tabBarLabel:'Resources',
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="light-bulb" color={color} size={size} />
                ),
              }} />
            <Tab.Screen name="Home" component={HomeView}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }} />
            <Tab.Screen name="Profile" component={ProfileView}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="SignIn" component={RegistrationView} options={{ headerShown: false }} />
            <Tab.Screen name="LogIn" component={LoginView} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
