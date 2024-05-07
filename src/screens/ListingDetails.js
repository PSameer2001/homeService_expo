import { StatusBar } from "expo-status-bar";
import React from "react";
import { View,Text, StyleSheet,ScrollView, TouchableOpacity,
  SafeAreaView, Dimensions, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";

const ListingDetails = ({route,navigation}) => {
    const listings = route.params;
    const {width} = Dimensions.get('screen');
  return (
    
      <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
         <View style={{
                height: 90, marginBottom: 1, flexDirection: "row",
                backgroundColor: "#9E91DF"
            }}>
                <StatusBar style="dark" />
                <Text style={{ marginLeft: "30%", fontSize: 25,color:"#FFF",
                 marginTop: 50, fontWeight:"bold" }}>Service Details</Text>
          </View>
          
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={style.backgroundImageContainer}>
      <ImageBackground style={style.backgroundImage} source={{uri:listings.imageUri}}>
          
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

    <View style={style.detailsContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
        {listings.title}
        </Text>
        
      </View>

      
          <Text style={{marginTop: 15,fontSize: 17, color: "black",fontWeight:"bold"}}>
            Description : 
          </Text>
          <Text style={{marginTop: 5,fontSize: 17, color: "black"}}>
             {listings.desc}
          </Text>

          <View  style={{flexDirection:"row",marginTop:5}}>
          <Text style={{fontSize: 17, color:"black",marginTop:10,fontWeight:"bold"}}>
          Time :    
          </Text>
          <Text style={{fontSize: 17, color:"black",marginLeft:10,marginTop:12}}>
             {listings.time} min
          </Text>
          </View>

            <View style={{flexDirection:"row",marginTop:10}}>
            <Text
                style={{fontSize: 18, color: "black", fontWeight: 'bold',marginRight:20}}>
                Price : 
              </Text>
              <Text
                style={{color: "blue", fontWeight: 'bold', fontSize: 18}}>
               Rs {listings.price}
              </Text>
              </View>
            
            <TouchableOpacity style={style.bookNowBtn} 
                    onPress={() =>
                      navigation.navigate(("PaymentPage"),listings)}>
              <Text style={{color: "#FFf",fontWeight:"bold",fontSize:20}}>Book Now</Text>
            </TouchableOpacity>
         

      </View>
      </ScrollView>
    </SafeAreaView>
   )
}

export default ListingDetails

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
    height: 320,
   
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
 
  bookNowBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#29C5F6",
    borderRadius: 10,
    marginTop: 30,
  },
  detailsContainer: {flex: 1, paddingHorizontal: 20, marginTop: 20},

})