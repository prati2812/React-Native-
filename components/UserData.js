import { Text, View, TextInput, Button, FlatList, StyleSheet, ScrollView } from 'react-native';
import styles from '../styles/style';

export default UserData = (props) => {
    const item = props.item
    return (
      <View style={styles.item}>
        <Text style={styles.t1}>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
    );
  
  }
  