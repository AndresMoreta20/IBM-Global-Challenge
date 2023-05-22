import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default LoginView = () => {

    return (
        <>
            <View className="form">
                <form >
                    <View className="input-container">
                        <Text>Username </Text>
                        <TextInput type="text" name="uname" required />
                        {/* {renderErrorMessage("uname")} */}
                    </View>
                    <View className="input-container">
                        <Text>Password </Text>
                        <input type="password" name="pass" required />
                        {/* {renderErrorMessage("pass")} */}
                    </View>
                    <View className="button-container">
                        <TextInput type="submit" />
                    </View>
                </form>
            </View>
        </>
    );
}