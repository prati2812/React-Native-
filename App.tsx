import React, { Component, useEffect, useState } from 'react';
import { Text, View, TextInput, Button, FlatList, StyleSheet, ScrollView, SectionList, useWindowDimensions, TouchableHighlight, TouchableOpacity, ActivityIndicator, Platform, Modal } from 'react-native';
import style from './styles/style';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
 
  const [showModal, setModal] = useState(false);
  const [showOpenBtn , setStatusBtn] = useState(true);

  useEffect(()=>{
    if(showModal == false){
      setStatusBtn(true);
    }
    else{
      setStatusBtn(false);
    }
    
  } , [showModal])

  return(
       <View style={style.main}>
        <Modal transparent={true} visible={showModal} animationType='slide'>
          <View style={style.centerView}>
             <View style={style.modelView}>
                    <Text style={style.modalText}>Hello World</Text>
                    <Button title='Close Model' onPress={() => setModal(false)}/>
             </View>
          </View>
          
        </Modal>

        <View style={style.btnView}>
          {
             showOpenBtn== true ? <Button  title='Open Modal' onPress={()=> setModal(true)}/> : null     
          }
        
        </View>
       </View>     
  )
}



export default App;
