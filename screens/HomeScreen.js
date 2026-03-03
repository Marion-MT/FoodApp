import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <Image source={require('../assets/images/home.jpg')} style={styles.image}/>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.title}>FoodApp</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigator')}>
            <Text style={styles.letsgo}>Let's go! <FontAwesome name={'arrow-right'} size={20} color={'white'} /></Text>
        </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#655074"
  },
  imageSection: {
    height: '80%',
    width: '100%',
    borderBottomLeftRadius: 200,
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
   bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 10

  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  }
  ,
  letsgo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white'
  }
});
