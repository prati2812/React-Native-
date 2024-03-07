import React, { Component, useState } from 'react';
import { Text, View} from 'react-native';
import styles from '../styles/style';

class Student extends Component{
  render(){
    return(
      <View>
        <Text style={styles.t1}>Student Component</Text>
      </View>
    )
  }
}



export default Student;
