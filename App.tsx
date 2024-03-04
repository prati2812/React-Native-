import React, { Component, useEffect, useState } from 'react';
import { Text, View, TextInput, Button, FlatList, StyleSheet, ScrollView, SectionList, useWindowDimensions, TouchableHighlight, TouchableOpacity, ActivityIndicator, Platform, Modal, StatusBar, Pressable } from 'react-native';
import style from './styles/style';


const App = () => {
  
    return(
        <View>
             <Text style={style.modalText}>Platform OS is {Platform.OS}</Text>
        </View> 
    )  
 
}



export default App;
