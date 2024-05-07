import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ImageBackground } from 'react-native'
import { Icon } from 'react-native-elements'
import SelectDropdown from 'react-native-select-dropdown'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../src/Authentication/FirebaseConfig'

const warr = ["yes", "no"]
const confirm = ["Success","Wait","Cancelled","Done"]

const AdminBookUpdate = ({route,navigation}) => {
    const getdetails = route.params
    const [ confirm1 , setconfirm1 ] = useState("");
    const [ warr1 , setwarr1 ] = useState("");
    const Update = () => {
        const updatedoc = doc(db,"Booking", getdetails.id)
        updateDoc(updatedoc,{
            confirm : confirm1 ,
            warranty : warr1
        })
       .then((r)=>{
         alert("Update Successfully")
       })
       .catch((r) => {
         alert(r)
       })
    } 

  return (
    <View>
     <View style={{
                height: 70, marginBottom: 1, flexDirection: "row",
                backgroundColor: "#9E91DF"
            }}>
                <StatusBar style="dark" />
                <Text style={{ marginLeft: "10%", fontSize: 20,color:"#FFF",
                 marginTop: 40, fontWeight:"bold" }}>DETAILS UPDATE</Text>
          </View>
          
       
            <ScrollView>
            <View style={style.backgroundImageContainer}>
                <ImageBackground style={style.backgroundImage} source={{uri:getdetails.imageUri}}>
                        <View style={style.header}>
                            <View style={style.headerBtn}>
                            <Icon
                                name="arrow-back-ios"
                                size={20}
                                onPress={navigation.goBack}
                            />
                            </View>
                        </View>
                </ImageBackground>
            </View>
            <Text style={{marginTop: 20,fontSize: 17, color: "black"}}>
            Service : {getdetails.title}
            </Text>
            <Text style={{marginTop: 20,fontSize: 17, color: "black"}}>
            User : {getdetails.user}
            </Text>
            <Text style={{marginTop: 20,fontSize: 17, color: "black"}}>
            Description : {getdetails.desc}
            </Text>
            <Text style={{fontSize: 17, color:"black",marginTop:10}}>
          Time :  {getdetails.time} min
          </Text>
          <Text style={{fontSize: 17, color:"black",marginTop:10}}>
          Booking Date :  {getdetails.bookingdate} 
          </Text>
          <Text style={{fontSize: 17, color:"black",marginTop:10}}>
          Address :  {getdetails.address} 
          </Text>
          <Text style={{fontSize: 17, color:"black",marginTop:10}}>
          Phone :  {getdetails.phone} 
          </Text>
           <Text style={{ color:"black",fontWeight: 'bold', fontSize: 18,marginTop:10}}>
                 Rs {getdetails.price}  </Text>
             
              <Text style={{fontSize: 17, color:"black",marginTop:10}}>
                Confirmation :  {getdetails.confirm} 
             </Text>

             <Text style={{fontSize: 17, color:"black",marginTop:10}}>Update</Text>
            <SelectDropdown 
                    buttonStyle= {style.dropdown}
                    buttonTextStyle={{fontSize:15}}
                    data={confirm}
                    onSelect={(item,index) => {
                      setconfirm1(item)
                    }}
                />

            <Text style={{fontSize: 17, color:"black",marginTop:10}}>Warranty</Text>
            <SelectDropdown 
                    buttonStyle= {style.dropdown}
                    buttonTextStyle={{fontSize:15}}
                    data={warr}
                    onSelect={(item,index) => {
                      setwarr1(item)
                    }}
                />
                 <TouchableOpacity style={style.bookNowBtn}
                    onPress={Update}>
              <Text style={{color: "black",fontWeight:"bold",fontSize:20}}>Update</Text>
            </TouchableOpacity>
            </ScrollView>
    </View>
  )
}

export default AdminBookUpdate

const style = StyleSheet.create({
    backgroundImageContainer: {
        elevation: 20,
        marginHorizontal: 10,
        marginTop: 10,
        alignItems: 'center',
        height: 200,
       
      },
      backgroundImage: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth:0.4,
        borderColor:"grey"
      },
      header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      },
      headerBtn: {
        height: 50,
        width: 50,
        backgroundColor:"#fff",
        borderWidth:0.4,
        borderColor:"grey",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      dropdown: {
        height:40,
        width:"60%",
        backgroundColor: '#fff',
        borderWidth:1,
        borderRadius: 10,
        marginLeft:10,
        fontWeight: 'bold',
        fontSize:17
      },
      bookNowBtn: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffcccb",
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth:1,
        borderColor:"red",
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        marginBottom:130
      },
})