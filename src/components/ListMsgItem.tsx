import React, {useState, useEffect} from 'react';
import { View, StatusBar, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, FlatList,Image } from "react-native";
import FontAweSome5Icon from "react-native-vector-icons/FontAwesome5";
import { Color } from './constances/Color';
import { Sizes } from './constances/Size';



const ListMsgItem: React.FC = ({item, onPress, textColor}) => {

	return (
			<>
			  <View style={styles.container}>
			  	<TouchableOpacity onPress={onPress} style={styles.item}>
                     <View style={styles.avatar}>
                     	<Text style={{color: "#7AA087", fontSize: 14}} numberOfLines={1}>{item.icon}</Text>
                     </View>
                     <View style={{flexDirection: "column", padding: 10, width: "70%"}}>
                     	<Text style={[styles.title1]}>{item.title}</Text>
                      {item.sub_title&&<Text style={[styles.sub_title]} numberOfLines={1}>{item.sub_title}</Text>}
                     	<Text style={[styles.title2]} numberOfLines={1}>
                        {item.sender&&<Text>{item.sender} : </Text>}{item.message}
                      </Text>
                     </View>
                     <View style={{flexDirection: 'column', marginTop: 10}}>
                       <Text numberOfLines={1}>{item.date}</Text>
                       {!item.sub_title&&<Text style={styles.avatar1} numberOfLines={1}>1</Text>}
                     </View>
				</TouchableOpacity>
			  </View>
			</>
		)
}
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
  	flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  ellipsis:{
    overflow: 'hidden',
  },
  sub_title:{
    width: "100%",
    color: "#7E7E7E",
    overflow: 'hidden',
  },
  avatar:{
  	width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: 20
  },
  avatar1:{
    width: 20,
    height: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "#7AA087",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 1,
    color: "#FFFFFF"
  },
  title1: {
    fontSize: 14,
    fontWeight: "bold",
  },
  title2: {
    fontSize: 12,
    color: "#7E7E7E"
  },
});

export { ListMsgItem };