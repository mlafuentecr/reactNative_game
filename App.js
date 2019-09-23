import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import ScreenStart from './components/screenStartGame';
import globalStyling from './components/globalStyling';

export default function App() {

  const addNumber = (num) =>{
   Console.log('adddNumber'+num);
  }

  return (
    <View style={styles.container}>

    <View style={styles.headerWrapper}>
      <Header title='Guess a Number' />
    </View>

    <ScreenStart addNumber={()=>{addNumber()}} />

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
