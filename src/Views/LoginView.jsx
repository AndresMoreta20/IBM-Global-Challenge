import React, { Component, useRef, useState } from 'react';
import { Button, Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';

const LoginView = () => {
    //Los refs se utilizar para apuntar directamente a un elemento de etiquetas (los que están dentro del return)
    //Se setean en null en un inicio pero en la etiqueta se asigna la referencia a cada ref correspondiente
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    //Estos sirven para guardar los valores (Getters y Setters)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Esto almacena los errores en caso de ser necesario
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);


    //Hace que cuando des en siguiente en el teclado de celular se seleccione el próximo input
    const editNextInput = () => {
        const activeIndex = getActiveInputIndex();
        if (activeIndex === -1) {
            return;
        }

        const nextIndex = activeIndex + 1;
        if (nextIndex < inputs.length && inputs[nextIndex].current) {
            setFocus(inputs[nextIndex], true);
        } else {
            finishEditing();
        }
    };

    const finishEditing = () => {
        const activeIndex = getActiveInputIndex();
        if (activeIndex === -1) {
            return;
        }
        setFocus(inputs[activeIndex], false);
    };

    const setFocus = (textInputRef, shouldFocus) => {
        if (shouldFocus) {
            setTimeout(() => {
                textInputRef.current.focus();
            }, 100);
        } else {
            textInputRef.current.blur();
        }
    };

    const goToLoginPage = () => {
        navigation.navigate('LogIn');
    };

    //Guarda el input activo cuando ese input gana el focus
    const onInputFocus = () => {
        const activeIndex = getActiveInputIndex();
        // setActiveIndex(activeIndex);
    };

    //Recupera el input activo
    const getActiveInputIndex = () => {
        const activeIndex = inputs.findIndex((input) => {
            return input.current && input.current.isFocused();
        });
        return activeIndex;
    };

    const submitPressed = () => {
        setShowEmailError(email.length < 4);
        setShowPasswordError(password.length < 4);

        register({
            email,
            password,
        });
    };


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Log In</Text>

            <View style={styles.inputTextWrapper}>
                <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                    returnKeyType="next"
                    onSubmitEditing={editNextInput}
                    onFocus={onInputFocus}
                    onChangeText={(value) =>
                        onChangeInputHandler('email', value)
                    }
                    ref={emailInputRef}
                />
                {showEmailError && (
                    <Text style={styles.errorText}>
                        Please enter your email address.
                    </Text>
                )}
            </View>

            <View style={styles.inputTextWrapper}>
                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    secureTextEntry={true}
                    returnKeyType="next"
                    onSubmitEditing={editNextInput}
                    onFocus={onInputFocus}
                    onChangeText={(value) =>
                        onChangeInputHandler('password', value)
                    }
                    ref={passwordInputRef}
                />
                {showPasswordError && (
                    <Text style={styles.errorText}>Please enter a password.</Text>
                )}
            </View>

            <View style={styles.btnContainer}>
                <Button title="GO" onPress={submitPressed} />
                <TouchableOpacity onPress={goToLoginPage}>
                    <Text>No tienes cuenta? Registrate sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingBottom: 100,
        height: 100
    },
    header: {
        fontSize: 36,
        padding: 24,
        margin: 12,
        textAlign: 'center'
    },
    inputTextWrapper: {
        marginBottom: 24
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        paddingRight: 30
    },
    errorText: {
        color: 'red',
        fontSize: 10
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 36
    }
});

export default LoginView;