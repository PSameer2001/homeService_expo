import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { IconLabel } from './ItemCard';

const iconColor = '#6c5ce7';
export const MyBookingCard = ({
    servicename, imageUri ,price , onPress,bookconfirm}
    ) => {
      
  return (
      <TouchableOpacity  onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={imageUri} />
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}>{servicename}</Text>
          
        </View>
          <View style={styles.iconLabelStyle}>
            <View style={{flexDirection:"row",marginRight:100,marginLeft:10}}>
            <Text style={{fontSize:17}}>Price : </Text>
            <Text style={{fontSize:17,fontWeight:"bold"}}>Rs {price} </Text>
            </View>
            <Text style={{fontWeight:"bold"}}>Booked : {bookconfirm} </Text>
           
          </View>
        </View>
    
    </View>
    </TouchableOpacity>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 25,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#ADD8E6',
    height: 200,
    borderRadius: radius,
    borderColor:"#000080",
    borderWidth:1,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 130,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryStyle: {
    fontWeight: '200',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
   flexDirection:"row"
  },
  iconLabelStyle: {
    flexDirection: 'row',
    marginTop: 5
  },
  container1: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  labelStyle1: {
    fontSize: 12,
  },
  iconStyle1: {
    marginRight: 2,
  },
});



