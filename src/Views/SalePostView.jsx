import { View, Text, TextInput, Image} from 'react-native';

export default SalePostView = ({isNew, postInfo}) => {

    return (
        <>
            <Text>{isNew? 'What you offer?': 'What has changed?'}</Text>
            <View>
                {/* Manejo de imagen */}
            </View>
            <TextInput placeholder='Product name'/>
            <TextInput placeholder='Descripction'/>
            <View>
                
            </View>

        </>
    );
}