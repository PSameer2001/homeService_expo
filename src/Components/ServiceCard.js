import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import React from 'react'

const Width = Dimensions.get('window').width
function ServiceCard({
    OnPressServicecard,Servicename,images,price
}) {
    return (
        <TouchableOpacity onPress={OnPressServicecard} style={styles.cardview}>
       <Image
           source = {{uri : images}}
          style={styles.image}
        />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{fontSize: 17,fontWeight:"bold"}}>
              {Servicename}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight:"bold",
                color: "red",
              }}>
             Rs  {price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
}

export default ServiceCard

const styles = StyleSheet.create({
    cardview:{
        height: 209,
        width: 280,
        backgroundColor:"#Fff",
        borderRadius: 20,
        marginRight: 20,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3, 
    },
   image:{
    height: 150,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    resizeMode: 'stretch',
  }
})