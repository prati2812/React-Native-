import React, { Component, useEffect, useState } from 'react';
import { Text, View, TextInput, Button, FlatList, StyleSheet, ScrollView, SectionList, useWindowDimensions, TouchableHighlight, TouchableOpacity, ActivityIndicator, Platform, Modal, StatusBar } from 'react-native';
import style from './styles/style';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  
  const [hidden , setHiddenStatus] = useState(true);
  const [changeText , setText] = useState('Statusbar Show');
  useEffect(()=>{
     if(hidden == true){
       setText('Statusbar show');
     }
     else{
       setText('Statusbar hide');
     }
  },[hidden])
  return(
       <View style={style.main}>
        <StatusBar hidden={hidden} backgroundColor={'green'}></StatusBar>
        <View style={style.centerView}>
        <Button title={changeText} onPress={()=> setHiddenStatus(!hidden)}/>
        </View>
       </View>     
  )
}



export default App;
