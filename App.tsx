import React, { useEffect, useState} from 'react';
import { Button, Text, TextInput, View , ToastAndroid , PermissionsAndroid} from 'react-native';
import style from './styles/style';




const App = () => {
 

   const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use camera');
        } else {
            console.log('permission denied');
            
        }
      } catch (err) {
        console.warn(err);
      }
    };

   return(
      <View style={{flex:1}}>
           <Text style={{margin:10 , textAlign:'center' , fontSize:20, fontWeight:'800', marginTop:40}}>
               Request Permission
            </Text>

            <Button title='Ask Permission' onPress={requestCameraPermission}/>         
      </View>
   )

}


export default App;
