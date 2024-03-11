import React, { useEffect, useState } from 'react';
import { View  , Text,  PermissionsAndroid, Platform} from 'react-native';
import Contact from 'react-native-contacts';


const App = () => {

   const [contacts, setContacts] = useState([]);

   useEffect(() => {
     fetchContacts();
   }, []);
 
   const fetchContacts = async () => {
     try {
       if (Platform.OS === 'android') {
         const granted = await PermissionsAndroid.request(
           PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
           {
             title: 'Contacts Permission',
             message: 'This app needs access to your contacts',
             buttonNeutral: 'Ask Me Later',
             buttonNegative: 'Cancel',
             buttonPositive: 'OK',
           }
         );
         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              getContactList(); 
         } else {
           console.log('Contacts permission denied');
         }
       } 
     } catch (error) {
       console.error('Error fetching contacts:', error);
     }
   };
 
   
   const getContactList = () => {
       Contact.getAll().then((contacts) => {
             setContacts(contacts);
             console.warn(contacts);
             
       })
       .catch((e) => {
           console.log(e);
           
       });
   }

 
   return (
     <View>
       <Text>Contact List:</Text>
       {contacts.map((contact, index) => (
         <Text key={index} style={{fontSize:20 , color:'black'}}>{contact?.phoneNumbers[0]?.number}</Text>
       ))}
     </View>
   );
};  






export default App;
