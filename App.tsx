import React, { useEffect, useState} from 'react';
import { Button, Text, View} from 'react-native';
import style from './styles/style';
import AsyncStoarge from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {

   const [data , setdata] = useState('');

   const setData = async() => {
       await AsyncStorage.setItem("name" , "Pratik Prajapati");
   }

   const getData = async() => {
       let data = await AsyncStorage.getItem("name");
       setdata(data);         
   }

   const removeData = async() => {
      await AsyncStorage.removeItem('name');
      console.warn("data removed");
      
   }

   return(
      <View style={{marginTop:100 , marginLeft:30, margin:10}}>
            <Text style={{fontSize:40, color:'black'}}>AsyncStorage with React Native</Text>
            <Button title='Set Data' onPress={() => setData()}/>
            <View style={{marginTop:10}}> 
            <Button title='Get Data' onPress={() => getData()}/>
            {
               data ?  
                   <Text>{data}</Text> : <Text>No Data</Text>
            }
            <Button title='Remove Data' onPress={() => removeData()}/>
            </View>
      </View>
   )

}


export default App;
