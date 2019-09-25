import React from 'React';
import {View, Text, StyleSheet, Button} from 'react-native';


const numberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}
const styles = StyleSheet.create ({

  number:{
        width: '50%',
        flexDirection: 'row',
        textAlign: 'center',
        padding: 10,
        margin: 5,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'purple',
        fontSize: 40,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderRadius:10,
      },
      fullWith:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        marginBottom: 20
      },
});
export default numberContainer;