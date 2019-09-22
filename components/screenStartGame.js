import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert, Keyboard} from 'react-native';
import Colors from './colors';
import Card from './card';


const ScreenStart = props => {
  //si no quiero usar { useState }  solo lo pongo asi
  const [enteredValue, setEnteredValue] = React.useState('');
  const [selectedNumber, setselectedNumber] = React.useState(0);
 const [currentGuest, setcurrentGuest] = React.useState(generatorRandom(1, 100, ));
  
   const resetNumber = () => {
     Alert.alert('Are your sure you want to reset', 'Click yes to reset', [{text:'Yes', style: "destructive", onPress: InputClear() }]);
    
    InputClear();
    console.log(' resetNumber '+selectedNumber); 
    setselectedNumber('');
   }


   function sendNumber() {
    setselectedNumber(enteredValue);
    console.log(' sendNumber '+enteredValue);
    InputClear();
   }

   
   function InputClear() {
    setEnteredValue('');
    console.log('clear2 '+selectedNumber);

   }

   const inputHandler =inputText => {
    setEnteredValue(inputText.replace(/[^1-9]/g, '' ));
   }

   const generatorRandom = (min , max , exclude) => {

     min = Math.ceil(min);
     max = Math.floor(max);
     const rndNum = Math.floor.(Math.random() * (max-min)) + min;
     
     if(rndNum === exclude){
      return  generatorRandom(min , max , exclude);
     } else{
       return rndNum:
     }
   }

   const startGame = () => {
     console.log('game start');
   }

  return (
  <View style={styles.fullWith}>

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
        <Button title='Reset'   color={Colors.btnCancel}    onPress={ resetNumber}/>
        </View>

        <View style={styles.btnAdd}>
        <Button title='Confirm'  color={Colors.btnConfirm}   onPress={ ()=>{    Keyboard.dismiss() } }/>
        </View>
        </View>

        </View>





 </Card>

    <Card style={selectedNumber > 0 ? styles.CardSize2 : styles.hide  }>
      <View style={styles.fullWith}> 
      <Text>{ `Your enter number is ` }</Text>
      <Text style={ selectedNumber > 0 ? styles.confirm : '' } >{ selectedNumber}</Text>
      </View>
       <Button title='start a Game'  color={Colors.btnConfirm}   onPress={ startGame }/>
    </Card>

  </View>
  );  
};
const styles = StyleSheet.create({

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
    confirm:{
      width: '80%',
      flexDirection: 'row',
      backgroundColor: Colors.backgroundDarker,
      textAlign: 'center',
      padding: 10,
      margin: 5,
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
      alignItems: 'center',
      flex: 1,
    },
    CardSize2:{
      maxHeight: '30%',
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      flex: 1,
    }
  
});
export default ScreenStart;