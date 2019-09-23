import React from 'React';
import {View, Text, StyleSheet} from 'react-native';
import Card from './card';
import globalStyling from './globalStyling';

const numberContainer = Props => {
    return(
    <View>
       <Card style={selectedNumber > 0 ? styles.CardSize2 : globalStyling.hide  }>
      <View style={styles.fullWith}> 
      <Text>{ `Your enter number is ` }</Text>
      <Text style={ selectedNumber > 0 ? styles.confirm : '' } >{ selectedNumber}</Text>
      </View>
       <Button title='start a Game'  color={globalStyling.btnConfirm}   onPress={ Props.startGame }/>
    </Card>
    </View>
    );  
}
const styles = StyleSheet.create ({
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
export default numberContainer;