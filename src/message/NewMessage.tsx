import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { HeaderNewMessage } from '../components/HeaderNewMessage';
import { Separator } from '../components';
import { TextInput } from 'react-native';
import { Color } from '../components/constances/Color';

interface NewMessageProps {}


export const NewMessage : React.FunctionComponent<NewMessageProps> =({}) => {

  return (
    <View>
      <HeaderNewMessage/>
   
       <View  >
             <TextInput  style={styles.input} underlineColorAndroid = "transparent"
                 placeholderTextColor = "#7E7E7E"
                 autoCapitalize = "none"
                 placeholder="A : Entrer un nom d’un collaborateur ou d’un groupe"/>
        </View>
        <Separator/>
        <View>
          <Text style={styles.text}>
            Suggestion 
          </Text>
        </View>
        <TouchableOpacity>
           <View style={styles.imageText}>
          <Image style={styles.image} source={require('../img/default-user-avatar.png')}/>
          <View style={{flexDirection:"column", alignSelf:"center"}}>
            <Text style={styles.textName}>John Johnson</Text>
            <Text style={styles.textDescription}>Mathématiques, SVT, Développement Web</Text>
          </View>  
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
           <View style={styles.imageText}>
          <Image style={styles.image} source={require('../img/default-user-avatar.png')}/>
          <View style={{flexDirection:"column", alignSelf:"center"}}>
            <Text style={styles.textName}>John Johnson</Text>
            <Text style={styles.textDescription}>Mathématiques, SVT, Développement Web</Text>
          </View>  
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
           <View style={styles.imageText}>
          <Image style={styles.image} source={require('../img/default-user-avatar.png')}/>
          <View style={{flexDirection:"column", alignSelf:"center"}}>
            <Text style={styles.textName}>John Johnson</Text>
            <Text style={styles.textDescription}>Mathématiques, SVT, Développement Web</Text>
          </View>  
        </View>
        </TouchableOpacity>
       
    </View>
  )
}

const styles = StyleSheet.create({
   input: {
      paddingBottom: 10, 
      paddingLeft:20
    },
    text:{
     
       marginBottom:20,
       paddingLeft: 20,
       fontWeight: "bold",

    },
     image: {

      width: 50,
      height: 50,
      margin: 5,
      borderRadius: 40,

      
    },
    imageText:{
      flexDirection: "row",
      paddingLeft:20,
    },
    textName:{
      color: Color.BLACK,
      paddingLeft:10,
      fontWeight:"bold",
      fontSize:16,
    },
    textDescription:{
       color: Color.SORT,
      paddingLeft:10,
      fontSize:12
    }

})


