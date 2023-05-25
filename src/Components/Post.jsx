import { Text, TextInput, View } from 'react-native';

export default Post = ({props}) => {

    return (
            <View className="post">
                <Text>{props.name}</Text>
            </View>
    );
}