import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import Colors from './colors';

const ScreenStart = props => {
  const [valueText, setChangeText] = React.useState('Useless Placeholder');

  function InputClear() {
    console.log('clear');
    setChangeText('');
   }

   function sendNumber() {
    console.log('sendNumber '+valueText);
    addPlaceHolder();
   }

   function addPlaceHolder() {
    console.log('addPlaceHolder');
    setChangeText('Useless Placeholder');
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
      onChangeText={text => setChangeText(text)}
      keyboardType={'numeric'}
      value={valueText}
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