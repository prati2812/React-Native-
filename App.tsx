import React from 'react';
import { Text, View, StyleSheet, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  
    return(
             <NavigationContainer>
                 <Tab.Navigator>
                     <Tab.Screen component={Home} name='Home'/>
                     <Tab.Screen component={Add} name='Add' />
                     <Tab.Screen component={Update} name='Update' />
                 </Tab.Navigator>
             </NavigationContainer>
        
    )  
 
}

const Home = () => {
  return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text>Home</Text>
      </View>
  )
}

const Add = () => {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add</Text>
    </View>
  )
}

const Update = () => {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Update</Text>
    </View>
  )
}



export default App;
