import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { View, Text, ScrollView,StyleSheet, Dimensions, 
    FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';
import Carousel from '../Components/Carousel';
import { HomeCleaning, HomeGadgets,  HomeRepair, Plumbing } from '../Components/Data';
import ServiceCard from '../Components/ServiceCard'
import Categorycard from '../Components/Categorycard';

const BadgeIcon = withBadge()(Icon)
const Width = Dimensions.get('window').width

const HomeScreen = ({navigation}) => {
    
    return(
            <ScrollView >
            
            <View style={{
                height: 90, marginBottom: 1, flexDirection: "row",
                backgroundColor: "#29C5F6"
            }}>
                <StatusBar style="dark" />
                <Text style={{ marginLeft: "30%", fontSize: 25,color:"#FFF",
                 marginTop: 50, fontWeight:"bold" }}>Home Service</Text>
               
            </View>
           <View style={{height:200}}>
               <Carousel />
           </View>

            <View style={{ marginTop: 30, alignItems: "stretch" }}>
                <Text style={styles.text}>
                    Services</Text>
            </View>

            <ScrollView horizontal={true} 
            showsHorizontalScrollIndicator={false}
           >
               <Categorycard 
               images = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSev-DzQNysR4L8V2NYHoTo5Fjpv_BykeNsKnYhsNpdg88dP8Qy"
               title="Home Cleaning"
               onPress={() => navigation.navigate("HomeCleaning")}
               />
               <Categorycard 
               images = "https://i.pinimg.com/200x/42/21/e3/4221e317f7d0e35a47bc6b04d5ada2b8.jpg"
               title="Home Repair"
               onPress={() => navigation.navigate("HomeRepair")}
               />
               <Categorycard 
               images = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRUe6Y_oJ2BQ9sZtTjQoC6PwheygxikzZnQ&usqp=CAU"
               title="Home Gadgets"
               onPress={() => navigation.navigate("ElectronicRepair")}
               />
               <Categorycard 
               images ="https://previews.123rf.com/images/mallinka/mallinka1402/mallinka140200036/26265324-ic%C3%B4ne-bleue-de-plomberie-avec-robinet-et-une-cl%C3%A9.jpg"
               title="Home Plumbing"
               onPress={() => navigation.navigate("Plumbing")}
               />
             </ScrollView>

            <View >
            {/* Home Cleaning */}
            <View   style={{ marginTop: 40}}>
            <Text style={styles.subtext}>Home Cleaning</Text>
            
                <FlatList
                    style={{ marginTop: 10, marginBottom: 10 }}
                    horizontal={true}
                    data={HomeCleaning}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View>
                            <ServiceCard
                                images={item.imageUri}
                                Servicename={item.title}
                                price={item.price} 
                                OnPressServicecard = {() => navigation.navigate("ListingDetails",item,item.desc)}
                            />
                      
                        </View>        
                    )} />
                    <TouchableOpacity style={styles.viewallBtn}  onPress={() => navigation.navigate("HomeCleaning")}>
                        <Text style={{color: "black",fontSize:16}}>View All</Text>
                    </TouchableOpacity>
            </View>  

                    {/* Home Repair */}
                 <View   style={{ marginTop: 60}}>
            <Text style={styles.subtext}>Home Repair</Text>
            
                <FlatList
                    style={{ marginTop: 10, marginBottom: 10 }}
                    horizontal={true}
                    data={HomeRepair}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View>
                            <ServiceCard
                                images={item.imageUri}
                                Servicename={item.title}
                                price={item.price} 
                                OnPressServicecard = {() => navigation.navigate("ListingDetails",item,item.desc)}
                            />
                        </View>        
                    )} />
                    <TouchableOpacity style={styles.viewallBtn}  onPress={() => navigation.navigate("HomeRepair")}>
                        <Text style={{color: "black",fontSize:16}}>View All</Text>
                    </TouchableOpacity>
            </View>  

                    {/* Home Gadgets */}
            <View   style={{ marginTop: 60}}>
            <Text style={styles.subtext}>Home Gadgets</Text>
            
                <FlatList
                    style={{ marginTop: 10, marginBottom: 10 }}
                    horizontal={true}
                    data={HomeGadgets}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View>
                            <ServiceCard
                                images={item.imageUri}
                                Servicename={item.title}
                                price={item.price} 
                                OnPressServicecard = {() => navigation.navigate("ListingDetails",item,item.desc)}
                            />
                        </View>        
                    )} />
                    <TouchableOpacity style={styles.viewallBtn}  onPress={() => navigation.navigate("ElectronicRepair")}>
                        <Text style={{color: "black",fontSize:16}}>View All</Text>
                    </TouchableOpacity>
            </View>  

                    {/* Home Painting */}
            <View   style={{ marginTop: 60}}>
            <Text style={styles.subtext}>Home Plumbing</Text>
            
                <FlatList
                    style={{ marginTop: 10, marginBottom: 10 }}
                    horizontal={true}
                    data={Plumbing}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View>
                            <ServiceCard
                                images={item.imageUri}
                                Servicename={item.title}
                                price={item.price} 
                                OnPressServicecard = {() => navigation.navigate("ListingDetails",item,item.desc)}
                            />
                        </View>        
                    )} 
                    />
                    <TouchableOpacity style={styles.viewallBtn}  onPress={() => navigation.navigate("Plumbing")}>
                        <Text style={{color: "black",fontSize:16}}>View All</Text>
                    </TouchableOpacity>
            </View>  
            </View>
            
            

        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
   

    text:{
        textAlign:"center",
        fontSize:23,
        fontWeight:"bold",
        backgroundColor:"#87CEEB",
        height:40,
        borderRadius:20,
        marginLeft:20,
        marginRight:20,
        marginBottom:10,  
        color:"black"     
    },
    subtext : {
        textAlign:"center",
        fontSize:17,
        fontWeight:"bold",
        backgroundColor:"#CCCCFF",
        height:40,
        marginBottom:10,  
        color:"black" ,
        paddingTop:9 
    },
   viewallBtn: {
       width:"60%",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#d3d3d3",
        paddingHorizontal: 10,
        marginLeft:80
      },
    
})