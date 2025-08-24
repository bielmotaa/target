import { router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Index() {
    return (
        <View>
            <Text>Home</Text>
            <Button title="Go to Target" onPress={() => router.navigate("/target")} />
        </View>
    );
}