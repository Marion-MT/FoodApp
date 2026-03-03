import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

export default function Recipe({ recipe, navigation }) {

  const color = recipe.color;
 
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Recipe', { recipe })} style={[styles.container, { backgroundColor: color }]}>
        <Image source={recipe.image} style={styles.image}/>
        <View style={styles.bottomSection}>
            <Text style={styles.recipeName}>{recipe.name}</Text>
            <Text style={styles.recipeDescription}>{recipe.desc}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#655074",
    width: 170,
    height: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 20,
    paddingTop: 20
  },
  image: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
  },
   bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10

  },
  recipeName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#655074',
    textAlign:'right'
  }
  ,
  recipeDescription: {
    fontSize: 12,
    color: '#655074',
    textAlign:'right'
  }
});
