import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, FlatList} from 'react-native';
import style from './styles/style';


const App = () => {
  

  const [data , setData] = useState([]);

  const [name, setName] = useState('');
  const [email , setEmail] = useState('');

  const [nameError , setNameError] = useState(false);
  const [emailError , setEmailError] = useState(false);

  

  const deleteData = async (id) => {
    const url = 'http://10.0.2.2:3000/users/';
    
    let response = await fetch(url+id , {
       method:'Delete'
    });
    response = await response.json();
    if(response){
      console.warn("Data Deleted Successfully");
      
    }

  }

 const saveData = async () => {
     if(!name){
       setNameError(true);
     }
     else{
       setNameError(false);
     }

     if(!email){
       setEmailError(true);
     }
     else{
       setEmailError(false);
     }

     if(!email || !name){
       return false;
     }

     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
     if(!reg.test(email)){
       setEmailError(true);
       return false;
     }

     setName('');
     setEmail('');
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
  
    if(response){
       console.warn("Data Added Successfully");
       
    }
    
 }

 const getData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let response = await fetch(url , {
      method:'GET',
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    
    response = await response.json();
    setData(response);
 } 


 useEffect(()=> {
    getData();
 });


    return (
      <View style={{flex: 1}}>
           <Text style={{textAlign:'center' , fontSize:30}}>Form</Text> 
           <TextInput placeholder='Enter your name' style={style.item} onChangeText={(text) => setName(text)} value={name}/>
           {
              nameError ? <Text style={style.error}>name is required</Text> : null
           } 
           <TextInput placeholder='Enter your email' style={style.item} onChangeText={(text) => setEmail(text)} value={email} />
           {
                email.length && emailError ?  <Text style={style.error}>please enter valid email</Text> 
                            : emailError ?  
                            <Text style={style.error}>email is required</Text>
                            : null
           }
           <Button  title='Save Data' onPress={() => saveData()}/>
           {
              data.length ? 
                 data.map((item) => <View style={style.item}>
                         <Text>{item.name}</Text>
                         <Text>{item.email}</Text>
                         <Button title='Delete' onPress={() => deleteData(item.id)}/>
                  </View>)
                : <View style={{flex:1, marginTop:10}}><Text style={{textAlign:'center'}}>No Data Found</Text></View>
           }
      </View>
    )  
 
}



export default App;
