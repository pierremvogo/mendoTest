import React from 'react'
import {View, Dimensions} from 'react-native'

import PostForm from './PostForm'
import Listview from './List'
import {
    StyleSheet,
    ScrollView
  } from 'react-native';

function Home() {
    const Separator = () => <View style={styles.separator} />;
    return( 
            <View style={styles.maincontent}>
                <PostForm />
                <Separator />
                <ScrollView>
                    <Listview />
                    <Listview />
                    <Listview />
                    <Listview />
                    <Listview />
                    <Listview />
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