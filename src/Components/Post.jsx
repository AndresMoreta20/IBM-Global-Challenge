import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons';


export default Post = ({ props }) => {

    function hashtag (hashtag){
        return <View style={styles.hashtag}>
            <Text>{hashtag}</Text>
        </View>;
    }

    function MyComponentList({ list }){
        return (
          <View>
            {list.map((item) => (
              hashtag(item)
            ))}
          </View>
        );
      };

    return (
        <View className="post" style={styles.post}>
            <View style={styles.encabezado}>
                <Text>{props.product}</Text>
                <View style={styles.editButtons}>
                    <TouchableOpacity>
                        <Feather name="edit-2" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="remove" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cuerpo}>
                <Image
                    /*!! Aquí no sé como se recibe la imagen o como manejarla*/
                    source={require('../../assets/img.png')}
                    style={styles.imagenPost}
                />
                <View style={styles.infoPost}>
                    <Text style={styles.descripcion}>{props.descripcion}</Text>
                    <View style={styles.hashtags}>
                        {/*!! Aquí debe recibirse los hashtags y hacer una función que devuleva Text's
                        con los hashtags*/}

                    </View>
                    <View style={styles.likes}>
                        <AntDesign name="like2" size={20} color="black" />
                        <Text>{props.likes}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 2,
        padding: '3%',
        marginBottom: '2%',
    },
    encabezado: {
        display: 'flex',
        flexDirection: 'row',
        font: 15,
        justifyContent: 'space-between'
    },
    /*!! Falta añadir espacio entre los botones*/
    editButtons: {
        display: 'flex',
        flexDirection: 'row',
    },
    cuerpo: {
        display: 'flex',        
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imagenPost: {
        width: '30%',
        height: '100%',
        resizeMode: 'center'
    },
    infoPost: {
        width: '65%',
        height: '100%'
    },
    hashtags:{

    },
    likes:{

    },
    hashtag:{
        backgroundColor: '#eeeeee',
        borderRadius: '2%',

    }
});