import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';

const AdminLogin = ({navigation}) => {
    const [Username, setUsername]= useState();
    const [password, setPassword] = useState();

    const login = () => {
        if(Username == "admin" && password == "admin"){
           navigation.replace("AdminScreen")
        }else{
            Alert.alert("Wrong Credentials")
        }
    }

      
  return (
    <View>
            <View style={{ height: 70, marginBottom: 1, flexDirection: "row",
                backgroundColor: "#9E91DF"
            }}>
                <StatusBar style="dark" />
                <Text style={{ marginLeft: "10%", fontSize: 20,color:"#FFF",
                 marginTop: 40, fontWeight:"bold" }}>ADMIN   LOGIN</Text>
          </View>
          <View style={{marginTop:50}}>
            <Text style={styles.text}>Username</Text>
            <TextInput style={styles.textView}  onChangeText={(text) => setUsername(text)}></TextInput>

            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.textView}  onChangeText={(text) => setPassword(text)} ></TextInput>

            <Button title='Login' onPress={login}></Button>
            </View>
    </View>
  )
}

export default AdminLogin

const styles = StyleSheet.create({
    textView: {
        width: '95%',
        height: 40,
        backgroundColor: '#fff',
        borderWidth:1,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        borderRadius: 10,
        marginLeft:10,
        fontWeight: 'bold',
        fontSize:17,
        marginBottom:15
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
        
      },
})