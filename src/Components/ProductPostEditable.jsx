import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons';
import { Black, DarkGray, Gray, Green, White } from './Estilos';


export default ProductPostEditable = ({ postInfo }) => {

    function hashtag(hashtag) {
        return <View key={hashtag}>
            <Text style={styles.hashtag}>#{hashtag}</Text>
        </View>;
    }

    function listaHastags(list) {
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
                <Text>{postInfo.title}</Text>
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
                    /*!! Aquí no sé como se recibe la imagen o como manejarla
                      !! Se debe cambiar el require por un {uri: postInfo.image}*/
                    source={require('../../assets/img.png')}
                    style={styles.imagenPost}
                />
                <View style={styles.infoPost}>
                    <Text style={styles.description}>{postInfo.description}</Text>
                    <View style={styles.hashtags}>
                        {/*!! Falta editar los estilos*/}
                        {listaHastags(postInfo.hashtags)}
                    </View>
                    <View style={styles.likes}>
                        <AntDesign name="like2" size={20} color="black" />
                        <Text>{postInfo.likes}</Text>
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
        justifyContent: 'space-between',
        marginBottom: '2%'
    },
    editButtons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
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
    description: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 4,
        padding: 5,
        textAlign: 'justify',

    },
    /*!! Como hago para que se pongan una sola fila */
    hashtags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: '5%'
    },
    hashtag: {
        color: White,
        backgroundColor: Green,
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderRadius: 10,
        textAlign: 'center'
    },
    likes: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10
    },
});