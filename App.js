import React, {useState} from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import ScreenStart from './components/screenStartGame';
import globalStyling from './components/globalStyling';
import GameScreen from './components/gameScreen';
import GameOver from './components/gameOver';

export default function App() {
const [userNumber, setUserNumber] = useState();
const [guessRounds, setGuessRound] = useState(0);

const restart= () =>{
  console.log('restart');
  setGuessRound(null);
  setUserNumber(null);
}

const gameOverHandler = numOfRound =>{
  setGuessRound(numOfRound);
}
const startGameHandle = (userNumberVar) =>{
  console.log('adddNumber'+userNumberVar);
  setUserNumber(userNumberVar);
}


let content =  <ScreenStart startGameHandle={startGameHandle}  restart={restart}/>;

if(userNumber && guessRounds <= 0 ){
  content = <GameScreen userChoise={userNumber} onGameOver={gameOverHandler} />;
}else if(guessRounds > 0){
  content = <GameOver roundNumber={guessRounds} userNumber={userNumber} restart={restart}/>;
}

  return (
    <View style={styles.container}>

    <View style={styles.headerWrapper}>
      <Header title='Guess a Number' />
    </View>

   { content }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyling.background,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'flex-start',
    flex: 1,
    margin: 10,
    marginTop: 50,
  },
  headerWrapper: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalStyling.primary,
    },
    screenWrapper:{
      width: '100%'
    }
});
