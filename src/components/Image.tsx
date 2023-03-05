import React from 'react'
import {Image,Dimensions,View, StyleSheet} from 'react-native'


function Images(){
    return (
    <View>
        <Image style={styles.image} source={require('../img/ic1.jpg')}></Image>
    </View>)
}

const styles = StyleSheet.create({
    image:{
        margin: 5,
        height: 50,
        alignContent: 'center',
        width: Dimensions.get('window').width/5,
        backgroundColor: "#b3bbc2"
    },

})

export default Images
