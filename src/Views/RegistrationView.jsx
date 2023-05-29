import React, { useRef, useState, useContext, useEffect } from 'react';
import {
  Button,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

import AuthContext from './AuthContext';


const RegistrationView = () => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const firstnameInputRef = useRef(null);
  const lastnameInputRef = useRef(null);
  const countryInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showFirstnameError, setShowFirstnameError] = useState(false);
  const [showLastnameError, setShowLastnameError] = useState(false);
  const [showCountryError, setShowCountryError] = useState(false);
  const [showAddressError, setShowAddressError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);

  const { registerUser, registerWithGoogle } = useContext(AuthContext);

  const inputs = [
    emailInputRef,
    passwordInputRef,
    firstnameInputRef,
    lastnameInputRef,
    countryInputRef,
    addressInputRef,
    phoneInputRef
  ];

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

  const onInputFocus = () => {
    const activeIndex = getActiveInputIndex();
    // setActiveIndex(activeIndex);
  };

  const onChangeInputHandler = (name, value) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'firstname':
        setFirstname(value);
        break;
      case 'lastname':
        setLastname(value);
        break;
      case 'country':
        setCountry(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'phone':
        setPhone(value);
        break;
    }
  };

  const getActiveInputIndex = () => {
    const activeIndex = inputs.findIndex((input) => {
      return input.current && input.current.isFocused();
    });
    return activeIndex;
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

  


  const submitPressed = () => {
    setShowEmailError(email.length < 4);
    setShowPasswordError(password.length < 4);
    setShowFirstnameError(firstname.length < 4);
    setShowLastnameError(lastname.length < 4);
    setShowCountryError(country.length < 2);
    setShowAddressError(address.length < 4);
    setShowPhoneError(phone.length < 4);

    registerUser({
      email,
      password,
      firstname,
      lastname,
      country,
      address,
      phone
    });
  };

  const googleRegister = async () =>{
    console.log("googleRegister registerView");
    await registerWithGoogle();
  }

  const goToLoginPage = () => {
    navigation.navigate('LogIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registration</Text>

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

      <View style={styles.inputTextWrapper}>
        <TextInput
          placeholder="First Name"
          style={styles.textInput}
          returnKeyType="next"
          onSubmitEditing={editNextInput}
          onFocus={onInputFocus}
          onChangeText={(value) =>
            onChangeInputHandler('firstname', value)
          }
          ref={firstnameInputRef}
        />
        {showFirstnameError && (
          <Text style={styles.errorText}>Please enter your first name.</Text>
        )}
      </View>

      <View style={styles.inputTextWrapper}>
        <TextInput
          placeholder="Last Name"
          style={styles.textInput}
          returnKeyType="next"
          onSubmitEditing={editNextInput}
          onFocus={onInputFocus}
          onChangeText={(value) =>
            onChangeInputHandler('lastname', value)
          }
          ref={lastnameInputRef}
        />
        {showLastnameError && (
          <Text style={styles.errorText}>Please enter your last name.</Text>
        )}
      </View>

      <View style={styles.inputTextWrapper}>
        <TextInput
          placeholder="Country"
          style={styles.textInput}
          returnKeyType="next"
          onSubmitEditing={editNextInput}
          onFocus={onInputFocus}
          onChangeText={(value) =>
            onChangeInputHandler('country', value)
          }
          ref={countryInputRef}
        />
        {showCountryError && (
          <Text style={styles.errorText}>Please enter your country.</Text>
        )}
      </View>

      <View style={styles.inputTextWrapper}>
        <TextInput
          placeholder="Address"
          style={styles.textInput}
          returnKeyType="next"
          onSubmitEditing={editNextInput}
          onFocus={onInputFocus}
          onChangeText={(value) =>
            onChangeInputHandler('address', value)
          }
          ref={addressInputRef}
        />
        {showAddressError && (
          <Text style={styles.errorText}>Please enter your address.</Text>
        )}
      </View>

      <View style={styles.inputTextWrapper}>
        <TextInput
          placeholder="Phone"
          keyboardType="phone-pad"
          style={styles.textInput}
          returnKeyType="done"
          onSubmitEditing={editNextInput}
          onFocus={onInputFocus}
          onChangeText={(value) =>
            onChangeInputHandler('phone', value)
          }
          ref={phoneInputRef}
        />
        {showPhoneError && (
          <Text style={styles.errorText}>
            Please enter your phone number.
          </Text>
        )}
      </View>

      <View style={styles.btnContainer}>
        <Button title="Submit" onPress={submitPressed} />
        <TouchableOpacity onPress={goToLoginPage}>
          <Text>Ya tienes cuenta? Inicia sesión</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="Google Sign-In"
        onPress={() => googleRegister().then(() => console.log('Signed in with Google!'))}
      />
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

export default RegistrationView;