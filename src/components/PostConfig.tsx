import React from 'react'
import {Image, View, StyleSheet, Dimensions} from 'react-native'
import Images from './Image'
import PostDetails from './PostDetails'



function PostConfig(){
    return (
    <View style={styles.container}>
        <View style={styles.image}> 
          <Image  style={styles.image} source={require('../img/ic3.png')}></Image> 
        </View>
        <View style={styles.image}> 
          <Image style={styles.image} source={require('../img/icc.jpg')}></Image> 
        </View> 
        <View style={styles.image}> 
          <Image style={styles.image} source={require('../img/add.png')}></Image> 
        </View>
        <View style={styles.image}> 
          <Image style={styles.image} source={require('../img/ic2.jpg')}></Image> 
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: "#e9ecef",
      margin: 10
    },
    image: {
      width: 25,
      height: 25,
      margin: 5,
      alignItems: "center",

      
    },
    content: {
      width: Dimensions.get('window').width,
      height: 100,
      backgroundColor: '#e9ecef',
      margin: 5
    }
  });
export default PostConfig