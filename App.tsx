import React, { Component, useEffect, useState } from 'react';
import { Text, View, TextInput, Button, FlatList, StyleSheet, ScrollView, SectionList, useWindowDimensions, TouchableHighlight, TouchableOpacity, ActivityIndicator, Platform, Modal, StatusBar, Pressable } from 'react-native';
import style from './styles/style';


const App = () => {
  
    return(
        <View>
             <Pressable 
              onPress={() => console.warn("onPress Event Occured")}
              onLongPress={()=> console.warn("LongPress Event Occured")}
              onPressIn={() => console.warn("onPressIn Event Occured")}
              onPressOut={() => console.warn("onPressOut Event Occured")}
              >
                   <Text style={style.btn}>
                        Pressable Event
                   </Text>
             </Pressable>
        </View> 
    )  
 
}



export default App;
