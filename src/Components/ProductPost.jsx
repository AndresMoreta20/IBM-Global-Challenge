import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons';
import { Black, DarkGray, Gray, Green, White } from '../Components/Estilos';


export default ProductPost = ({productInfo}) => {

    return (
        <View style={styles.post}>
            <Text>Product Post works</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    post:{
        borderColor: Black,
        borderWidth: 1.5,
        borderRadius: 5
    },
    

});