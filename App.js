import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
// Vistas
import HomeView from './src/Views/HomeView';
import RegistrationView from './src/Views/RegistrationView';
import LoginView from './src/Views/LoginView';
import ProfileView from './src/Views/ProfileView'
import ResourcesView from './src/Views/ResourcesView';
import ProfileEditView from './src/Views/ProfileEditView';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

//Colores
import { Black, DarkGray, Gray, Green, White } from './src/Components/Estilos';

//Para la navegación entre las pantallas
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Proveedor de contexto de usuario
import { AuthProvider } from './src/Views/AuthContext';



//Para manejo de usuario
import { register, logIn, signInWithGoogle } from './src/auth/authControll.js';
import DiscoverView from './src/Views/DiscoverView';
import SalePostView from './src/Views/SalePostView';

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

  const registerWithGoogle = async () => {
    console.log("Registro con Google APP");
    await signInWithGoogle();
    console.log("Registro con Google APP 2");
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
    firstname: 'Tito',
    lastname: 'Jaramillo',
    phone: '+593 996693539',
    country: 'Ecuador',
    password: '!!password?',
    email: "titoj740@gmail.com",
    address: 'Urb. Condado, Quito',

    /* !! Esto estaba comentado :v */
    image: "../../assets/img.png",

    /* ESto no sé que es 
    likes: z.array(z.string()),*/
  };

  {/* Posts de productos */ }
  const posts = [
    {
      author: 'Autor Producto', //!! ESto es una referencia a un usuario?
      address: 'Dirección venta, texto ligeramente largo',
      likes: 230,
      hashtags: ['Nature', 'Plastics', 'Algo más', 'fdjslk'],
      category: 'waste',// Puede ser o waste o product
      // Esto ya no iría si va unidoproduct: z.string(),
      provider: 'Proveedor', // !! No es lo mismo que autor? Se usa?
      name: 'Nombre del producto',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio ex. Vivamus tincidunt dignissim neque, vitae maximus nisl finibus ut. Praesent ac libero vel arcu molestie congue nec vel dolor. Proin posuere quam vel placerat facilisis. Nullam eu lobortis dolor, ac ornare mi. Praesent nulla velit, elementum sit amet consequat sed, hendrerit a augue. Suspendisse lobortis velit vitae aliquam efficitur. Fusce efficitur erat a neque semper, maximus gravida arcu tempor. Vivamus rhoncus diam erat, non venenatis felis sagittis eget. Integer quis dolor lobortis, ultrices neque sit amet, egestas odio. Sed aliquet suscipit felis ut lacinia.',
      degradationTime: "10 años",
      image: "../../assets/img.png",
      unitOfMeasure: "Unidad de medida",
      price: 25.50,
      quantity: 15,
      // category: z.enum(["waste", "product"]) !! este está repetido
    },
    {
      author: 'Autor Producto', //!! ESto es una referencia a un usuario?
      address: 'Dirección venta, texto ligeramente largo',
      likes: 230,
      hashtags: ['Nature', 'Plastics', 'Algo más', 'fdjslk'],
      category: 'waste',// Puede ser o waste o product
      // Esto ya no iría si va unidoproduct: z.string(),
      provider: 'Proveedor', // !! No es lo mismo que autor? Se usa?
      name: 'Nombre del producto',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio ex. Vivamus tincidunt dignissim neque, vitae maximus nisl finibus ut. Praesent ac libero vel arcu molestie congue nec vel dolor. Proin posuere quam vel placerat facilisis. Nullam eu lobortis dolor, ac ornare mi. Praesent nulla velit, elementum sit amet consequat sed, hendrerit a augue. Suspendisse lobortis velit vitae aliquam efficitur. Fusce efficitur erat a neque semper, maximus gravida arcu tempor. Vivamus rhoncus diam erat, non venenatis felis sagittis eget. Integer quis dolor lobortis, ultrices neque sit amet, egestas odio. Sed aliquet suscipit felis ut lacinia.',
      degradationTime: "10 años",
      image: "../../assets/img.png",
      unitOfMeasure: "Unidad de medida",
      price: 25.50,
      quantity: 15,
      // category: z.enum(["waste", "product"]) !! este está repetido
    },
    {
      author: 'Autor Producto', //!! ESto es una referencia a un usuario?
      address: 'Dirección venta, texto ligeramente largo',
      likes: 230,
      hashtags: ['Nature', 'Plastics', 'Algo más', 'fdjslk'],
      category: 'waste',// Puede ser o waste o product
      // Esto ya no iría si va unidoproduct: z.string(),
      provider: 'Proveedor', // !! No es lo mismo que autor? Se usa?
      name: 'Nombre del producto',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio ex. Vivamus tincidunt dignissim neque, vitae maximus nisl finibus ut. Praesent ac libero vel arcu molestie congue nec vel dolor. Proin posuere quam vel placerat facilisis. Nullam eu lobortis dolor, ac ornare mi. Praesent nulla velit, elementum sit amet consequat sed, hendrerit a augue. Suspendisse lobortis velit vitae aliquam efficitur. Fusce efficitur erat a neque semper, maximus gravida arcu tempor. Vivamus rhoncus diam erat, non venenatis felis sagittis eget. Integer quis dolor lobortis, ultrices neque sit amet, egestas odio. Sed aliquet suscipit felis ut lacinia.',
      degradationTime: "10 años",
      image: "../../assets/img.png",
      unitOfMeasure: "Unidad de medida",
      price: 25.50,
      quantity: 15,
      // category: z.enum(["waste", "product"]) !! este está repetido
    },
    {
      author: 'Autor Producto', //!! ESto es una referencia a un usuario?
      address: 'Dirección venta, texto ligeramente largo',
      likes: 230,
      hashtags: ['Nature', 'Plastics', 'Algo más', 'fdjslk'],
      category: 'waste',// Puede ser o waste o product
      // Esto ya no iría si va unidoproduct: z.string(),
      provider: 'Proveedor', // !! No es lo mismo que autor? Se usa?
      name: 'Nombre del producto',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio ex. Vivamus tincidunt dignissim neque, vitae maximus nisl finibus ut. Praesent ac libero vel arcu molestie congue nec vel dolor. Proin posuere quam vel placerat facilisis. Nullam eu lobortis dolor, ac ornare mi. Praesent nulla velit, elementum sit amet consequat sed, hendrerit a augue. Suspendisse lobortis velit vitae aliquam efficitur. Fusce efficitur erat a neque semper, maximus gravida arcu tempor. Vivamus rhoncus diam erat, non venenatis felis sagittis eget. Integer quis dolor lobortis, ultrices neque sit amet, egestas odio. Sed aliquet suscipit felis ut lacinia.',
      degradationTime: "10 años",
      image: "../../assets/img.png",
      unitOfMeasure: "Unidad de medida",
      price: 25.50,
      quantity: 15,
      // category: z.enum(["waste", "product"]) !! este está repetido
    }
  ];

  const suggestionPost = [
    {
      title: 'Titulo de máximo 100 caracteres',
      description: 'Descripción de la idea planteada',
      hashtags: ['hastag1', 'Otro', 'Y maás'],
      category: "waste management" ,//Debe ser uno de los siguientes dos "waste management" "product improvement"
    },
    {
      title: 'Titulo de máximo 100 caracteres',
      description: 'Descripción de la idea planteada',
      hashtags: ['hastag1', 'Otro', 'Y maás'],
      category: "waste management" ,//Debe ser uno de los siguientes dos "waste management" "product improvement"
    },{
      title: 'Titulo de máximo 100 caracteres',
      description: 'Descripción de la idea planteada',
      hashtags: ['hastag1', 'Otro', 'Y maás'],
      category: "waste management" ,//Debe ser uno de los siguientes dos "waste management" "product improvement"
    }
  ];

  return (

    // Aquí AuthProvider está pasando todas las funciones/propiedades que se 
    //Definieron en el archivo AuthProvider.jsx
    <AuthProvider value={{ user, registerWithGoogle, setUser, setAuthenticated, isAuthenticated, registerUser, logOut, logInUser }}>
      <NavigationContainer>
        {/* {isAuthenticated  */}
        {isAuthenticated ? (
          /*Creqación del bottomNavigator*/
          <Tab.Navigator
            /*Se define la ruta en la que empieza*/
            initialRouteName='Home'
            screenOptions={{
              /*Colores bottomNavigator*/
              tabBarActiveTintColor: Green,
              tabBarInactiveTintColor: DarkGray,
              tabBarShowLabel: false,
              headerShown: false
            }}>
            {/*En cada Tab.Screen hay un ícono propio de expo que se trae de @expo/vector-icons*/}
            <Tab.Screen name="Resources"
              options={{
                tabBarLabel: 'Resources',
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="light-bulb" color={color} size={size} />
                ),
              }} >
              {() => <ResourcesView posts={suggestionPost} />}
            </Tab.Screen>
            <Tab.Screen name="Home"
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }} >
              {() => <HomeView posts={posts} />}
            </Tab.Screen>
            <Tab.Screen name="Profile"
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }}
            >
              {() => <ProfileView userData={userData} posts={posts} />}
            </Tab.Screen>
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="SignIn" component={RegistrationView} options={{ headerShown: false }} />
            <Tab.Screen name="LogIn" component={LoginView} options={{ headerShown: false }} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: White,
    alignItems: 'center',
    justifyContent: 'center',
  },
});