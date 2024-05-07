import { TouchableOpacity, StyleSheet, Text, TextInput, View, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState } from 'react'
import {db, storage} from '../src/Authentication/FirebaseConfig'
import { doc, setDoc } from 'firebase/firestore';
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Icon } from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';
import { StatusBar } from 'expo-status-bar';

const ImageInput = ({ imageUri, onPress}) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				{!imageUri && (
					<Icon
						color="grey"
						name="camera"
						size={40}
					/>
				)}
				{imageUri && (
					<Image source={{ uri: imageUri }} style={{width:"100%",height:"100%"}} />
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const AdminScreen = ({navigation}) => {
    const [ title,setTitle ] = useState('');
    const [ price,setPrice ] = useState('');
    const [ desc,setDesc ] = useState('');
    const [ time,setTime ] = useState('');
    const [ imageUri,setImageUri ] = useState(null);
    const [ displayImage,setDisplayImage ] = useState(null);
    const [ category,setcategory ] = useState("");

    const data = ['HomeCleaning','HomeRepair','Plumbing','HomeGadgets']
    const Postdata = async () => {
        if(!title || !price ){
            Alert.alert("Please fill all the fields")
        }
        else{
        try {
            await setDoc(doc(db,category,`${Date.now()}`),{
            title,
            price,
            desc,
            imageUri,
            time,
            displayImage
            }
        )
        alert("Added Successfully in"+
        category)
        setTitle('');
        setPrice('');
        setDesc('');
        setTime("");
        setDisplayImage(null);
        setImageUri(null);
        } catch (error) {
            Alert.alert(error)
        }
    }
}

const openCamera = async() => {
    const result = await ImagePicker.launchImageLibraryAsync({quality:0.5,aspect:[4,3]})
    if (!result.cancelled) {
      console.log(result.uri)
      setDisplayImage(result.uri);
      uploadImage(result.uri, `${Date.now()}`)
          .then(() => {
              console.log('it work')
          })
          .catch(error => {
              console.log('it does not work')
              console.error(error)
          })
        }
    }
  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
  
    const imageRef = ref(storage,`/images/`+imageName)
    const uploadURL = uploadBytes(imageRef,blob).then(snapshot=>{
     
      getDownloadURL(imageRef).then((downloadURL)=>{
      setImageUri(downloadURL)
      })
    },(error)=>{
      Alert.alert(error)
    }
    )
  }
  
  return (
   
        <View>
           <View style={{
                height: 70, marginBottom: 1, flexDirection: "row",
                backgroundColor: "#9E91DF"
            }}>
                <StatusBar style="dark" />
                <Text style={{ marginLeft: "10%", fontSize: 20,color:"#FFF",
                 marginTop: 40, fontWeight:"bold" }}>ADDING ITEM</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.text}>Image</Text>
            {displayImage && <View style={styles.selectedImg}>
                  <Image source={{uri:displayImage}} style={{width:100,height:100}}/></View>}
              <ImageInput onPress={()=>{openCamera(),uploadImage()}}/>
              </View>
            <Text style={styles.text}>Title</Text>
            <TextInput style={styles.textView} value={title} 
                              onChangeText={(text)=>setTitle(text)}></TextInput>

            <Text style={styles.text}>Price</Text>
            <TextInput style={styles.textView} value={price} keyboardType={'number-pad'}
                              onChangeText={(text)=>setPrice(text)}></TextInput>

            <Text style={styles.text}>Description</Text>
            <TextInput style={styles.textView} value={desc} multiline={true}
                             onChangeText={(text)=>setDesc(text)}></TextInput>

            <Text style={styles.text}>Time</Text>
            <TextInput style={styles.textView} value={time} keyboardType={'number-pad'}
                             onChangeText={(text)=>setTime(text)}></TextInput>

            <Text style={styles.text}>Category</Text>
            <SelectDropdown 
                    buttonStyle= {styles.dropdown}
                    buttonTextStyle={{fontSize:15}}
                    data={data}
                    onSelect={(item,index) => {
                      setcategory(item)
                    }}
                />

            <TouchableOpacity style={[styles.btn, {backgroundColor:'green', alignItems:'center'}]}
                  onPress={Postdata}>
                  <Text style={[styles.text, {color:'#fff'}]}>POST DATA</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("AdminBook")}>
                   <Text style={{color: '#29C5F6', marginTop:15, fontSize:20
                      ,marginLeft:"28%"}}>Go to Booking Info</Text>
             </TouchableOpacity>
        </View>

  )
}

export default AdminScreen

const styles = StyleSheet.create({
    selectedImg:{
        borderRadius:10,
        overflow:'hidden',
        marginRight:10,
        marginLeft:10
      },
      container: {
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 15,
		height: 100,
		justifyContent: "center",
		marginVertical: 10,
		overflow: "hidden",
		width: 100,
	},
  btn : {
    width: '70%',
    height: 40,
    borderRadius: 10,
    marginTop:20,
    justifyContent:"center",
    marginLeft:50
  },
	textView: {
    width: '95%',
    height: 40,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    borderWidth:1,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderRadius: 10,
    marginLeft:10,
    fontWeight: 'bold',
    fontSize:17,
    marginBottom:15
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:4
  },
  dropdown: {
    height:40,
    width:"60%",
    backgroundColor: '#fff',
    borderWidth:1,
    borderRadius: 10,
    marginLeft:10,
    fontWeight: 'bold',
    fontSize:17
  },
})