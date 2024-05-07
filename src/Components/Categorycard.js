import { StyleSheet, TouchableOpacity,Image, Text, View } from 'react-native'
import React from 'react'

function Categorycard({
    images,title,onPress
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.categorycard}>

                <Image
                    style={{ height: 60, width: 60, borderRadius: 30 }}
                    source={{ uri: images }} />
                <View>
                    <Text style={styles.categoryText}>
                        {title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Categorycard

const styles = StyleSheet.create({
    categorycard : {
        borderRadius :20,
        backgroundColor: "#FFF",
        justifyContent : "center",
        alignItems:"center",
        padding : 50,
        margin:10,
        width:150,
        height:150,
        marginBottom:15
    },

    
    categoryText:{
        marginTop:10,
        fontSize:12,
        fontWeight:"bold",
        color:"grey",
    },

})