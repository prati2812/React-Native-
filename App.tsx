import React, {useEffect, useState} from 'react';
import { View  , Text, FlatList} from 'react-native';

const App = () => {

   const data = [
      {id: 1, name: 'John', email: 'john@gmail.com'},
      {id: 2, name: 'Bob', email: 'bob@gmail.com'},
      {id: 3, name: 'Mei', email: 'mei@gmail.com'},
      {id: 4, name: 'Steve', email: 'steve@gmail.com'}
  ]


  const item = ({item}) => (  
       <View style={{flexDirection:'row'}}>
               <View style={{ width: 50, backgroundColor: 'lightyellow'}}>
                     <Text>{item.id}</Text>
               </View>
               <View style={{ width: 300, backgroundColor: 'lightyellow'}}>
                     <Text>{item.name}</Text>
               </View>
               <View style={{ width: 400, backgroundColor: 'lightyellow'}}>
                     <Text>{item.email}</Text>
               </View>
       </View>
  )
 
   return(
          <View style={{flex:1, justifyContent:'center' , alignItems:'center'}}>
                <FlatList renderItem={item} data={data} keyExtractor={item => item.id.toString()}/>
          </View>  
   )

}


export default App;
