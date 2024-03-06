import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, FlatList, Modal, ScrollView} from 'react-native';
import style from './styles/style';


const App = () => {
  

  const [data , setData] = useState([]);

  const [name, setName] = useState('');
  const [email , setEmail] = useState('');

  const [nameError , setNameError] = useState(false);
  const [emailError , setEmailError] = useState(false);

  const [display , setDisplay] = useState(false);
  const [selectedUser , setSelectedUser] = useState([]);
 
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
    });
    
    response = await response.json();
    setData(response);
 }

 const updateUser = async (val) => {
     setDisplay(true);
     setSelectedUser(val);
 }


 const searchData = async (item) => {
   const url = `http://10.0.2.2:3000/users?q=${item}`;
   let respone  = await fetch(url);
  
   respone = await respone.json();
   if(respone){
     setData(respone);
   }else{
       getData();
   }
   
  
 }

useEffect(() => {
    getData();
},[]);


    return (
      <View style={{flex: 1}}>
        <Text style={{textAlign: 'center', fontSize: 30}}>Form</Text>
        <TextInput
          placeholder="Enter your name"
          style={style.item}
          onChangeText={text => setName(text)}
          value={name}
        />
        {nameError ? <Text style={style.error}>name is required</Text> : null}
        <TextInput
          placeholder="Enter your email"
          style={style.item}
          onChangeText={text => setEmail(text)}
          value={email}
          defaultValue={email}
        />
        {email.length && emailError ? (
          <Text style={style.error}>please enter valid email</Text>
        ) : emailError ? (
          <Text style={style.error}>email is required</Text>
        ) : null}
        <Button title="Save Data" onPress={() => saveData()} />
        <View style= {{marginLeft:10 , marginRight:10 , borderRadius:10}}>
          <TextInput
              style={style.textInputStyle}
              underlineColorAndroid="transparent"
              placeholder="Search Here"
              onChangeText={(item) => searchData(item)}
          />
        </View> 
        <ScrollView>
        {
           data.length ? 
                data.map((item) => 
                      <View style={style.item}>
                        <Text>{item.name}</Text>
                        <Text>{item.email}</Text>
                        <View>
                             <Button title='Delete' onPress={() => deleteData(item.id)}/>    
                        </View>
                        <View style={{marginTop:10}}>
                           <Button title='Update' onPress={() => updateUser(item)} />
                        </View>
                      
                        </View> 
                      )
                : null              
        }     
        </ScrollView>
        
        <Modal transparent={true} visible={display} animationType='slide'>  
            <UpdateForm  selectedUser={selectedUser} setDisplay={setDisplay} getData={getData}/>
        </Modal>
        
      </View>
    );  
 
}


const UpdateForm = (props) => {
    
    const [name , setName] = useState('');
    const [email, setEmail] = useState('');



    const updateUser = async () => {
         const data1 = {"name" : name , "email": email};
         const url = 'http://10.0.2.2:3000/users/';
         let response  = await fetch(url+props.selectedUser.id , {
            method:'Put' ,
            headers:{
               'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data1)
         })
         
        response = await response.json();
             
        if(response){
           console.warn("Data updated");
           props.setDisplay(false);
           
        }
        
    }

  
    useEffect(() => {
       if(props.selectedUser){
         setName(props.selectedUser.name);
         setEmail(props.selectedUser.email);
       }
    } , [props.selectedUser])
    
    useEffect(() => {
         props.getData();  
    }) 
    
     return(
         <View style={style.centerView}>
             <View style={style.modelView}>
              <TextInput placeholder='Enter your name' style={style.item} value={name} onChangeText={(text) => setName(text)}/>
              <TextInput placeholder='Enter your email' style={style.item} value={email} onChangeText={(text) => setEmail(text)}/>
              <View style={{marginTop:5, marginBottom:10}}>
                   <Button title='Update Data' onPress={() => updateUser()}/>
              </View>  
              <Button title='Close' onPress={()=> props.setDisplay(false)}/>
            </View> 
         </View>)
}


export default App;
