import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons';
import { Black, DarkGray, Gray, Green, White } from './Estilos';

function hashtag(hashtag) {
    return <View key={hashtag}>
        <Text style={styles.hashtag}>#{hashtag}</Text>
    </View>;
}

function listaHashtags(list) {
    return (
        <View style={styles.hashtags}>
            {list.map((item) => (
                hashtag(item)
            ))}
        </View>
    );
}


export default ProductPostEditable = ({ postInfo }) => {

    return (
        /* Post versión editable */
        <View className="post" style={styles.post}>
            {/* Encabezado del post */}
            <View style={styles.encabezado}>
                <Text>{postInfo.name}</Text>
                {/* Botones eliminar y editar */}
                <View style={styles.editButtons}>
                    <TouchableOpacity>
                        <Feather name="edit-2" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="remove" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            {/* Cuerpo post */}
            <View style={styles.cuerpo}>
                <Image
                    /*!! Se debe cambiar el require por un {uri: postInfo.image}*/
                    source={require('../../assets/img.png')}
                    style={styles.imagenPost}
                />
                {/* Información del post */}
                <View style={styles.infoPost}>
                    <Text style={styles.description}>{postInfo.description}</Text>
                    {/*!! Falta editar los estilos*/}
                    { listaHashtags(postInfo.hashtags)}
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
    hashtags: {
        flexDirection: 'row',
        marginVertical: '5%',
        flexWrap: 'wrap',
        gap: 3,
        justifyContent: 'flex-start'
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
        alignItems: 'flex-end',
        gap: 10
    },
});