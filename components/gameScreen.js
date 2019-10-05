import React, { useRef, useEffect } from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import Card from './card';
import NumberContainer from './numberContainer';
import globalStyling from './globalStyling';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from './CustomButton';

const number =0;
const generatorRandom = (min , max , exclude) => {

    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    console.log(rndNum+'check '+exclude);


    if(rndNum === exclude){
      console.log('number '+number+1);
      number+1
     return  generatorRandom(min , max , exclude);
    } else{
      console.log('rndNum '+number+1);
      return rndNum;
    }
  }


  const GameScreen = props  => {
  const [currentGuest, setcurrentGuest] = React.useState(generatorRandom(1, 100, props.userChoise));
  const [rounds, setRounds] = React.useState(0);
  const {userChoise, onGameOver} = props;

  //after is render this funcion its call
  useEffect(() => {
    if(currentGuest === Number(props.userChoise)){
      props.onGameOver(rounds);
    }
  }, [currentGuest, userChoise, onGameOver ]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

const nexGuestHandler = direction =>{

      console.log(props.userChoise +' <number nexGuestHandler  currentGuest> ' + currentGuest+ 
      ' currentLow>'+currentLow.current +'currentHigh'+currentHigh.current);

      if((direction === 'lower' && currentGuest < props.userChoise) ||
        (direction === 'greater' && currentGuest > props.userChoise)
        ){
          console.log('wrong number');
          Alert.alert('Don\'t ', 'the number is wrong', [{text:'Sorry!', style: "cancel" }]);
        return;
      }

      if(direction === 'lower'){
        currentHigh.current = currentGuest;
      }else{
        currentLow.current = currentGuest;
      }

      const nextNumber = generatorRandom( currentLow.current, currentHigh.current, currentGuest );
      setcurrentGuest(nextNumber);
      setRounds(curRounds => curRounds+1);
      return;
}
    return(
    <View style={globalStyling.fullWith}>
    

    <Card style={styles.CardSize}>

        <View style={globalStyling.fullWith}> 
        <Text> Opponent's Guess</Text>

        <NumberContainer  style={styles.numberContainer}>{currentGuest} </NumberContainer>
       
        <View style={styles.btnWrapper}>
          <CustomButton click={ () => { nexGuestHandler('lower')} } > 
          <Ionicons  name="ios-remove-circle" size={32}/>
          </CustomButton>

          <CustomButton click={ () => { nexGuestHandler('Greater') } } > 
          <Ionicons  name="ios-add-circle" size={32}/>
          </CustomButton>
        </View>
        
       
        </View>

  </Card>

    </View>
    );  
}
const styles = StyleSheet.create ({
    numberContainer:{ 
    flexWrap: 'wrap',
    flexDirection: 'row', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderRadius:10,
},
    btnWrapper:{
        width: '70%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
      },
      CardSize:{
        maxHeight: '40%',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
      },
});
export default GameScreen;