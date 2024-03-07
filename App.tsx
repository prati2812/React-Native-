import React, { useEffect, useState} from 'react';
import { Button, Text, TextInput, View , ToastAndroid} from 'react-native';
import style from './styles/style';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from './config/auth';



const App = () => {
 
   const [email , setEmail] = useState('');
   const [password , setPassword] = useState(''); 


   const login = async () => {
      let user = await createUserWithEmailAndPassword(auth , email , password);
      if(user){
          console.warn(user);
          
      }
   }

   

   return(
      <View style={{flex:1}}>
           <Text style={{margin:10 , textAlign:'center' , fontSize:20, fontWeight:'800', marginTop:40}}>
               Firebase Authentication
            </Text>

            <TextInput
               placeholder='Enter your email'
               value={email}
               onChangeText={(text) => setEmail(text)}
               style={style.item}
             />

            <TextInput
               placeholder='Enter your password'
               value={password}
               onChangeText={(text) => setPassword(text)}
               style={style.item}
             />

            <View style={{marginLeft:20, marginRight:20, marginTop:15}}>
                <Button title='Sign Up' onPress={() => login()}/>
            </View>    

           

         
      </View>
   )

}


export default App;
