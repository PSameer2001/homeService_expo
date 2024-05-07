import { Alert, Button, FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../Authentication/FirebaseConfig'
import {db, storage} from '../Authentication/FirebaseConfig'
import { doc, documentId, setDoc } from 'firebase/firestore';
import { Icon } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown';


   const PaymentPage = ({route, navigation}) => {
    const listings = route.params;
    const hour1 = [10,11,12,13,14,15,16,17,18,19,20,21,22]
    const [ address, setAddress] = useState("");
    const [ phone , setPhone ] = useState("");
    const [ carddetails , setCarddetails ] = useState("");
    const [ currentdate , setcurrentdate ] = useState("");
    const [month, setmonth ] = useState("")
    const [year, setyear ] = useState("")
    const [ cvv , setCvv ] = useState("");
    const [ hour , sethour ] = useState("");
    

    const Booked = async () => {
      const id = Math.floor(Math.random()*999999999999999);
      if(phone && address  && carddetails && month && year && cvv != null  ){
        try {
            await setDoc(doc(db,"Booking",`${Date.now()}`),{
            user :auth.currentUser.email,
            title : listings.title,
            price:listings.price,
            desc : listings.desc,
            imageUri:listings.imageUri,
            time : listings.time,
            bookid : auth.currentUser.email.concat(id),
            bookingdate : currentdate,
            phone,
            address,
            slottime : hour,
            carddetails,
            cvv,
            warranty: 'no',
            expirydate:month.concat("/" , year),
            confirm:'Success',
            Payment:"Paid",
            }
        )
        alert("Booked Successfully")
        setAddress("");
        setPhone("");
        setCarddetails("");
        setCvv("")
        setmonth("")
        setyear("")
        navigation.navigate("MyBooking")
      } catch (error) {
        alert(error)
    }
    }else{
      Alert.alert("Incomplete Details")
    }  
  }  
  
  useEffect(() => {
     const bookdate = new Date().getDate()
    const bookmonth = new Date().getMonth() + 1
    const bookyear = new Date().getFullYear()
    setcurrentdate(
      bookdate + "-" + bookmonth + "-" + bookyear
    ) 
    return () => { 
    }
  }, [])
  
  return (
    <View>
      <View>
          <Text style={styles.header}>Personal Details</Text>
          <View style={{marginTop:20, flexDirection:"row"}}>
            <Text style={styles.text}>Phone</Text>
            <TextInput style={styles.textView} value={phone} keyboardType={'number-pad'} 
              maxLength={10}   onChangeText={(text)=>setPhone(text)}></TextInput>
          </View>

          <View style={{marginTop:20,flexDirection:"row"}}>
            <Text style={styles.text}>Address</Text>
            <TextInput style={{...styles.textView,fontSize:12}} value={address} multiline={true}
      onChangeText={(text)=>setAddress(text)}></TextInput>
          </View>

          <View style={{marginTop:20,flexDirection:"row" }}>
            <Text style={styles.text}>Time</Text>
            <View style={{marginLeft:10}}>
                <SelectDropdown 
                    buttonStyle= {styles.dropdown}
                    buttonTextStyle={{fontSize:15}}
                    data={hour1}
                    onSelect={(item,index) => {
                      sethour(item)
                    }}
                />
             </View>
             <Text style={{marginTop:6,fontSize:20,fontWeight:"bold"}}>. 00</Text>
          </View>
      </View>

      <View style={{marginTop:20}}>
         <Text style={styles.header}>Card Details</Text>
         <View style={{marginTop:20}}>
            <Text style={styles.text}>Card Number</Text>
            <TextInput style={styles.textView} value={carddetails} keyboardType={'number-pad'} maxLength={16}
                onChangeText={(text)=>setCarddetails(text)}></TextInput>
          </View>

          <View style={{marginTop:20, justifyContent: 'space-between'}}>
            <View style={{width:'40%'}}>
              <Text style={{fontSize:18,fontWeight:"bold",color:"black"}}>Expiry date</Text>
              <View style={{flexDirection:"row"}}>
                  <TextInput style={styles.dropdown}  placeholder="Month" value={month} 
                    keyboardType={'number-pad'} maxLength={2} onChangeText={(text)=>setmonth(text)}></TextInput>
                  <Text style={{fontSize:30,marginLeft:10}}>/</Text>
                  <TextInput style={styles.dropdown}  placeholder="Year" value={year} 
                    keyboardType={'number-pad'} maxLength={4} onChangeText={(text)=>setyear(text)}></TextInput>
              </View>
            </View>

            <View style={{width:'45%',marginTop:20}}>
            <Text style={{fontSize:18,fontWeight:"bold",color:"black"}}>CVV</Text>
            <TextInput style={styles.dropdown}  placeholder="Cvv" maxLength={3} value={cvv} keyboardType={'number-pad'}
              onChangeText={(text)=>setCvv(text)}></TextInput>
            </View>
          </View>
                    
          <TouchableOpacity style={[styles.btn, {backgroundColor:'green', alignItems:'center'}]}
              onPress={Booked}>
        <Text style={[styles.text, {color:'#fff'}]}>PAY NOW</Text>
        </TouchableOpacity>

      </View>

    </View>
   

     
  )
}
   
export default PaymentPage

const styles = StyleSheet.create({
  header: {
    paddingTop: 8,
   textAlign:"center",
    backgroundColor:"#87CEEB",
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ccc',
  },
  textView: {
    width: '70%',
    height: 40,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    borderWidth:1,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderRadius: 10,
    marginLeft:10,
    fontWeight: 'bold',
    fontSize:17
  },
  dropdown: {
    height:40,
    width:100,
    backgroundColor: '#fff',
    borderWidth:1,
    borderRadius: 10,
    marginLeft:10,
    fontWeight: 'bold',
    fontSize:17
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:4
  },
  btn : {
    width: '70%',
    height: 40,
    borderRadius: 10,
    marginTop:20,
    justifyContent:"center",
    marginLeft:50
  }
})