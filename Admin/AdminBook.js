import { FlatList, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { DataTable } from 'react-native-paper'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../src/Authentication/FirebaseConfig'
import { ListItem } from 'react-native-elements'

const Data = ({user,servicename,date,warranty,booked,onpress}) => {
    return(
        <View>
            <TouchableOpacity onPress={onpress}>
          
                <DataTable.Row>
                    <DataTable.Cell> {user} </DataTable.Cell>
                    <DataTable.Cell> {servicename} </DataTable.Cell>
                    <DataTable.Cell> {date} </DataTable.Cell>
                    <DataTable.Cell> {warranty} </DataTable.Cell>
                    <DataTable.Cell> {booked} </DataTable.Cell>
                </DataTable.Row>
            
        </TouchableOpacity>
    </View>
    )
}

const AdminBook = ({navigation}) => {
    const [item,setItems] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    
    const getdata = async () => {
        setIsRefreshing(true)
        const booking = collection(db,'Booking');
        const details = await getDocs(booking);
        setItems(details.docs.map((doc) => ({...doc.data(),id: doc.id })).reverse());
        setIsRefreshing(false)
    }
    
     useEffect(()=>{
        getdata();
        },[])

  return (
    <View
        
    >
      <View style={{
                height: 70, marginBottom: 1, flexDirection: "row",
                backgroundColor: "#9E91DF"
            }}>
                <StatusBar style="dark" />
                <Text style={{ marginLeft: "10%", fontSize: 20,color:"#FFF",
                 marginTop: 40, fontWeight:"bold" }}>USER  BOOKING  DETAILS</Text>
          </View>
          <View>
              <DataTable>
                <DataTable.Header>
                    <DataTable.Title >User</DataTable.Title>
                    <DataTable.Title >Service</DataTable.Title>
                    <DataTable.Title >BookDate</DataTable.Title>
                    <DataTable.Title >Warranty</DataTable.Title>
                    <DataTable.Title>Booked</DataTable.Title>
                </DataTable.Header>
                <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={ isRefreshing }
                        onRefresh={getdata}
                    />
                }
                    data={item}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Data 
                            user={item.user}
                            servicename={item.title}
                            date={item.bookingdate}
                            booked={item.confirm}
                            warranty={item.warranty}
                            onpress={() => navigation.navigate("AdminBookUpdate",item)}
                        />
                )}
                />
                </DataTable>
        </View>
          
    </View>
  )
}

export default AdminBook

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:"bold",

    }
})