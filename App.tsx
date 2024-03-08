import React, {useState} from 'react';
import { View  , Button , Alert} from 'react-native';

const App = () => {
 
   const alertFunction = () => {
      Alert.alert(
         'What is',
         'Cancel'
      );
   } 


   return(
        <View>
               <Button title='Alert' onPress={alertFunction}/>
        </View>     
   )

}


export default App;
