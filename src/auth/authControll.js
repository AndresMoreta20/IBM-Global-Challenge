
import { API_URL } from '../../env.js';

import { firebase } from '../config/firebase.js';

import * as WebBrowser from 'expo-web-browser';

const signInWithGoogle = async () => {
    WebBrowser.maybeCompleteAuthSession();
    // try {
        

        // Configura el proveedor de inicio de sesión de Google
        // Inicia el proceso de inicio de sesión con Firebase usando signInWithRedirect

        // Inicia el proceso de inicio de sesión con Firebase usando signInWithPopup
        const res = await firebase.signPopUp();

        console.log("PREE");
        // Obtiene el resultado de la autenticación
        const result = await firebase.auth.getRedirectResult();

        if (result.user) {
            // El usuario ha iniciado sesión con éxito en Firebase utilizando Google
            console.log('Inicio de sesión exitoso');
            const { accessToken, idToken } = result.credential;

            // Realiza las operaciones necesarias con los tokens obtenidos
            // ...

        } else {
            // El inicio de sesión fue cancelado o falló
            console.log('Inicio de sesión cancelado o fallido');
        }
    // } catch (error) {
    //     // Ocurrió un error durante el inicio de sesión
    //     console.error('Error al iniciar sesióne:', error);
    // }
};
// const signInWithGoogle = async () => {
//     WebBrowser.maybeCompleteAuthSession();
//     try {

//         const redirectUri = makeRedirectUri({ useProxy: true });

//         //const redirectUri = firebase.makeRedirectUri({ useProxy: true });

//         // Configuración de Firebase para el proveedor de inicio de sesión de Google
//         const googleProviderConfig = {
//             clientId: '288470887446-an88mdehbem5lptpv2mqn1p3qu0pcj4b.apps.googleusercontent.com',
//             redirectUri,
//             scopes: ['profile', 'email'],
//         };


//         // Generar el proveedor de inicio de sesión de Google usando firebase.auth.GoogleAuthProvider
//         // const googleProvider = new firebase.auth.GoogleAuthProvider();

//         firebase.googleProvider.setCustomParameters(googleProviderConfig);

//         // Obtener la URL de autorización para iniciar sesión con Google
//         const { url } = await firebase.getRedirectResult();
//         console.log("signInWithGoogle Auth");
//         // Realizar la solicitud de inicio de sesión con Google utilizando expo-auth-session
//         const { type, params } = await useAuthRequest(googleProviderConfig, {
//             authorizationEndpoint: url,
//         });

//         if (type === 'success') {
//             // Obtener el token de acceso y el ID de usuario de Google
//             const { access_token: accessToken, id_token: idToken } = params;

//             // Crear una credencial de Google con los tokens obtenidos
//             const credential = firebase.googleProvider.credential(idToken, accessToken);

//             // Iniciar sesión en Firebase con la credencial de Google
//             await firebase.auth.signInWithCredential(credential);

//             // El usuario ha iniciado sesión con éxito en Firebase utilizando Google
//             console.log('Inicio de sesión exitoso');
//         } else {
//             // El inicio de sesión fue cancelado o falló
//             console.log('Inicio de sesión cancelado o fallido');
//         }
//     } catch (error) {
//         // Ocurrió un error durante el inicio de sesión
//         console.error('Error al iniciar sesión:', error);
//     }
// };

const register = async (user) => {
    const urlCreate = API_URL + "users/create";
    const { email, password, firstname, lastname, country, address, phone } = user;
    console.log("USer to create: ", user);
    try {
        const response = await fetch(urlCreate, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, firstname, lastname, country, address, phone })
        });

        //Si la respuesta no es satisfactoria
        if (!response.ok) {
            throw new Error('Error creating user.');
        }

        const user = await response.json();
        return user;

    } catch (error) {
        throw error;
    }
}

const logIn = async (user) => {
    console.log("User from authController: ", user);
    //Datos necesarios para loguearse
    const { email, password } = user;
    try {

        const res = await firebase.signInWithEmailAndPassword(firebase.auth, email, password);

        const user = res.user;

        const uid = user.uid;

        const resApi = await fetch(`${API_URL}users/${uid}`);
        console.log("RESAPI: ", resApi);
        // Comprueba si la respuesta de la API es exitosa
        if (resApi.ok) {
            // Parsea la respuesta a JSON
            let user = await resApi.json();

            if (user) {
                //Guardar el usuario en el store
                // const userStore = useUserStore();
                // userStore.setUser(user);
                // userStore.setIsLogued(true);
                return user;
            } else {
                console.error("Unable to log in from storage.");
                return false;
            }
        } else {
            throw new Error("¡Unknow Error! RES: ", resApi);

        }
    } catch (error) {
        throw error;
    }

}




export { logIn, register, signInWithGoogle };