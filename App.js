import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import ScreenStart from './components/screenStartGame';


export default function App() {
  return (
    <View style={styles.container}>

    <View style={styles.headerWrapper}>
      <Header title='Guess a Number' />
    </View>

    <View style={styles.screenWrapper}>
    <ScreenStart />
    </View>

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
      flex: 1,
      backgroundColor:  '#fff',
      padding: 10,
      margin: 10,
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: 10,
      borderColor: 'gray', 
      borderWidth: 0.5,
    },
});
