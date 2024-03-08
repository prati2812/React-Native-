import React, { useEffect, useState} from 'react';
import { Button, Text, TextInput, View , ToastAndroid , PermissionsAndroid} from 'react-native';
import style from './styles/style';




const App = () => {
 

   const requestCameraPermission = async () => {
     
      
       const granted = await PermissionsAndroid.requestMultiple(['android.permission.CAMERA' , 
                         'android.permission.READ_CONTACTS',
                         'android.permission.READ_SMS']);
       if(granted[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED && 
          granted[PermissionsAndroid.PERMISSIONS.READ_CONTACTS] === PermissionsAndroid.RESULTS.GRANTED &&
          granted[PermissionsAndroid.PERMISSIONS.READ_SMS] === PermissionsAndroid.RESULTS.GRANTED){

            console.log("allowed");
            
       }
       else{
           
          console.log("dfgyuh");
          
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
