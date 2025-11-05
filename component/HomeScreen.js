import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ name }) {
    const chats = [
        { id: "1", name: "Ahmet", message: "Yarın görüşürüz!", time: "12:30" },
        { id: "2", name: "Zeynep", message: "Tamamdır 😊", time: "11:15" },
        { id: "3", name: "Can", message: "Projeyi gönderdin mi?", time: "10:45" },
        { id: "4", name: "Elif", message: "Fotoğrafları aldım 📸", time: "09:00" },
    ];

    return (
        <View style={styles.container}>
            {/* 🔹 Üst Bar */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{name}</Text>
                <View style={styles.headerIcons}>
                    <Ionicons name="search-outline" size={24} color="#fff" style={styles.icon} />
                    <Ionicons name="ellipsis-vertical" size={22} color="#fff" />
                </View>
            </View>

            {/* 🔹 Sohbet Listesi */}
            <FlatList
                data={chats}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.chatItem}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>{item.name[0]}</Text>
                        </View>
                        <View style={styles.chatInfo}>
                            <Text style={styles.chatName}>{item.name}</Text>
                            <Text style={styles.chatMessage} numberOfLines={1}>
                                {item.message}
                            </Text>
                        </View>
                        <Text style={styles.chatTime}>{item.time}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* 🔹 Yeni Mesaj Butonu */}
            <TouchableOpacity style={styles.fab}>
                <Ionicons name="chatbubble-ellipses" size={28} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#e6f0ff",
    },
    header: {
        backgroundColor: "#1a4dd8",
        height: 90,
        paddingHorizontal: 16,
        paddingTop: 45,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    headerTitle: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "700",
    },
    headerIcons: {
        flexDirection: "row",
    },
    icon: {
        marginRight: 15,
    },
    chatItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        marginHorizontal: 12,
        marginVertical: 6,
        padding: 12,
        borderRadius: 14,
        shadowColor: "#1a4dd8",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 2,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#1a4dd8",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    avatarText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 18,
    },
    chatInfo: {
        flex: 1,
    },
    chatName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#1a4dd8",
    },
    chatMessage: {
        color: "#3b4b75",
        fontSize: 14,
        marginTop: 2,
    },
    chatTime: {
        color: "#7d8cff",
        fontSize: 12,
    },
    fab: {
        position: "absolute",
        bottom: 30,
        right: 25,
        backgroundColor: "#1a4dd8",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
});
