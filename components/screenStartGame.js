import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert, Keyboard} from 'react-native';
import globalStyling from './globalStyling';
import NumberContainer from './numberContainer';
import Card from './card';



const ScreenStartGame = props => {
  //si no quiero usar { useState }  solo lo pongo asi
  const [enteredValue, setEnteredValue] = React.useState('');
  const [selectedNumber, setselectedNumber] = React.useState(0);
 
  
   const resetNumber = () => {
     Alert.alert('Are your sure you want to reset', 'Click yes to reset', [{text:'Yes', style: "destructive", onPress: restart }]);
   }
   const restart =()=>{
    props.restart;
    setselectedNumber(null);
   }

   function sendNumber() {
    
    setselectedNumber(Number(enteredValue));
    console.log(' sendNumber '+ typeof enteredValue);
    InputClear();
   }

   
   function InputClear() {
    setEnteredValue(null);
    console.log('clear2 '+selectedNumber);

   }

   const inputHandler = inputText => {
     const chosenNumber = parseInt(inputText);

     console.log('inputHandler '+ typeof chosenNumber);

     if(chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert('Not allow', 'Click continue', [{text:'Continue', style: "destructive" }]);
     }else{
      setEnteredValue(inputText);
     }
    
   }



  return (
  <View style={globalStyling.fullWith}>

<Card style={styles.CardSize}>

        <View style={styles.formWrapper}>

        <Text style={styles.screenText}>
        select a Number 
        </Text>


          <View style={styles.inputWrapper}>

          <TextInput
            style={styles.input}
            onFocus={()=>{InputClear();}}
            onEndEditing={ ()=>{ sendNumber() }  } 
            onChangeText={inputHandler}
            keyboardType={'number-pad'}
            maxLength={2}
            autoCorrect={false}
            value={enteredValue}
          />
          
        </View>

        <View style={styles.btnWrapper}>
          <View style={styles.btnReset}>
          <Button title='Reset'   color={globalStyling.btnCancel}    onPress={ resetNumber}/>
          </View>

          <View style={styles.btnAdd}>
          <Button title='Confirm'  color={globalStyling.btnConfirm}   onPress={ ()=>{    Keyboard.dismiss() } }/>
          </View>
        </View>

        </View>

 </Card>
 
 <Card style={selectedNumber > 0 ? styles.CardSize2 : globalStyling.hide  }>
    <View style={globalStyling.fullWith}> 
    <Text>{ `Your enter number is ` }</Text>
    <NumberContainer >{selectedNumber} </NumberContainer>
    <Button 
    title='start a Game'
    color={globalStyling.btnConfirm} 
    onPress={ () => {props.startGameClick(selectedNumber)} }
    />

    </View>
  </Card>

  </View>
  );  
};
const styles = StyleSheet.create({


  screenText:{
    color: globalStyling.regularText,
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
    flex: 1,
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
  
    CardSize:{
      maxHeight: '40%',
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      flex: 1,
    },
    CardSize2:{
      maxHeight: '45%',
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      flex: 1,
    },
    number:{
      width: '40%',
      flexDirection: 'row',
      textAlign: 'center',
      padding: 10,
      margin: 5,
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: 'purple',
      fontSize: 40,
    },
  
});
export default ScreenStartGame;