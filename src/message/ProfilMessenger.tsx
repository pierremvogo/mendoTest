import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAweSome5Icon from "react-native-vector-icons/FontAwesome5";
import { HeaderNewMessage } from '../components/HeaderNewMessage'
import { Color } from '../components/constances/Color'

interface ProfilMessengerProps  {}

export const ProfilMessenger: React.FunctionComponent<ProfilMessengerProps> = ({}) => {
  return (
    <View >
        <HeaderNewMessage title=""/>
     
       <View style={styles.container}>
            <Image style={styles.image} source={require('../img/default-user-avatar.png')}/>
                 <Text style={styles.textName}>John Johnson</Text>
            <Text style={styles.textDescription}>@john_johnson</Text>
       </View>
       <View style={{flexDirection:"row"}}>
            <View style={styles.container1}>
        <View style={{paddingLeft:20}}>
             <FontAweSome5Icon
              name="comment"
              color={Color.INPUT_ICON}
              size={20}
            />
        </View>
        <Text style={styles.textTitre}>Message</Text>
        </View>

       <View style={styles.container1}>
            <View style={{paddingLeft:10}}>
                <FontAweSome5Icon
                name="info"
                color={Color.INPUT_ICON}
                size={20}
                />
            </View>
        
            <Text style={styles.textTitre}>Profil</Text>
        
       </View> 
       <View style={{flexDirection:"row"}}>
         <View style={styles.container1}>
        <View style={{paddingLeft:10}}>
             <FontAweSome5Icon
              name="bell"
              color={Color.INPUT_ICON}
              size={20}
            />
        </View>
        <Text style={styles.textTitre}>Mute</Text>
       </View>

       <View style={styles.container1}>
        <View style={{paddingLeft:10}}>
             <FontAweSome5Icon
              name="share"
              color={Color.INPUT_ICON}
              size={20}
            />
        </View>
        
        <Text style={styles.textTitre}>Partager</Text>
        
       </View> 

       <View style={styles.container1}>
        <View style={{paddingLeft:20}}>
             <FontAweSome5Icon
              name="user-plus"
              color={Color.INPUT_ICON}
              size={20}
            />
        </View>
        
        <Text style={styles.textTitre}>Collaborer</Text>
        
       </View> 
     </View>
     </View>
    <View style={{flexDirection:"row"}}>
      <Text style={styles.textMedia}>Media, fichiers et liens</Text>
      <View style={{paddingRight: 20, marginTop: 30}}>
        <FontAweSome5Icon
              name="arrow-right"
              color={Color.INPUT_ICON}
              size={20}
              
            />
      </View>
       
    </View>
    <View >
        <Text style={styles.text}>Ce sont les images, les videos, les documents et les liens que vous avez échangé avec john</Text>
    </View>
    <View style={{flexDirection:"row"}}>
         <View style={styles.container2}>
        <View >
        <Image style={styles.image1} source={require('../img/default-user-avatar.png')}/>

        </View>
       </View>

       <View style={styles.container2}>
         <Image style={styles.image1} source={require('../img/default-user-avatar.png')}/>

       </View> 
       <View style={{flexDirection:"row"}}>
         <View style={styles.container2}>
        
            <Image style={styles.image1} source={require('../img/default-user-avatar.png')}/>

       </View>

       <View style={styles.container2}>
         <Image style={styles.image1} source={require('../img/default-user-avatar.png')}/>
       </View> 

       <View style={styles.container2}>
         <Image style={styles.image1} source={require('../img/default-user-avatar.png')}/>
       </View> 
     </View>
     
     </View>   
      <Text style={{paddingLeft:20,fontSize:16, fontWeight:"bold", opacity:100}}>Groupe</Text>   
      <Text style={styles.text}>John et vous avez 10 groupes en commun</Text>   
    </View>
    
  )
}

const styles = StyleSheet.create({
   
  container:{
    alignItems:"center",
    marginTop:48,
  },
  container1:{
    paddingLeft:10,
    paddingRight:20,
    marginTop:5,
   
    
  },
  container2:{
    paddingLeft:10,
    paddingRight:10,
    marginTop:5,
   
    
  },
     image: {

      width: 93,
      height: 93,
      margin: 5,
      borderRadius: 40,

      
    },
     image1: {

      width: 40,
      height: 40,
      margin: 5,
      borderRadius: 8,

      
    },
    imageText:{
      paddingLeft:10,
    },
    textName:{
      color: Color.BLACK,
      fontWeight:"bold",
      fontSize:16,
      opacity:100,
    },
    textTitre:{
      color: Color.BLACK,
      fontWeight:"bold",
      fontSize:12,
      opacity:100,
    },
    textDescription:{
       color: Color.SORT,
      paddingLeft:10,
      fontSize:12,
      paddingRight:10,
      marginBottom:40,
        opacity:100,
    },
   textMedia:{
    padding:20,
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
      opacity:100,
   },
   text:{
    color: Color.BLACK,
    fontSize:12,
    padding:20,
    opacity:100,
   }

})

