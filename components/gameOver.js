import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import globalStyling from './globalStyling';
import Card from './card';

const GameOver = props => {
    return<Card style={styles.CardSize}>
        
        <View style={globalStyling.fullWith}>
        <Text>The Game is Over!</Text>
        <Text>Number of rounds: {props.roundNumber}</Text>
        <Text>Number was: {props.userNumber}</Text>
        <Button title="Restart" onPress={props.restart} ></Button>
    </View>
    
    </Card>
}
const styles = StyleSheet.create({
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
export default GameOver;