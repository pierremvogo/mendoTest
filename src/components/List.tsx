
import React, {useEffect, useState} from 'react'
import {Image, View, StyleSheet, Dimensions, Text, ScrollView} from 'react-native'
import Images from './Image'
import PostDetails from './PostDetails'
import PostConfig from './PostConfig'
import {firebase} from '../../firebase-config';


function Listview({message, imageUrl}){
  const Separator = () => <View style={styles.separator} />;
    return (
    <View style={styles.container}>
        <View style={styles.image}>
            <View style={styles.imgpost}>
              <Image style={styles.image} source={{uri: imageUrl}}></Image>
            </View>
            <View style={styles.config}>
               <PostConfig />
            </View>
         </View>

        <View style={styles.content}>
          <View style={{overflow: "scroll"}}>
        <Text style={{color: "blue"}}>Post Message</Text>
        <View style={{width: 400, margin: 2,}}>
             <ScrollView>
                <Text style={{color: "black", textAlign: 'justify'}}>
                  {message}
                </Text>
            </ScrollView>
        </View>
       
    </View></View> 
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: "#e9ecef",
      margin: 10,
      borderRadius: 10
    },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    imgpost:{
      height: 80,
      borderRadius: 5
    },
    config:{
       marginLeft: Dimensions.get('window').width/9,
    },
    image: {
      width: Dimensions.get('window').width/3,
      height: 100,
      backgroundColor: '#9aa7b2',
      margin: 2,
      flex: 3,
      flexDirection: 'row',
      alignItems: "center"
    },
    content: {
      width: Dimensions.get('window').width*0.9,
      height: 100,
      backgroundColor: '#e9ecef',
      margin: 2
    }
  });
export default Listview