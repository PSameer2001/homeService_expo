import React,{useState} from 'react'
import { View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { auth } from '../Authentication/FirebaseConfig'
import { StatusBar } from 'expo-status-bar';


const Profile = () => {

  return(
        <SafeAreaView style={styles.container}>
        <View style={{ height: 70, marginBottom: 1, flexDirection: "row", backgroundColor: "#9E91DF"}}>
           <StatusBar style="dark" />
           <Text style={{ marginLeft: "10%", fontSize: 20,color:"#FFF",
                   marginTop: 40, fontWeight:"bold" }}>MY PROFILE</Text>
        </View>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image 
              source={{
                uri: 'https://i.pinimg.com/236x/f9/75/81/f9758151b717582c500f0dcc33beca4f.jpg',
              }}
              size={80}
            />
            <View style={{marginLeft: 20}}>
              <Title style={[styles.title, {
                marginTop:15,
                marginBottom: 5,
              }]}>{(auth.currentUser.email.substring(0,auth.currentUser.email.indexOf('@')))}</Title>
              <Caption style={styles.caption}>@{(auth.currentUser.email.substring(0,auth.currentUser.email.indexOf('@')))}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>India</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>+91-9999999999</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>{auth.currentUser.email}</Text>
          </View>
        </View>


        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Your Favorites</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Payment</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple >
            <View style={styles.menuItem}>
              <Icon name="share-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="account-check-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="share" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
        </View>

        <TouchableOpacity style={styles.bookNowBtn1} 
                            onPress={() => auth.signOut()}>
                      <Text style={{color: "black",fontWeight:"bold",fontSize:20}}>Sign Out</Text>
                    </TouchableOpacity>
        </SafeAreaView>            
              
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },

    menuWrapper: {
      marginTop:5,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
    bookNowBtn1: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffcccb",
        borderRadius: 15,
        marginLeft:15,
        marginRight:15
    }
  });