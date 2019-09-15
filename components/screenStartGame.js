import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const ScreenStart = Props => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
<View style={styles.wrapper}>

    <Text style={styles.screenText}>
    select a Number
    </Text>


    <View style={styles.formWrapper}>

    <View style={styles.inputWrapper}>
    <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    </View>

    <View style={styles.btnWrapper}>
    <Button title='Reset'  onPress={ ()=>{console.log('cancel');} }/>
    <Button title='Confirm' onPress={ ()=>{console.log('Confirm');} }/>
    </View>

    </View>


</View>
);  
};
const styles = StyleSheet.create({
  wrapper:{
    width: '100%',
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#f5f5f5'
  },
  fullWith:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
   
  },
  screenText:{
    color: '#6c757d',
    fontWeight: '400',
    textTransform: 'uppercase',
    padding: 10,
  },
  inputWrapper:{
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 10,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  input:{
    width: '60%',
    height: 40,
    borderColor: 'gray', 
    borderBottomWidth: 1,
    textAlign: 'center',
    alignContent: 'center',
    color: '#999fa3',

  },
  formWrapper:{
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  btnWrapper:{
    width: '50%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  }
});
export default ScreenStart;