import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, FlatList} from 'react-native';
import style from './styles/style';


const App = () => {

  const [data,setData] = useState(''); 


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
        {
          data.length ? 
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
         : null
        }
      </View>
    );  
 
}



export default App;
