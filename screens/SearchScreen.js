import { StyleSheet, ScrollView, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Recipe from '../components/Recipe'
import { recipes } from '../data/recipes';

export default function SearchScreen({navigation}) {

  const recipeComponents = recipes.map((recipe, i) => <Recipe key={i} recipe={recipe} navigation={navigation}/>);

  return (
    <View style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.title}>What do you want to eat today?</Text>
        <Text style={styles.subtitle}>Our daily healthy meal plans</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.recipesContainer}
        showsVerticalScrollIndicator={false}
      >
        {recipeComponents}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  textSection: {
    display: 'flex',
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontFamily:'serif',
    fontSize: 24,
    fontWeight: 'bold',
    color: "#655074"
  },
  subtitle: {
    color: "lightgrey",
    fontWeight: 'bold',
  },
  recipesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 20,
    paddingTop : 40,
    paddingLeft: 5
    
  }
});
