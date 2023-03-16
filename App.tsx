import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { HeaderMsgBar } from './src/components/Header_app_msg';
import FontAweSome5Icon from "react-native-vector-icons/FontAwesome5";
import { Color } from './src/components/constances/Color';
import { Sizes } from './src/components/constances/Size';

export default function App() {
  const navigateToSearch = () => {

  }
  return (  
    <SafeAreaView> 
      <HeaderMsgBar />
      <View style={styles.mainContent}>
          <View style={{ flex: 2}}>
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
              <View style={{width: "10%", backgroundColor: "red"}}>
                <TouchableOpacity>
                  <FontAweSome5Icon
                      name="search"
                      color={Color.SEARCH_ICON}
                      size={28}
                  />
                </TouchableOpacity>
              </View>
          </View>
          <View style={{flexDirection: "row", marginLeft: 15, marginTop: 50}}>
            <View>
              <TouchableOpacity style={styles.btn1}>
                 <Text style={{color: Color.GREEN}}>Collaborateurs</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.btn2}>
                <Text style={{color: Color.BLACK}}>Groupes</Text>
              </TouchableOpacity>
              
            </View>
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
    backgroundColor: '#F2F2F2',
    margin: 20,
    padding: 15
  },
  btn2:{
    backgroundColor: '#F2F2F2',
    margin: 20,
    padding: 15
  },
  button: {
    backgroundColor: Color.INPUT_BACKGROUND,
    height: 46,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
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
