import React, { useEffect, useState } from 'react';
import { View  , Button, PermissionsAndroid, Platform, ToastAndroid} from 'react-native';
import notifee from '@notifee/react-native';



const App = () => {

    
 
    const handle = async () => {


      if(Platform.OS == 'android'){
          try{
              PermissionsAndroid.check('android.permission.POST_NOTIFICATIONS')
               .then(async response => {
                    if(!response){
                      const granted = PermissionsAndroid.request('android.permission.POST_NOTIFICATIONS');
                      if(await granted != PermissionsAndroid.RESULTS.GRANTED){
                              ToastAndroid.show('Permission not granted' , ToastAndroid.SHORT);   
                      }
                    }
               })
          }
          catch(e){
               ToastAndroid.show('Please try again later' , ToastAndroid.SHORT);
          }
      }


      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });
  
      // Display a notification
      await notifee.displayNotification({
        title: 'Notification Title',
        body: 'Main body content of the notification',
        android: {
          channelId,
          pressAction: {
            id: 'default',
          },
        },
      });

     
    }


   return (
     <View>
         <Button title="press it" onPress={() => handle()}/>
     </View>
   );
};  






export default App;
