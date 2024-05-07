import React from 'react';
import { Pressable } from 'react-native';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const {width} = Dimensions.get('screen');
//const iconColor = '#6c5ce7';
export const ItemCard = ({servicename, imageUri , price , time, onPress}) => {
  return (
          <Pressable
          activeOpacity={0.8}
          onPress={onPress}
          >
          <View style={style.card}>
          
            <Image source={imageUri} style={style.cardImage} />
            <View style={{marginTop: 10}}>
            
              <View
                style={{
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  {servicename}
                </Text>
                
              </View>

                <View  style={{flexDirection: 'row'}}>
              <Text style={{color: "grey", fontSize: 14, marginTop: 5}}>
                Time : {time} min
              </Text>
              <Text
                  style={{fontWeight: 'bold', color: "blue", fontSize: 16,marginLeft:"45%",marginTop:5}}>
                  Rs {price}
                </Text>
                </View>

            </View>
          </View>
          </Pressable>
  );
};

const style = StyleSheet.create({
 
  card: {
    height: 280,
    backgroundColor:"#fff",
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    marginLeft: 10,
    marginBottom:20,
    marginTop:10,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 170,
    borderRadius: 15,
    borderColor:"grey",
    borderWidth:1
  },
});



