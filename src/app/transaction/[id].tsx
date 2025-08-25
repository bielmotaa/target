import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Transaction(){
    const params = useLocalSearchParams<{id:string}>()
    return(
        <View>
            <Text> Id : {params.id} </Text>
        </View>
    )
}