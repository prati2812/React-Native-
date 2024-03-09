import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import { View  , Text, Button} from 'react-native';
import axios from 'axios';

const App = () => {

   const [data, setData] = useState('');

   const displayAdvice = async () => {
      await axios.get('http://api.adviceslip.com/advice/2')
              .then((res) => {
                  setData(res.data.slip.advice);
              })
              .catch((e) => {
                  console.log(e);
              })
   }


   return(
          <View style={styles.container}>
                <Button  title='Get Advice' onPress={displayAdvice}/>
                {
                   data.length ?
                          <Text>{data}</Text> : null
                }
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
