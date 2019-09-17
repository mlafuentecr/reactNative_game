import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import Colors from './colors';

const ScreenStart = props => {
  //si no quiero usar { useState }  solo lo pongo asi
  const [enteredValue, setEnteredValue] = React.useState('');

  function InputClear() {
    console.log('clear');
    setEnteredValue('');
   }

   function sendNumber() {
     //validate that is number
    console.log('sendNumber '+enteredValue);
    addPlaceHolder();
   }

   function addPlaceHolder() {
    console.log('addPlaceHolder');
    setEnteredValue('');
   }

   const inputHandler =inputText => {
     
//text => setEnteredValue(text)

    setEnteredValue(inputText.replace(/[^0-9]/g, '' ));
   }

  return (
<View style={styles.wrapper}>

    <Text style={styles.screenText}>
    select a Number
    </Text>


    <View style={styles.formWrapper}>

    <View style={styles.inputWrapper}>
    <TextInput
      style={styles.input}
      onFocus={()=>{InputClear();}}
      onEndEditing={ ()=>{sendNumber()}  } 
      onChangeText={inputHandler}
      keyboardType={'number-pad'}
      maxLength={2}
      autoCorrect={false}
      value={enteredValue}
    />
    </View>

    <View style={styles.btnWrapper}>

    <View style={styles.btnReset}>
    <Button title='Reset'   color={Colors.btnCancel}  onPress={ ()=>{console.log('cancel');} }/>
    </View>

    <View style={styles.btnAdd}>
    <Button title='Confirm'  color={Colors.btnConfirm}   onPress={ ()=>{sendNumber()} }/>
    </View>
    </View>

    
    </View>


</View>
);  
};
const styles = StyleSheet.create({
  wrapper:{
    width: '100%',
    flex: 1,
    paddingBottom: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: Colors.background
  },
  fullWith:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
   
  },
  screenText:{
    color: Colors.regularText,
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
    width: '20%',
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
    width: '70%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  btnReset:{
    width: '48%'
  },
    btnAdd:{
      width: '48%'
    }
  
});
export default ScreenStart;