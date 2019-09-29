import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import globalStyling from './globalStyling';
import Card from './card';
import CustomButton from './CustomButton';

const GameOver = props => {
    return<Card style={styles.CardSize}>
        
     <View style={globalStyling.fullWith}>

     <View style={styles.col}>
        <Text  >The Game is Over!</Text>
        </View>

        <View style={styles.imagewrapper}>
        <Image 
        //this is for local images
       //resizeMode='center' source={require('../assets/success.png')} 
       source={{uri: 'https://cdn.dribbble.com/users/713882/screenshots/2680248/nestegg_4b.png'}} 
       style={styles.image}
       //for web images is need it height and width
       /> 
        </View>

        <Text style={styles.col}>Number of rounds: {props.roundNumber}</Text>
        <Text style={styles.col}>Number was: {props.userNumber}</Text>
        <Button title="Restart" onPress={props.restart} ></Button>
        <CustomButton >PEPE</CustomButton>
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
      col:{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          textAlign: 'center'
          
      },
      image:{
          flex: 1,
          flexDirection: 'row',
            width: '100%' ,
            height: '100%'
        },
        imagewrapper:{
            width: '100%',
            height: '60%',
        }
});
export default GameOver;