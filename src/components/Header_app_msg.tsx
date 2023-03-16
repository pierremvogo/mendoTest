import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAweSome5Icon from "react-native-vector-icons/FontAwesome5";
import { Sizes } from "./constances/Size";
import { Color } from "./constances/Color";
import { Styles } from "./constances/styles";

const HeaderMsgBar: React.FC = () => {
  return(
    <>
        <View style={styles.container}>
            <View style={styles.contain1}>
                  <TouchableOpacity style={{flexDirection: "row"}}>
                    <FontAweSome5Icon
                      name="arrow-left"
                      color={"#1D1D1D"}
                      size={16}
                    />
                    <Text style={{color: "#1D1D1D", fontWeight: "bold", fontSize: 16, opacity: 1, marginLeft:20}} numberOfLines={1}>
                        Messages
                    </Text>
                  </TouchableOpacity>
            </View>
            <View style={styles.contain2}>
                  <View>
                    <Text style={{fontSize:16}}>...</Text>
                  </View>
                  <TouchableOpacity style={{flexDirection: "row"}}>
                    <View style={{marginLeft: 5, marginRight:5}}>
                      <FontAweSome5Icon
                        name="edit"
                        color={Color.GREEN}
                        size={16}
                      />
                    </View>
                    <Text style={{color: Color.GREEN, fontSize: 16}} numberOfLines={1}>
                        Nouveau
                    </Text>
                  </TouchableOpacity>
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
      flexDirection: "row",
      width: "100%",
      backgroundColor: "#FFFFFF",
      paddingHorizontal: Sizes.SCREEN_PADDING,
      paddingBottom: 20,
      borderBottomWidth: 3,
      borderBottomColor: Color.HEADER_MSG_BORDER,
      marginTop: 50,
      marginBottom: 7
    },
    title:{
      color: "#1D1D1D",
      fontWeight: Styles.BOLD,
      fontSize: "16",
      opacity: 1
    },
    contain1:{
      flex: 2,
      flexDirection: "row"
    },
    contain2:{
      flex: 1,
      flexDirection: "row",
    }
})

export { HeaderMsgBar };


