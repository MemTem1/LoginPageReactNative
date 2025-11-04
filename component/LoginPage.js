import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function LoginPage() {
    const [isFocused, setIsFocused] = useState(null)
    return (
        <View style={{ marginTop: 165 }}>
            <Text style={styles.LoginTitle}>Login Here</Text>
            <Text style={styles.LoginContent}> Hoş geldiniz lütfen giriş yapmak için gerekli bilgilri doldurun !</Text>
            <View  >
                <TextInput
                    pusholder='Kullanıcı Adı'
                    style={[styles.UseNameInput, isFocused === "UserName" && styles.inputFocused]}
                    onFocus={() => setIsFocused("UserName")}
                    onBlur={() => setIsFocused(null)}
                />
                <TextInput
                    pusholder='Kullanıcı Adı'
                    style={[styles.UseNameInput, isFocused === "password" && styles.inputFocused]}
                    onFocus={() => setIsFocused("password")}
                    onBlur={() => setIsFocused(null)}

                />
                <Text style={{ textAlign: "right", marginTop: 5, color: "blue", fontWeight: 500 }}>  Şifreni mi unuttun ? </Text>

            </View>
            <TouchableOpacity style={styles.LoginBtn} activeOpacity={0.8}>
                <Text style={styles.BtnLoginText}> Login </Text>
            </TouchableOpacity>


            <View>
                <Text style={{ marginTop: 20, fontSize: 15, fontWeight: "400" }}>
                    yeni bir hesabın yok mu? <Text style={{ color: "blue", fontWeight: "600" }}>Hesap Oluştur</Text>
                </Text>
                <View style={styles.RegisterCopntainer} >
                    <TouchableOpacity style={styles.registerBtn}>
                        <FontAwesome name="facebook-f" size={24} color="black" />
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.registerBtn}>
                        <AntDesign name="google" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerBtn}>
                        <AntDesign name="apple" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    LoginTitle: {
        fontSize: 30,
        fontFamily: "Times New Roman",
        width: "300",
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "900",
        color: "#0300c2ff"
    },
    LoginContent: {
        fontSize: 18,
        width: 300,
        fontFamily: "Times New Roman",
        fontWeight: "800",
        textAlign: "center",
        marginBottom: 50,
    },
    UseNameInput: {
        backgroundColor: "#1418e61e",
        width: 290,
        height: 55,
        marginTop: 20,
        borderRadius: 10,
        paddingLeft: 10,
        borderColor: "transparent",
        borderWidth: 1,
    },
    LoginBtn: {
        width: 300,
        backgroundColor: "#0528eeff",
        height: 50,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,

    },
    BtnLoginText: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
    },
    RegisterCopntainer: {
        with: 300,
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
    },
    registerBtn: {
        width: 50,
        height: 50,
        backgroundColor: "#2225ee1e",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    inputFocused: {
        borderColor: "blue",
    },

})