import React, {useState, useEffect} from 'react'
import {View, Dimensions} from 'react-native'
import {firebase} from '../../firebase-config';
import PostForm from './PostForm'
import Listview from './List'
import {
    StyleSheet,
    ScrollView
  } from 'react-native';

function Home() {
 const [dataPost, setDataPost] = useState([]);

    const listItems = firebase.firestore().collection("posts")
          .onSnapshot((docs) => {
              console.log(docs);
              docs.forEach((elt) => {
                return(
                <View>
                  <Listview message={elt.data().message} imageUrl={elt.data().imageUrl}/>
                </View>)
          })
          
        });
  
    
   
  
    const Separator = () => <View style={styles.separator} />;
    return( 
            <View style={styles.maincontent}>
                <PostForm />
                <Separator />
                <ScrollView>
                   {listItems}
                </ScrollView>
                
            </View>
    )
}
const styles = StyleSheet.create({
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    maincontent:{
      marginTop: Dimensions.get('window').height/12
    }
  });
export default Home