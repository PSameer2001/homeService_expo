import { StyleSheet, ScrollView,Image,SafeAreaView,StatusBar,
  ImageBackground, TouchableOpacity, Button, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { doc, getDocs, updateDoc } from "firebase/firestore";
import { Icon } from "react-native-elements";
import { db } from '../Authentication/FirebaseConfig';


const BookingDetails = ({route,navigation}) => {
  const [istext, setistext]=useState("")
  const [onpress, setonpress]=useState(true)
  const [colors, setcolors]=useState()
  const [bgcolor, setbgcolor] = useState("")
    const detail = route.params

   
    const Cancel = () => {
      const bookDoc = doc(db,"Booking", detail.id)
       updateDoc(bookDoc,{confirm : "Wait" })
      .then(()=>{
        alert("Wait for Cancellation")
        
      })
      .catch((r) => {
        alert(r)
      })
    }  
    

    useEffect(() => {
      if(detail.confirm == "Cancelled"){
          setonpress(false)
          setistext("Cancelled")
          setcolors("red")
          setbgcolor("#ffcccb")}

      else if(detail.confirm == "Success"){
        setonpress(true)
      }
     
      else if(detail.confirm == "Done"){
          setistext("Done")
          setcolors("green")
          setbgcolor("#90ee90")
          setonpress(false)
      }
      else{
        setistext("Wait")
        setcolors("red")
        setbgcolor("#ffcccb")
        setonpress(false)
      }    
      
     
      return () => {
        
      }
    }, [])
    
     
  return (
 
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
         <View style={{
                height: 90, marginBottom: 1, flexDirection: "row",
                backgroundColor: "#9E91DF"
            }}>
                <StatusBar style="dark" />
                <Text style={{ marginLeft: "30%", fontSize: 25,color:"#FFF",
                 marginTop: 50, fontWeight:"bold" }}>Booking Details</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
              <TouchableOpacity style={style.backgroundImageContainer} onPress={() => navigation.navigate("ListingDetails",detail)}>
                <ImageBackground style={style.backgroundImage} source={{uri:detail.imageUri}}>
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
            </TouchableOpacity>
  

          <View style={style.detailsContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                  {detail.title}
                  </Text> 
                </View>

                <Text style={{marginTop: 20,fontSize: 17, color: "black"}}>
                Confirmation :  {detail.confirm}
                </Text>

                <Text style={{fontSize: 17, color:"black",marginTop:10}}>
                Time :  {detail.time} min
                </Text>
                <Text style={{fontSize: 17, color:"black",marginTop:10,height:50}}>
                Address :  {detail.address} 
                </Text>
                <Text style={{fontSize: 17, color:"black",marginTop:10}}>
                Phone :  {detail.phone} 
                </Text>

     
            <View style={style.footer}>
            <Text
                style={{fontSize: 18, color: "grey", fontWeight: 'bold',marginRight:20}}>
                Price : 
              </Text>
              <Text
                style={{color: "blue", fontWeight: 'bold', fontSize: 18}}>
               Rs {detail.price}
              </Text>
             
            </View>
            
          {
              <View>
               
              <View>
                <View style={{height: 50,
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: bgcolor,
                              borderRadius: 10,
                              paddingHorizontal: 10,}}>
                <Text style={{ fontSize: 25,color: colors, 
               fontWeight:"bold" }}>{istext}</Text>
               </View>
               { onpress &&
               <TouchableOpacity onPress={Cancel} >
               <View style={{height: 50,
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: "#ffcccb" ,
                              borderRadius: 10,
                              }}>
                <Text style={{ fontSize: 25,color:"red", 
               fontWeight:"bold" }}>Cancel</Text>
               </View>
               </TouchableOpacity>
              }
               </View>
              
              </View>
          }
            
          
            </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default BookingDetails

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
    height: 270,
   
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
  footer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 1,
    alignItems: 'center',
    flexDirection : "row",
    justifyContent: 'flex-start',
    marginVertical: 20,
    
  },
  detailsContainer: {
    flex: 1, 
    paddingHorizontal: 20, 
    marginTop: 20
  },
  bookNowBtn1: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffcccb",
    borderRadius: 10,
    paddingHorizontal: 10,
  }
})