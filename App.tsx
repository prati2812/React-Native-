import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, FlatList} from 'react-native';
import style from './styles/style';


const App = () => {
  
  const [name, setName] = useState('');
  const [email , setEmail] = useState('');

 const saveData = async () => {
    const data1 = {"name" : name , "email" : email};
    const url = 'http://10.0.2.2:3000/users';
    let response = await fetch(url , {
       method:'POST',
       headers:{
         'Content-type' : 'application/json'
       },
       body: JSON.stringify(data1)
    })

    response = await response.json();
    console.warn(response);
    
 }

 

    return (
      <View style={{flex: 1}}>
           <Text style={{textAlign:'center' , fontSize:30}}>Form</Text> 
           <TextInput placeholder='Enter your name' style={style.item} onChangeText={(text) => setName(text)} value={name}/> 
           <TextInput placeholder='Enter your email' style={style.item} onChangeText={(text) => setEmail(text)} value={email} />
           <Button  title='Save Data' onPress={() => saveData()}/>
      </View>
    )  
 
}



export default App;
