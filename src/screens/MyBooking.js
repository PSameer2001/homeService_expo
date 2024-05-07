import { View, Text , Button, StyleSheet, FlatList} from 'react-native'
import React, { useState, useEffect } from 'react'
import { collection, doc, documentId, getDocs, query, updateDoc, where } from "firebase/firestore";
import { auth } from '../Authentication/FirebaseConfig';
import { MyBookingCard } from '../Components/MyBookingCard';
import { db } from '../Authentication/FirebaseConfig';
import { StatusBar } from 'expo-status-bar';

const MyBooking = ({route, navigation})=> {

   // Create a reference to the cities collection
   const [item,setItems] = useState([]);
   const [isRefreshing, setIsRefreshing] = useState(false);
  
   
   const onRefresh = () => {
     setIsRefreshing(true)
     setItems('');
     getdata();
     refreshing();
 }

const refreshing = () => {
   setIsRefreshing(false)
}

const getdata = async () => {
  const citiesRef = collection(db, "Booking")
  // Create a query against the collection.
      const q1 = query(citiesRef, where("user", "==", auth.currentUser.email));
      const details = await getDocs(q1); 
        setItems(details.docs.map((doc) => ({...doc.data(),id: doc.id })).reverse());
    }

  useEffect(()=>{
      getdata();
      },[])

        return(
        
        <View style={styles.container}>
          <View style={{
                height: 70, marginBottom: 1, flexDirection: "row",
                backgroundColor: "#9E91DF"
            }}>
                <StatusBar style="dark" />
                <Text style={{ marginLeft: "10%", fontSize: 20,color:"#FFF",
                 marginTop: 40, fontWeight:"bold" }}>MY BOOKING</Text>
          </View>
        <FlatList
        data={item}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        renderItem={({ item }) => (
        <MyBookingCard 
             onPress ={() => navigation.navigate('BookingDetails',item,item.bookid,item.id)}
             //onPress={() => {updateItem(item.id)}}
            imageUri={{uri: item.imageUri}}
            time={item.time}
            servicename={item.title}
            price={item.price}
            bookconfirm={item.confirm}
            
            />
        )}
        />
      </View>
)
   
}

export default MyBooking
const styles = StyleSheet.create({
    container:{
      flex:1,
      height:"80%"
    }
  })