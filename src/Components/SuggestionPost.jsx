import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Black, DarkGray, Gray, Green, White } from '../Components/Estilos';

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

export default ProductPost = ({ suggestionPosts }) => {

    return (
        <View style={styles.post}>
            {/* Título */}
            <Text style={styles.titulo}>{suggestionPosts.title}</Text>
            {/* Imagen */}
            <Image 
            /* debería ir {uri: suggestionPost.image} */
            source={require('../../assets/img.png')}
            style={styles.imagen}/>
            {/* Columna Información */}
            <View>
                {/* Descripción */}
                <Text>{suggestionPosts.description}</Text>
                {/* Hastags */}
                {listaHashtags(suggestionPosts.hashtags)}
                {/* usuario y like */}
                <View>
                    {/* Esto no se si va */}
                    <Text>@Usuario</Text>
                    <TouchableOpacity>
                        <AntDesign name="like2" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        post:{
            flexDirection: 'column',
            borderColor: Black,
            borderRadius: 5,
            borderWidth: 1,
        },

        titulo: {
            fontWeight: 'bold',
            color: Green
        },

        imagen:{
            width: '30%',
            height: '100%',
            resizeMode: 'center'
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
    }
);