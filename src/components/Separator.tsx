import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Color } from './constances/Color';

interface SeparatorProps  {}

export const Separator: React.FunctionComponent<SeparatorProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Separator</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    container:{
        height:3,
        width:"100%",
        backgroundColor: Color.HEADER_MSG_BORDER,
        marginBottom:10,

    }
});