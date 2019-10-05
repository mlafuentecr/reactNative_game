import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = Props => {
return (

    <Text style={styles.headerTitle}>
      {Props.title} 
    </Text>
);  
}
const styles = StyleSheet.create({
  headerTitle: {
    width: '100%',
    textTransform: 'uppercase',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
});
export default Header;