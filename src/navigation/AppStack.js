import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from '../screens/Homescreen'
import Profile from '../screens/Profile';
import MyBooking from '../screens/MyBooking';
import ListingDetails from '../screens/ListingDetails'
import HomeRepair from '../screens/Listing/HomeRepair'
import HomeCleaning from '../screens/Listing/HomeCleaning'
import PaymentPage from '../screens/PaymentPage'
import BookingDetails from '../screens/BookingDetails'
import Plumbing from '../screens/Listing/Plumbing'
import HomeGadgets from '../screens/Listing/HomeGadgets'

const homeName = "Home";
const profile = "Profile";
const mybooking = "MyBooking";

const Nav = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack1 =() => {
  return(
    
      <Nav.Navigator options={{headerShown:false}}>
        <Nav.Screen name="AppStack" component={AppStack} options={{headerShown:false}} />
        <Nav.Screen name="ListingDetails" component={ListingDetails} options={{headerShown:false}}/>
        <Nav.Screen name="HomeRepair" component={HomeRepair} options={{title:"Home Repair"}}/>
        <Nav.Screen name="HomeCleaning" component={HomeCleaning} options={{title:"Home Cleaning"}}/>
        <Nav.Screen name="Plumbing" component={Plumbing} options={{title:"Plumbing"}}/>
        <Nav.Screen name="ElectronicRepair" component={HomeGadgets} options={{title:"Home Gadgets"}}/>
        <Nav.Screen name="PaymentPage" component={PaymentPage} />
        <Nav.Screen name="BookingDetails" component={BookingDetails}  options={{headerShown:false}}/>
      </Nav.Navigator>
  
  )
}

 const AppStack = () => {
 
  return (
   
          <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={
            ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
              
              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
  
              } else if (rn === mybooking) {
                iconName = focused ? 'list' : 'list-outline';
  
              } else if (rn === profile) {
                iconName = focused ? 'settings' : 'settings-outline';
              }
              
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })
        } >
              <Tab.Screen  name='Home' component={HomeScreen} options={{headerShown:false}} initialParams = {{icon : 'home'}} /> 
              <Tab.Screen  name='MyBooking' component={MyBooking} options={{headerShown:false}} initialParams = {{icon : 'plus'}}/>
              <Tab.Screen  name='Profile' component={Profile} options={{headerShown:false}} initialParams = {{icon : 'user'}}/>
          </Tab.Navigator>
          
           
      
  )
}
export default AppStack1