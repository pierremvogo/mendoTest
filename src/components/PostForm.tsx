import React, { useState } from 'react'
import { TextInput, StyleSheet,View,Image,  Dimensions, TouchableOpacity, Platform, Alert, Touchable } from 'react-native'
import Buttons from './Button'
import * as ImagePicker  from 'expo-image-picker';
import {firebase} from '../../firebase-config';
import Skeleton from 'react-loading-skeleton'


function PostForm(){
    const [postData, setPostData] = useState({message: ""})
    const [image, setImage] = useState({});
    const [status, setStatus] =  useState("")
    const [imageUrl, setImageUrl] = useState("../img/ic6.png");
    const [path, setPath] = useState("");
    const [isloading, setIsLoading] = useState(false);
   
    const chooseImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        });
        const source = {uri: result.assets?result.assets[0].uri:null};
        console.log(source);
        setImage(source);
    }

    const uploadImage = async () => {
        if(image){
             setIsLoading(true);
             const response = await fetch(image.uri)
             const blob = await response.blob();
             const fileName = image.uri.substring(image.uri.lastIndexOf('/')+1);
             var ref = firebase.storage().ref().child(fileName).put(blob)

             try{
                await ref;
                ref.then((response)=>{
                    setPath(response.metadata.fullPath);
                });
             }catch(e){console.log(e)}
             setIsLoading(false);
             Alert.alert("UPLOADED ");
        }
       
    }
    
    const handleChange = (e: any) =>{
        const value = e.target.value
        setPostData({message: value})
        console.log(postData)
    }
    
     const handlePost = (message: any) => {
        setIsLoading(true);
        uploadImage();
        firebase.firestore() 
            .collection("posts")
            .doc()
            .set({message: postData["message"], imageUrl:path});
        setIsLoading(false);
     }
        return(
                <View style={styles.maincontent}>
                    <View style={styles.content}>
                        <View  style={styles.input}>
                            <TextInput underlineColorAndroid = "transparent"
                                placeholderTextColor = "#9a73ef"
                                autoCapitalize = "none"
                                onChangeText = {(message) => setPostData(message)} 
                                value={postData["message"]}
                                placeholder="Eccrire un Post"/>
                        </View>
                        <View>
                            <TouchableOpacity onPress={chooseImage}>
                                <Image style={styles.image} source={require('../img/ic5.jpg')} ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.mainImage}>
                       <Image style={styles.image1} source={{uri: image.uri}} />
                    </View>
                    
                    <TouchableOpacity 
                        onPress = {
                            () => handlePost(postData["message"])
                        }>
                        <View style={{height: 50, margin:5}}><Buttons /></View>
                    </TouchableOpacity> 
                </View>
        )
}
const styles = StyleSheet.create({
    maincontent:{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: Dimensions.get('window').height*0.4
    },
    content:{
        margin: 10,
        width:  Dimensions.get('window').width,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
      flex: 2,
      height: 60,
      width: Dimensions.get('window').width,
      margin: 1,
      borderWidth: 2,
      borderRadius: 5,
      padding: 10
    },
    image:{
        margin: 5,
        height: 50,
        alignContent: 'center',
        width: Dimensions.get('window').width/5,
        backgroundColor: "#b3bbc2"
    },
    image1:{
        height: 60,
        width: Dimensions.get('window').width/5,
        backgroundColor: "#9aa7b2",
        margin: 2
    },
    mainImage:{
        height: 100,
        marginTop: 80,
        width: Dimensions.get('window').width,
        backgroundColor: '#F2F2F2',
        alignItems: "center"
    }
})
export default PostForm;