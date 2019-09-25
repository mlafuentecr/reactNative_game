import React, { useRef, useEffect } from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import Card from './card';
import NumberContainer from './numberContainer';
import globalStyling from './globalStyling';

const generatorRandom = (min , max , exclude) => {

    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    
    if(rndNum === exclude){
     return  generatorRandom(min , max , exclude);
    } else{
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
  console.log(props.userChoise +' <number  currentGuest> ' + currentGuest+ ' currentLow>'+currentLow.current +'currentHigh'+currentHigh.current);

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
}
    return(
    <View style={globalStyling.fullWith}>
    

    <Card style={styles.CardSize}>

        <View style={globalStyling.fullWith}> 
        <Text> Opponent's Guess</Text>
        <NumberContainer  style={styles.numberContainer}>{currentGuest} </NumberContainer>
       
        <View style={styles.btnWrapper}>
        <Button title='Lower'    onPress={ () => { nexGuestHandler('lower') } }/>
        <Button title='Greater'  onPress={ () => { nexGuestHandler('greater') } }/>
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
        flex: 1,
      },
});
export default GameScreen;