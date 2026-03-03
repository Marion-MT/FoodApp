import { StyleSheet, Text, View } from 'react-native';

export default function Ingredient({ name, amount, unit, serving }) {
 
  return (
    <View style={styles.container}>        
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{amount * serving} {unit}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
   
  } ,
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#83898fff'
  }
});
