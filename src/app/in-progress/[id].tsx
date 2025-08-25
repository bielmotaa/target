import { View, Text} from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function InProgress(){
    const params = useLocalSearchParams<{id:string}>()
    return(
        <View style={{flex:1, justifyContent: 'center'}}>
            <Text>id : {params.id}</Text>
        </View>
    )
}