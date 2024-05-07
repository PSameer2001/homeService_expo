import { Alert, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { Icon } from 'react-native-elements';

import { createUserWithEmailAndPassword, onAuthStateChanged}  from 'firebase/auth';
import { auth } from '../Authentication/FirebaseConfig';
// import { LinearGradient } from 'expo-linear-gradient';

const SignupScreen = ({navigation}) => {
    const { colors } = useTheme();
    const [email, setEmail]= useState();
    const [password, setPassword] = useState();
    const [cpassword, setCPassword] = useState();

    const [data, setData] = React.useState({
        secureTextEntry: true,
    });
   
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleSignup = async () => {
        if(email == null || password == null  ){
            Alert.alert("Fill all the details")
            
        }else{
            if(password == cpassword){
                try{
                  await  createUserWithEmailAndPassword(auth, email, password)
                .then((re) => {
                    Alert.alert("Registered Successfully");
                })
                .catch ((re) => {
                    Alert.alert(re.message)
                }) 
            }catch(err){
                Alert.alert(err.message)
          }
        }else{
            Alert.alert("Password and Confirm Password Do not match")
        }
        }
     }

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
             if(authUser) {
              auth.signOut()
             }
         });  
     }, []);

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor='#29C5F6' barStyle="light-content"/>
  
   <View style={styles.brandview} >
            <Icon name='home' type='font-awesome' size={40} color='#fff'/>
                <Text style = {styles.text_header}>Home Service</Text>
            </View>
  <Animatable.View 
      animation="fadeInUpBig"
      style={[styles.footer, {
          backgroundColor: colors.background
      }]}
  >
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style = {{marginBottom:10,color:"#29C5F6",fontSize:25,
                        fontWeight:"bold",textAlign:"center"}}>SIGN UP</Text>
       

              {/* email */}
      <Text style={[styles.text_footer, {
          color: colors.text
      }]}>Email</Text>

      <View style={styles.action}>
          <FontAwesome 
              name="user-o"
              color={colors.text}
              size={20}
          />
          <TextInput
              placeholder="Your Email"
              placeholderTextColor="#666666"
              style={[styles.textInput, {
                  color: colors.text
              }]}
              autoCapitalize="none"
                value={email}
              onChangeText={(text)=> setEmail(text)}
              
          />
          {data.check_textInputChange ? 
          <Animatable.View
              animation="bounceIn"
          >
              <Feather 
                  name="check-circle"
                  color="green"
                  size={20}
              />
          </Animatable.View>
          : null}
      </View>

            {/* password */}
      <Text style={[styles.text_footer, {
          color: colors.text,
          marginTop: 35
      }]}>Password</Text>
      <View style={styles.action}>
          <Feather 
              name="lock"
              color={colors.text}
              size={20}
          />
          <TextInput 
              placeholder="Your Password"
              placeholderTextColor="#666666"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={[styles.textInput, {
                  color: colors.text
              }]}
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
              onPress={updateSecureTextEntry}
          >
              {data.secureTextEntry ? 
              <Feather 
                  name="eye-off"
                  color="grey"
                  size={20}
              />
              :
              <Feather 
                  name="eye"
                  color="grey"
                  size={20}
              />
              }
          </TouchableOpacity>
      </View>

              {/* confirm password */}
<Text style={[styles.text_footer, {
          color: colors.text,
          marginTop: 35
      }]}>Confirm Password</Text>
      <View style={styles.action}>
          <Feather 
              name="lock"
              color={colors.text}
              size={20}
          />
          <TextInput 
              placeholder="Confirm Password"
              placeholderTextColor="#666666"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={[styles.textInput, {
                  color: colors.text
              }]}
              autoCapitalize="none"
              value={cpassword}
              onChangeText={(text) => setCPassword(text)}
          />
          <TouchableOpacity
              onPress={updateSecureTextEntry}
          >
              {data.secureTextEntry ? 
              <Feather 
                  name="eye-off"
                  color="grey"
                  size={20}
              />
              :
              <Feather 
                  name="eye"
                  color="grey"
                  size={20}
              />
              }
          </TouchableOpacity>
      </View>
      
      <View style={styles.button}>
      <TouchableOpacity
            onPress = { handleSignup }
              style={[styles.signIn, {
                  borderColor: '#29C5F6',
                  borderWidth: 1,
                  backgroundColor:"#29C5F6"
              }]}
          >
              <Text style={[styles.textSign, {
                  color: 'black'
              }]}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{flexDirection:"row"}}>
              <Text style={{ marginTop:15,margin:10}}>Already have an Account ?</Text>
            <TouchableOpacity   onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={{color: '#29C5F6', marginTop:15}}>Sign In</Text>
            </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
  </Animatable.View>
</View>
);
};


export default SignupScreen

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#29C5F6'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    errorMsg1: {
        color: 'green',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        color : "#08d4c4"
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    brandview : {
        flex : 1,
        alignItems : 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 100
    },
  });