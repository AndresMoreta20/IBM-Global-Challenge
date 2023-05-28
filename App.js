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



//Para manejo de usuario
import { register, logIn } from './src/auth/authControll.js';
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
  const logInUser = async (userData) => {
    //Aquí se debería hacer la lógica de inicio de sesión
    console.log("UserData en login: ", userData);
    const res = await logIn(userData);
    console.log("Login RES: ", res);

    //Si es exitosa=>
    setUser(userData);

    setAuthenticated(true);

  }

  const logOut = () => {
    setUser({});
    setAuthenticated(false);

  }

  const registerUser = async (userData) => {
    //Aquí va la lógica de registro en firebase
    try {
      const res = await register(userData);
      console.log("Usuario creado satisfactoriamente: ", res);
      setUser(res);
      setAuthenticated(true);
      console.log("Registrado correctamente, isAuthenticated: ", isAuthenticated);
    } catch (error) {
      setUser({
        email: "",
        password: "",
        name: "",
        lastName: "",
        country: "",
        address: "",
        phone: ""
      });
      setAuthenticated(false);
      console.log("NO registrado correctamente, isAuthenticated: ", isAuthenticated);
      console.error(error);
      console.log("No se pudo registrar usuario");
    }
  }

  {/*Datos de prueba, deberían venir en props de la función*/ }
  const userData = {
    name: "Tito Jaramillo",
    email: "tito.jaramillo@udla.edu.ec",
    phone: "+593 996693539",
    country: "Ecuador",
  };

  return (

    // Aquí AuthProvider está pasando todas las funciones/propiedades que se 
    //Definieron en el archivo AuthProvider.jsx
    <AuthProvider value={{ user, setUser, setAuthenticated, isAuthenticated, registerUser, logOut, logInUser }}>
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
        {isAuthenticated ? (
          /*Creqación del bottomNavigator*/
          <Tab.Navigator
            /*Se define la ruta en la que empieza*/
            initialRouteName='Profile'
            screenOptions={{
              /*Colores bottomNavigator*/
              tabBarActiveTintColor: '#39ab22',
              tabBarInactiveTintColor: '#707070',
              tabBarShowLabel: false,
              headerShown: false
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
            <Tab.Screen name="Profile" 
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }}
              >
                {() => <ProfileView userData={userData}/>}
              </Tab.Screen>
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="SignIn" component={RegistrationView} options={{ headerShown: false }} />
            <Tab.Screen name="LogIn" component={LoginView} options={{ headerShown: false }}/>
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