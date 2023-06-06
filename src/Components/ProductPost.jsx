import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Black, DarkGray, Gray, Green, White } from '../Components/Estilos';
import { AntDesign } from '@expo/vector-icons';

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

export default ProductPost = ({ productInfo }) => {

    return (
        /* Post */
        <View style={styles.post}>
            {/* Encabezado */}
            <View style={styles.encabezado}>
                {/* {productInfo.name} */}
                <Text style={{ color: Green, fontWeight: 'bold' }}>Nombre del producto</Text>
                {/* {productInfo.price} */}
                <Text>$ 99999.99</Text>
            </View>
            {/* Cuerpo post */}
            <View style={styles.cuerpo}>
                {/* Imágen + botón contacto */}
                <View style={styles.columnaImagen}>
                    <View style={styles.imagenContainer}>
                        <Image
                            /*Debe reemplazarse por {uri: productInfo.image} */
                            source={require('../../assets/img.png')}
                            style={styles.imagen} />
                    </View>
                    <TouchableOpacity style={styles.btnContacto}>
                        <Text style={{ color: White }}>Contact me</Text>
                    </TouchableOpacity>
                </View>
                {/* Información producto */}
                <View style={styles.columnaInfo}>
                    {/* Descripción */}
                    {/* {productInfo.description} */}
                    <Text style={styles.descripcion}>Descripción fjadslfjlas dsfj lkasdjf laksjf lksdajf lasdkjflk asdjfhasdgjasoihdfslagho sd jdsalkf asoidghasd ghsadj a</Text>
                    {/* Hashtags 
                    !! No funciona porque no se están pasando los parámetros
                    !! el parámetro debería ser productInfo.hashtags*/}
                    {listaHashtags(['tag1', 'tag2', 'tag3'])}
                    {/* Usuario + likes */}
                    <View style={styles.like}>
                        {/* {productInfo.quantity} */}
                        <Text>15 disponibles</Text>
                        {/* Botón like */}
                        <TouchableOpacity>
                            <AntDesign name="like2" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        borderColor: Black,
        borderWidth: 1.5,
        borderRadius: 5,
        padding: 10,
        gap: 12
    },

    encabezado: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    cuerpo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    columnaImagen: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '30%',
    },
    btnContacto: {
        padding: 7,
        borderRadius: 5,
        backgroundColor: Green,
    },
    //!! no sé porque la imagen se ve así :/
    imagenContainer: {
        height: '100%',
        width: '30%',
        height: '65%'
    },
    imagen: {
        width: '100%',
        resizeMode: 'contain',
    },

    columnaInfo: {
        width: '65%',
    },
    descripcion: {
        padding: 7,
        borderColor: Black,
        borderWidth: 1.5,
        borderRadius: 5,
        textAlign: 'justify'
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

    like: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});