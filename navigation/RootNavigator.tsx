import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { Home, NewMessage, ProfilMessenger } from "../src/message";
import * as React from 'react';

export type RouteParams = {
    Home: undefined,
    ProfilMessenger: undefined,
    NewMessage:undefined,

}
const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator =() =>{
    return <NavigationContainer>
        <Stack.Navigator>
        <Stack.Group>
            <Stack.Screen name="Home" component={Home}/>
             <Stack.Screen name="NewMessage" component={NewMessage}/>
            <Stack.Screen name="ProfilMessenger" component={ProfilMessenger}/> 
        </Stack.Group>
    </Stack.Navigator>
    </NavigationContainer>
    
}