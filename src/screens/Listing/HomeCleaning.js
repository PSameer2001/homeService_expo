import React,{useState,useEffect} from "react";
import { FlatList, View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { collection , getDocs } from "firebase/firestore";
import { db } from "../../Authentication/FirebaseConfig";
import { ItemCard } from "../../Components/ItemCard";
import { SearchBar } from "react-native-elements";
import { Feather } from "@expo/vector-icons";


const HomeCleaning = ({navigation}) => {
  
    const [item,setItems] = useState([]);
    const [FilteredData,setFilteredData] = useState([]);
    const [Searchdata,setSearchdata] = useState("");
  
    const [isRefreshing, setIsRefreshing] = useState(false);
  
    const onRefresh = () => {
      setIsRefreshing(true)
      setItems('');
      getData();
      refreshing();
  }
  const refreshing = () => {
    setIsRefreshing(false)
  }
  
    const getData = async () => {
      const ads = collection(db,'HomeCleaning');
      const details = await getDocs(ads);
      const productList = details.docs.map(doc=>doc.data());
      console.log(productList)
      setItems(productList);
    }
    
    useEffect(()=>{
      getData();
      return ()=>{
       
      }
    },[])
  
    const id = Math.floor(Math.random()*1000);
    console.log(id)


    const Searchname = (text) => {
      if(text){
        const newData = item.filter(function (item) {
          const itemData = item.title.toUpperCase()
          
          const textData = text;
          return itemData.indexOf(textData) > -1;
        });
        setFilteredData(newData);
        setSearchdata(text);
      }
      else{
        setFilteredData(item)
      }
    }
  
  return (
    <View style={styles.screen}>
      <View style={{flexDirection:"row"}} >
        <TextInput placeholder="Search" onChangeText={(text) => {{Searchname(text)}}} style={{height:40,width:"90%" ,borderBottomWidth:1,
        marginBottom:10,borderBottomColor:"blue",fontSize:17}} value={Searchdata}>
        </TextInput> 
        <TouchableOpacity style={{marginLeft:5,marginTop:10}} onPress={Search}>
        <Feather name="search" size={25} color="blue" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={item}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        renderItem={({ item }) => (
          <ItemCard
          servicename={item.title}
          price={''+item.price}
          imageUri={{uri:item.imageUri}}
          time={item.time}
          onPress={() =>
            navigation.navigate(("ListingDetails"),item,item.desc,item.category)}
          />
          )}
      />
    </View>
  )
}

export default HomeCleaning

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 20,
    paddingHorizontal:10,
    marginBottom:30
  },
})