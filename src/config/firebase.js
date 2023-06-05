import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithCredential,
} from "firebase/auth";
import * as AuthSession from "expo-auth-session";

const firebaseConfig = {
    apiKey: "AIzaSyAVtPRldEmLOYgmsmq47VY0RHqtnoHYEYE",
    authDomain: "ibm-gc.firebaseapp.com",
    projectId: "ibm-gc",
    storageBucket: "ibm-gc.appspot.com",
    messagingSenderId: "288470887446",
    appId: "1:288470887446:web:ec7498b5baffea22951937",
    measurementId: "G-1DJRPDR6YR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const redirectUri = "https://ibm-gc.firebaseapp.com/__/auth/handler";
const googleProviderConfig = {
    clientId: '288470887446-an88mdehbem5lptpv2mqn1p3qu0pcj4b.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
};
const generateUniqueId = () => {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 10000);
    const uniqueId = `${timestamp}-${random}`;
    return uniqueId;
};
const signPopUp = async () => {
    const state = generateUniqueId();
    console.log("State: ", state);
    try {


        console.log('signPopUp');
        const { type, params } = await AuthSession.startAsync({
            authUrl: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleProviderConfig.clientId}&redirect_uri=${encodeURIComponent(
                redirectUri
            )}&response_type=code&scope=${googleProviderConfig.scopes.join('%20')}&state=${encodeURIComponent(
                state
            )}`,
        });

        if (type === 'success') {
            const { code } = params;

            // Intercambia el código por las credenciales de acceso de Google
            const { id_token } = await getGoogleAccessToken(code);

            // Autentica con Firebase usando las credenciales de acceso de Google
            const credential = GoogleAuthProvider.credential(id_token);
            const result = await signInWithCredential(auth, credential);
            const { user } = result;

            console.log('user:', user);
            return user;
        } else {
            console.log('Sign-in canceled.');
            return null;
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return null;
    }
};
// Función para intercambiar el código de autorización por las credenciales de acceso de Google
const getGoogleAccessToken = async (code) => {
    try {
        const response = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `code=${code}&client_id=${googleProviderConfig.clientId}&redirect_uri=${encodeURIComponent(
                redirectUri
            )}&grant_type=authorization_code`,
        });

        const data = await response.json();
        const { id_token } = data;
        return { id_token };
    } catch (error) {
        console.error('Error al intercambiar el código de autorización:', error);
        throw error;
    }
};
// const signPopUp = async () => {
//     const googleProviderConfig = {
//       clientId: "288470887446-an88mdehbem5lptpv2mqn1p3qu0pcj4b.apps.googleusercontent.com",
//       redirectUri: AuthSession.makeRedirectUri(),
//       scopes: ["profile", "email"],
//     };

//     try {
//       console.log("signPopUp");
//       const { type, params } = await AuthSession.startAsync({
//         authUrl: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleProviderConfig.clientId}&redirect_uri=${encodeURIComponent(
//           googleProviderConfig.redirectUri
//         )}&response_type=id_token&scope=${googleProviderConfig.scopes.join("%20")}`,
//       });

//       if (type === "success") {
//         const { id_token } = params;
//         const credential = GoogleAuthProvider.credential(id_token);
//         const result = await signInWithCredential(auth, credential);
//         const { user } = result;
//         console.log("user:", user);
//         return user;
//       } else {
//         console.log("Sign-in canceled.");
//         return null;
//       }
//     } catch (error) {
//       console.error("Error al iniciar sesión:", error);
//       return null;
//     }
//   };
// const signPopUp = async () => {
//   const googleProviderConfig = {
//     clientId: "TU_CLIENT_ID",
//     redirectUri: AuthSession.makeRedirectUri(),
//     scopes: ["profile", "email"],
//   };

//   try {
//     console.log("signPopUp");
//     const { type, params } = await AuthSession.startAsync({
//       authUrl: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleProviderConfig.clientId}&redirect_uri=${encodeURIComponent(
//         googleProviderConfig.redirectUri
//       )}&response_type=id_token&scope=${googleProviderConfig.scopes.join("%20")}`,
//     });

//     if (type === "success") {
//       const { id_token } = params;
//       const credential = GoogleAuthProvider.credential(id_token);
//       const result = await signInWithCredential(auth, credential);
//       const { user } = result;
//       console.log("user:", user);
//       return user;
//     } else {
//       console.log("Sign-in canceled.");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error al iniciar sesión:", error);
//     return null;
//   }
// };

const firebase = {
    // Objects
    auth,
    app,
    // Functions
    signPopUp,
    signInWithEmailAndPassword,
    onAuthStateChanged,
};

export { firebase };

// import { initializeApp } from "@react-native-firebase/app";
// import { getAuth, onAuthStateChanged } from "@react-native-firebase/auth";
// import {
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithCredential,
// } from "@react-native-firebase/auth";
// import * as AuthSession from "expo-auth-session";

// const firebaseConfig = {
//     apiKey: "AIzaSyAVtPRldEmLOYgmsmq47VY0RHqtnoHYEYE",
//     authDomain: "ibm-gc.firebaseapp.com",
//     projectId: "ibm-gc",
//     storageBucket: "ibm-gc.appspot.com",
//     messagingSenderId: "288470887446",
//     appId: "1:288470887446:web:ec7498b5baffea22951937",
//     measurementId: "G-1DJRPDR6YR"
// };

// // Inicializa la app de Firebase
// const app = initializeApp(firebaseConfig);
// // Obtiene la referencia a la autenticación de Firebase
// const auth = getAuth(app);

// AuthSession.makeRedirectUri({ useProxy: true });

// const signPopUp = async () => {
//   const googleProviderConfig = {
//     clientId: "YOUR_CLIENT_ID",
//     redirectUri: AuthSession.makeRedirectUri(),
//     scopes: ["profile", "email"],
//   };

//   try {
//     console.log("signPopUp");
//     const { type, params } = await AuthSession.startAsync({
//       authUrl: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleProviderConfig.clientId}&redirect_uri=${encodeURIComponent(
//         googleProviderConfig.redirectUri
//       )}&response_type=id_token&scope=${googleProviderConfig.scopes.join("%20")}`,
//     });

//     if (type === "success") {
//       const { id_token } = params;
//       const credential = GoogleAuthProvider.credential(id_token);
//       const result = await signInWithCredential(auth, credential);
//       const { user } = result;
//       console.log("user:", user);
//       return user;
//     } else {
//       console.log("Sign-in canceled.");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error al iniciar sesión:", error);
//     return null;
//   }
// };

// const firebase = {
//   // Objects
//   auth,
//   app,
//   // Functions
//   signPopUp,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
// };

// export { firebase };
