import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function HeaderItem({ label, iconName, color }) {
 
  return (
    <View style={styles.container}>        
        <FontAwesome name={iconName} size={20} color={color} />
        <Text style={styles.headerLabels}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
   
  },
  headerLabels: {
    fontWeight: 'bold',
    color: '#46494c'
  }
});
