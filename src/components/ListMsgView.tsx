import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, FlatList, } from "react-native";
import FontAweSome5Icon from "react-native-vector-icons/FontAwesome5";
import { Color } from './constances/Color';
import { Sizes } from './constances/Size';
import { ListMsgItem } from "./ListMsgItem";

const ListMsgView: React.FC = ({typeMSG}) => {
	const [selectedId, setSelectedId] = useState<string>();

	type MsgData = {
	  id: string;
	  title: string;
	  icon: string,
	  title: string;
	  daata: string;
	  sub_title: string;
	  message: string;
	};
	 type MsgDataGroup = {
	 	  id: string;
		  title: string;
		  icon: string;
		  title: string;
		  daata: string;
		  sub_title: string;
		  message: string;
	 }


	type ItemProps = {
	  item: ItemData;
	  onPress: () => void;
	  backgroundColor: string;
	  textColor: string;
	};

	const MSG_Group: MsgGroupData[] = [
		{
		    id: '1',
		    title: 'Bot MendoLearn',
		    icon: 'Bot',
		    date: '20:13',
		    sub_title: '',
		    message: 'Bonjour, je suis votre assistante principale et on commence bientot'
		},
		{
			id: '2',
		    title: 'Development web community',
		    icon: '../img/ic3.png',
		    sender: 'Steve',
		    date: '20:13',
		    sub_title: 'Développement Web',
		    message: 'Bonjour, je suis votre assistante principale et on commence bientot'
		}
	]


	const MSG: MsgData[] = [
	  {
	    id: '1',
	    title: 'Bot MendoLearn',
	    icon: 'Bot',
	    date: '20:13',
	    sub_title: '',
	    message: 'Bonjour, je suis votre assistante principale et on commence bientot'
	  },
	  {
	    id: '2',
	    title: 'John Johnson',
	    icon: '../img/icc.jpg',
	    date: '14:24',
	    sub_title: 'Mathematiques, SVT, Développement Web',
	    message: 'Bonjour, je suis votre assistante principale et on commence bientot'
	  },
	  {
	    id: '3',
	    title: 'Bot MendoLearn',
	    sub_title: '',
	    icon: 'Bot',
	    date: '10:52',
	    message: 'Bonjour, je suis votre assistante principale et on commence bientot'
	  },
	];

	const renderItem = ({item}: {item: MsgData}) => {
	    return (
	      <ListMsgItem
	        item={item}
	        onPress={() => setSelectedId(item.id)}
	        textColor={"black"}
	      />
	    );
	 };

	return(
		<>
			<View style={styles.container}>
				<FlatList
			        data={typeMSG=="GROUP"?MSG_Group:MSG}
			        renderItem={renderItem}
			        keyExtractor={item => item.id}
			        extraData={selectedId}
			    />
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container:{
		flexDirection: "row",
		backgroundColor: "#F4F5F4",
		height: Dimensions.get('window').height,
		width: "100%"
	},
	row: {
	    margin: 15,
	    flexDirection: "row",
	    justifyContent: "space-between",
	    alignItems: "center",
	    paddingHorizontal: 2,
  	},
  	rowText: {
    	fontSize: 18,
  	},
});

export { ListMsgView };

