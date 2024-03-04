import React, { Component, useEffect, useState } from 'react';
import { Text, View, TextInput, Button, FlatList, StyleSheet, ScrollView, SectionList, useWindowDimensions, TouchableHighlight, TouchableOpacity, ActivityIndicator, Platform, Modal, StatusBar, Pressable } from 'react-native';
import style from './styles/style';
import WebView from 'react-native-webview';


const App = () => {
  
    return(
           
             <View style={{flex:1}}>
                     <WebView  source={{uri:"https://www.google.co.in/"}} style= {{flex:1}}/>
                  
             </View>
             
           
        
    )  
 
}



export default App;
