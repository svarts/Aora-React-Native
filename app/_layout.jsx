import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
    return (
        <SafeAreaView>
            <Text style={
                {
                    fontSize: 12,
                    fontFamily: "Poppins-Regular",
                    color: "black",
                    marginTop: 70,
                    textAlign: "center"
                }
            }>
                Where Creativity Meets Innovation: Embark on a Journey of Limitless
                Exploration with Aora
            </Text>
        </SafeAreaView>
    )
};

export default Welcome;