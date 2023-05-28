
import { API_URL } from '../../env.js';

import { firebase } from '../config/firebase.js';

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




export { logIn, register };