import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
export default function LoginPage() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.kutu1}></View>
            <View style={styles.kutu2}></View>
            <View style={styles.kutu3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 100,
        height: 300,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "gray",
        justifyContent: "space-around",
        alignItems: "center"


    },
    kutu1: {
        width: 100,
        height: 100,
        backgroundColor: "red"

    },
    kutu2: {
        width: 100,
        height: 100,
        backgroundColor: "blue",

    },
    kutu3: {
        width: 100,
        height: 100,
        backgroundColor: "black"

    }



})