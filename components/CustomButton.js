import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from  'react-native';

const CustomButton = props =>{
return(<TouchableOpacity style={styles.button} onPress={props.click}>
    <View>
    <Text style={styles.btnColor}>{props.children}</Text>
  </View>
</TouchableOpacity>);
}

styles = StyleSheet.create({
  button: {
    width: '50%',
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'purple',
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    color: 'white'
  },btnColor:{
    color: 'white'
  }
});
export default CustomButton;
