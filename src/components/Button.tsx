import React from 'react'
import {Button, View, Alert} from 'react-native'


function Buttons(){
    return(
    <View>
        <Button
            title="Publish"
            onPress={() => Alert.alert('Button publish')}
        />
    </View>)
}


export default Buttons
