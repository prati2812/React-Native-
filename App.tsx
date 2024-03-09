import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import { Alert, Pressable } from 'react-native';
import { View  , Text, FlatList} from 'react-native';

const App = () => {

   const displayAlert = () => {
      Alert.alert('warning');
   }


   return(
          <View style={styles.container}>
               <Fab onPress={displayAlert} title="+"/>
          </View>     
   )  

}


const Fab = (props) => {
   return(
       <View style={styles.fabContainer}>
            <Pressable  onPress={props.onPress}>
                    <Text style={styles.fabTxt}>{props.title}</Text>
            </Pressable>   

       </View>
   )
}

const styles = StyleSheet.create({ 
   container: { 
       flex: 1, 
       backgroundColor: "#fff", 
   }, 
   fabContainer:{
      justifyContent: "center", 
      alignItems: "center", 
      borderRadius: 100, 
      position: "absolute", 
      bottom: 70, 
      right: 40, 
      backgroundColor: "#26653A", 
      paddingHorizontal: 20, 
      paddingVertical: 10, 
   },
   fabTxt:{
      color:'white',
      fontSize:20
   }

}); 

export default App;
