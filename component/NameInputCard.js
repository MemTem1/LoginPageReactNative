// 📁 components/NameInputCard.js
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function NameInputCard() {
    useEffect(() => {
        getUserRegister()
    }, [])


    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const UserRegister = async () => {
        try {
            await AsyncStorage.multiSet([
                ["userName", userName],
                ["password", password]


            ])
            setUserName("")
            setPassword("")
            console.log("kullanıcı kayıt edildi")
        }
        catch {
            console.log("kulanıcı kayıt edilmedi")
        }

    }


    const getUserRegister = async () => {

        const getName = await AsyncStorage.multiGet(["userName", "password"])
        console.log(getName[0][1])

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>DeCtOn ' a Hoş geldin</Text>

            <TextInput
                placeholder="Kullnıcı Adı"
                placeholderTextColor="#fff"
                style={styles.textInput}
                onChangeText={setUserName}
                value={userName}
            />
            <TextInput
                placeholder="şifre"
                placeholderTextColor="#fff"
                secureTextEntry={true}
                style={styles.textInput}
                onChangeText={setPassword}
                value={password} />


            <TouchableOpacity
                style={styles.RegisterBtn}
                activeOpacity={0.8}
                onPress={() => { UserRegister(userName, password) }}
            >
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Kayı ol</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 400,
        backgroundColor: "#76adffff",
        borderRadius: 15,
        elevation: 8,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    title: {
        width: "100%",
        textAlign: "center",
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffffff"
    },
    textInput: {
        width: "100%",
        height: 50,
        backgroundColor: "#00317a3f",
        borderRadius: 10,
        paddingLeft: 10,
        color: "#fff",
        marginTop: 20

    },
    RegisterBtn: {
        width: "100%",
        backgroundColor: "blue",
        height: 45,
        borderRadius: 10,
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 60,
    }
});
