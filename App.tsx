import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, FlatList} from 'react-native';
import style from './styles/style';


const App = () => {


  const  [search , setSearch] = useState('');
  const [filterdData , setFiteredText] = useState([]);
  const [data,setData] = useState([]); 
 

  const searchFilterFunction = (text) =>{
      if(text){
         const newData = data.filter((item)=>{
             const itemData = item.title ? item.title.toUpperCase()
             : ''.toUpperCase();
           const textData = text.toUpperCase();
           return itemData.indexOf(textData) > -1;
         })

         setFiteredText(newData);
         setSearch(text);
      }
      else{
         setFiteredText(data);
         setSearch(text);
      }   
  } 


  const getData = async () => {
    try{
       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
       const data = await response.json();
       setData(data);
    }
    catch(error){
      console.warn(error);
      
    }
 }


 useEffect(()=> {
    getData(); 
 }, []);
 

    return (
      <View style={{flex: 1}}>
        <View style= {{marginLeft:10 , marginRight:10 , borderRadius:10}}>
        <TextInput
          style={style.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        </View>
        {


             filterdData.length  > 0 ?
             <FlatList
                 data={filterdData}
                 renderItem={({item}) => (
                   <View style={style.modelView}>
                     <Text style={{fontSize: 20}}>UserId: {item.userId}</Text>
                     <Text style={{fontSize: 20}}>Id: {item.id}</Text>
                     <Text style={{fontSize: 20}}>Title:  {item.title}</Text>
                     <Text style={{fontSize: 20}}>Body:  {item.body}</Text>
                   </View>
                 )}
              /> :
              <FlatList
                 data={data}
                 renderItem={({item}) => (
                   <View style={style.modelView}>
                     <Text style={{fontSize: 20}}>UserId: {item.userId}</Text>
                     <Text style={{fontSize: 20}}>Id: {item.id}</Text>
                     <Text style={{fontSize: 20}}>Title:  {item.title}</Text>
                     <Text style={{fontSize: 20}}>Body:  {item.body}</Text>
                   </View>
                 )}
              />

              
        }
      </View>
    );  
 
}



export default App;
