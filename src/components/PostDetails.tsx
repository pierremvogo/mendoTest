import React from 'react'
import {Image,ScrollView,Text,View} from 'react-native'
import {firebase} from '../../firebase-config';

function PostDetails(){
    return (
    <View style={{overflow: "scroll"}}>
        <Text style={{color: "blue"}}>Post Message</Text>
        <View style={{width: 400, margin: 2,}}>
             <ScrollView>
                <Text style={{color: "black", textAlign: 'justify'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</Text>
            </ScrollView>
        </View>
       
    </View>)
}


export default PostDetails
