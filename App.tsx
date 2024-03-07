import React, { useEffect, useState} from 'react';
import { Button, Text, View} from 'react-native';
import style from './styles/style';
import MapView ,{PROVIDER_GOOGLE , Marker} from 'react-native-maps';


const App = () => {

   return(
      <View style={{flex:1}}>
          
           <MapView
             style={{flex:1}}
           provider={PROVIDER_GOOGLE} 
           region={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.015,
             longitudeDelta: 0.0121,
           }}
            >
              <Marker
             coordinate={{latitude: 37.78825, longitude: -122.4324}}/>
           </MapView>
           
      </View>
   )

}


export default App;
