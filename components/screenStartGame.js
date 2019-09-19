import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import Colors from './colors';
import Card from './Card';


const ScreenStart = props => {
  //si no quiero usar { useState }  solo lo pongo asi
  const [enteredValue, setEnteredValue] = React.useState('');
  const [confirmed, setConfirmed] = React.useState('false');
  const [selectedNumber, setselectedNumber] = React.useState(0);

  
   const resetNumber = () => {
     Alert.alert('Are your sure you want to reset', 'Click yes to reset', [{text:'Yes', style: "destructive", onPress: setselectedNumber(0) }]);
    
    InputClear();
    console.log(confirmed+' resetNumber '+selectedNumber); 
   }

   function InputClear() {
    console.log('clear');
    setEnteredValue('');
   }


   function sendNumber() {
    setselectedNumber(enteredValue);
    console.log(confirmed+' sendNumber '+selectedNumber);
    InputClear();
   }

   const inputHandler =inputText => {
     setEnteredValue(inputText.replace(/[^1-9]/g, '' ));
   }

  return (
  <View style={styles.fullWith}>

<Card style={styles.CardSize}>
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
          <Button title='Reset'   color={Colors.btnCancel}    onPress={ resetNumber}/>
          </View>

          <View style={styles.btnAdd}>
          <Button title='Confirm'  color={Colors.btnConfirm}   onPress={ ()=>{sendNumber()} }/>
          </View>
        </View>

      </View>
 </Card>

    <Card style={styles.CardSize}>
      <View style={ selectedNumber > 0 ? styles.confirm : styles.hide  } > 
      <Text>{`Your enter number is `+ selectedNumber}</Text>
      </View>
    </Card>

  </View>
  );  
};
const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
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
    },
    confirm:{
      width: '80%',
      flexDirection: 'row',
      backgroundColor: Colors.backgroundDarker,
      textAlign: 'center',
      padding: 10,
      margin: 10,
      justifyContent: 'center'
    },
    hide:{
      display: 'none'
    },
    CardSize:{
      maxHeight: '40%',
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      textAlign: 'center',
    }
  
});
export default ScreenStart;