import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Recipe from '../components/Recipe'
import { recipes } from '../data/recipes';

export default function MyRecipesScreen({navigation}) {

  const favorites = useSelector((state) => state.favorites.value);

  const favoriteRecipes = recipes.filter(recipe =>
    favorites.some(fav => fav.name === recipe.name)
  );

const recipeComponents = favoriteRecipes.map((recipe, i) => {
    const favoriteData = favorites.find(f => f.name === recipe.name);
    const recipeClone = { ...recipe, amount: favoriteData.amount };

    return <Recipe key={i} recipe={recipeClone} navigation={navigation} />;
  });

  return (
    <View style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.title}>The best ones...</Text>
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
