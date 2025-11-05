import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './component/LoginPage';
import NameInputCard from './component/NameInputCard';
import HomeScreen from './component/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';


export default function App() {

  const [varMi, setVarMi] = useState(false)
  const [clientUserName, setClientUserName] = useState("")

  useEffect(() => {
    getUserRegister()
  }, [])


  const getUserRegister = async () => {

    const getName = await AsyncStorage.getItem("userName")
    if (getName) {
      setVarMi(true)
      setClientUserName(getName)
      console.log("durum", getName, " boş")
      console.log(varMi)
    }
    else {
      setVarMi(false)
      console.log("durum", varMi)
    }
  }



  return (
    <View style={styles.container}>


      {varMi ? <HomeScreen name={clientUserName} /> : <NameInputCard />}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff3b',
    justifyContent: "center",
    alignItems: "center"

  },
});
