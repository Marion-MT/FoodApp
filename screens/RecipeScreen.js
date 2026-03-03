import { StyleSheet, TouchableOpacity, ScrollView, Text, View, Image } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../reducers/favorites';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderItem from '../components/HeaderItem';
import Ingredient from '../components/Ingredient';

export default function RecipeScreen({ route, navigation }) {
  const dispatch = useDispatch();

  const { recipe } = route.params;
  const [serving, setServing] = useState(recipe.servingNb);

  const favorites = useSelector((state) => state.favorites.value);
  const isFavorite = favorites.some(e => e.name === recipe.name);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ name: recipe.name }));
    } else {
      dispatch(addFavorite({ name: recipe.name, amount: recipe.amount }));
    }
  };

  const handleIncrementServing = () => {
    setServing(prev => prev + 1);
  }

   const handleDecrementServing = () => {
    if(serving > 1){
      setServing(prev => prev - 1);
    }
  }

  const color = recipe.color;

  const ingredients = recipe.ingredients.map((e, i) => <Ingredient key={i} name={e.name} amount={e.amount} unit={e.unit} serving={serving}/>);

  return (
    <View style={styles.container}>

      <View style={[styles.arrowContainer, { backgroundColor: color }]}>
         <TouchableOpacity style={styles.previousButton} onPress={() => navigation.navigate('DrawerNavigator')}>
            <FontAwesome name={'arrow-left'} size={20} color={'#46494c'} />
          </TouchableOpacity>  
      </View>

      <View style={[styles.imageSection, { backgroundColor: color }]}>
        
        <Image source={recipe.image} style={styles.image}/>
      </View>

      <View style={{ backgroundColor: color }}>

        <View style={styles.descriptionSection}>

          <View style={styles.bookmarkContainer}>
            <TouchableOpacity style={styles.bookmarkButton} onPress={() => handleToggleFavorite()}>
                <FontAwesome name={isFavorite ? 'bookmark' : 'bookmark-o'} size={20} color={'white'} />
            </TouchableOpacity>
          </View>


          <View style={styles.recipeHeader}>
              <HeaderItem label={recipe.level} iconName={'tachometer'} color={color}/>
              <HeaderItem label={recipe.time} iconName={'clock-o'} color={color}/>
              <HeaderItem label={recipe.rating} iconName={'star-o'} color={color}/>
          </View>

          <View style={styles.recipeOverview}>
            <Text style={styles.recipeName}>{recipe.name}</Text>
            <Text style={styles.recipeDesc}>{recipe.longDesc}</Text>
          </View>

          <View style={styles.servingSection}>
            <View>
              <Text style={styles.boldText}>Ingredients</Text>
              <Text style={styles.normalText}>How many servings?</Text>
            </View>

            <View style={styles.servingSelector}>
              <TouchableOpacity style={styles.buttonLeft} onPress={() => handleDecrementServing()}>
                <Text style={styles.boldText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.buttonMiddle}>{serving}</Text>
               <TouchableOpacity style={styles.buttonRight} onPress={() => handleIncrementServing()}>
                <Text style={styles.boldText}>+</Text>
              </TouchableOpacity>
            </View>

          </View>
          <ScrollView
                  contentContainerStyle={styles.ingredientsSection}
                  showsVerticalScrollIndicator={false}
                >
            {ingredients}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageSection: {
    height: 220,
    width: '100%',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 120,
    paddingBottom: 50

  },
  arrowContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    padding: 20,
    paddingTop: 50,
    marginBottom: -20
  },
  previousButton: {
    width: 60,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: 'cover',
  },
  descriptionSection: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderTopRightRadius: 120,
    paddingHorizontal: 30,
    gap: 30,

  },
  bookmarkContainer: {
    width: '100%',
    display : 'flex',
    flexDirection : 'column',
    alignItems: 'flex-end',
    marginBottom: -20
  },
  bookmarkButton: {
    width: 60,
    height: 60,
    backgroundColor: '#655074',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  recipeHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10
  },
  recipeName: {
    fontFamily: 'serif',
    fontSize: 38,
    color: '#46494c'
  },
  recipeDesc: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#83898fff'
  },
  servingSection:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
   boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#46494c'
  }
  ,
  normalText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#83898fff'
  },
  servingSelector: {
    display: 'flex',
    flexDirection: 'row',
    width: 100
  },
  buttonLeft: {
    backgroundColor: '#eeeeeeff',
    width: 30,
    height : 40,
    borderBottomLeftRadius:20,
    borderTopLeftRadius:20,
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonMiddle: {
    backgroundColor: '#eeeeeeff',
    paddingVertical: 10,
    paddingHorinzontal: 20,
    width: 40,
    textAlign: 'center'
  },
   buttonRight: {
    backgroundColor: '#eeeeeeff',
    width: 30,
    height : 40,
    borderBottomRightRadius:20,
    borderTopRightRadius:20,
    display : 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ingredientsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }
});
