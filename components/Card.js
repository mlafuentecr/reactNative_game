import React from 'React';
import {View, Text, StyleSheet} from 'react-native';

const Card = Props => {
  return (
    <View style={{...styles.card, ...Props.style}}>
        {Props.children}
    </View>
    );  
    
};

const styles = StyleSheet.create({
card:{
  flex: 1,
  backgroundColor:  '#fff',
  padding: 10,
  margin: 10,
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: 10,
  borderColor: 'gray', 
  borderWidth: 0.5,
  alignItems: 'flex-start',

}
});
export default Card;