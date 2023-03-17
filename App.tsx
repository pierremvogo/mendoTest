import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { HeaderMsgBar } from './src/components/Header_app_msg';
import FontAweSome5Icon from "react-native-vector-icons/FontAwesome5";
import { Color } from './src/components/constances/Color';
import { Sizes } from './src/components/constances/Size';
import {NavigationContainer} from '@react-navigation/native';
import { ListMsgView } from './src/components/ListMsgView';

export default function App() {
  const [isGroup, setIsGroup] = useState(false);
  const [isCollab, setIsCollab] = useState(false);
  
  useEffect(()=>{
    setIsCollab(true);
  },[])

  const navigateToSearch = () => {

  }
  const setStyle = ()=>{
    return {
      margin: 20,
      padding: 15,
      width: "100%",
      backgroundColor: '#F2F2F2',
      alignItems: "center"
    }
  }
  const setColor = ()=>{
    return{
        color: Color.GREEN
    }
  }
  const switchBtn = (id) => {
    if(id=="C"){
      setIsCollab(true);
      setIsGroup(false);
    }else{
      setIsGroup(true);
      setIsCollab(false);
    }
  }
  return (  
    <SafeAreaView> 
      <HeaderMsgBar />
      <View style={styles.mainContent}>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
              <View style={{width: "84%", marginLeft: 5}}>
                <TouchableOpacity style={styles.button} onPress={navigateToSearch}>
                  <FontAweSome5Icon           
                    name="search"
                    color={Color.SEARCH_ICON}
                    size={18}
                  />
                  <Text style={styles.button_text} numberOfLines={1}>
                    Rechercher quelque chose
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{width: "16%", padding: 12}}>
                <TouchableOpacity >
                  <FontAweSome5Icon
                      name="sort-amount-down"
                      color={"#7E7E7E"}
                      size={18}
                  />
                </TouchableOpacity>
              </View>
          </View>
          <View style={{flexDirection: "row", marginLeft: 5, marginTop: 2}}>
            <View>
              <TouchableOpacity   style={isCollab?setStyle():styles.btn1} onPress={() => switchBtn("C")}>
                 <Text style={{color: isCollab?Color.GREEN:Color.BLACK}}>Collaborateurs</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={isGroup?setStyle():styles.btn2} onPress={() => switchBtn("")}>
                <Text style={{color: isGroup?Color.GREEN:Color.BLACK}}>Groupes</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <ListMsgView typeMSG={isGroup? 'GROUP':'COLAB'} />
          </View>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  mainContent:{
   flexDirection: 'column',
  },
  btn1:{
    margin: 20,
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  btn2:{
    margin: 20,
    padding: 15,
    width: "100%",
    alignItems: "center"
  },
  button: {
    backgroundColor: Color.INPUT_BACKGROUND,
    height: 46,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Sizes.INPUT_RADIUS,
    position: "relative",
    borderWidth: 2,
    borderColor: Color.PROFILE_ICON_BORDER,
  },
  button_text: {
    fontSize: 14,
    marginRight: 30,
    color: Color.INPUT_ICON,
    marginLeft: 10,
  },


})
