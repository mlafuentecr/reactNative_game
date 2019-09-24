import React from 'React';
import {View, Text, StyleSheet, Button} from 'react-native';
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

    return(
    <View>
    

    <Card>

        <View style={globalStyling.fullWith}> 
        <Text> Opponent's Guess</Text>
        <NumberContainer  style={styles.numberContainer}>{currentGuest} </NumberContainer>
       
        <View style={styles.btnWrapper}>
        <Button title='Lower'    onPress={ () => {} }/>
        <Button title='Greater'  onPress={ () => {} }/>
        </View>
        
       
        </View>


  </Card>

    </View>
    );  
}
const styles = StyleSheet.create ({
    numberContainer:{   width: '100%',
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
});
export default GameScreen;