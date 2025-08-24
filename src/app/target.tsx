import { router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Target() {
    return (
        <View>
            <Text>Target</Text>
            <Button title="Go to Home" onPress={() => router.navigate("/")} />
        </View>
    );
}