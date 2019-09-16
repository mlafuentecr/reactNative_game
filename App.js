import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ScreenStart from './components/ScreenStartGame';
import Card from './components/Card';
import Colors from './components/colors';

export default function App() {

  const addNumber = (num) =>{
   Console.log('adddNumber'+num);
  }

  return (
    <View style={styles.container}>

    <View style={styles.headerWrapper}>
      <Header title='Guess a Number' />
    </View>


    <Card style={styles.CardSize}>
    <ScreenStart addNumber={()=>{addNumber()}} />
    </Card>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
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
    backgroundColor: '#3c86d8',
    },
    screenWrapper:{
      width: '100%'
    },
    CardSize:{
      height: '50%',
      flexDirection: 'row',
    }
});
