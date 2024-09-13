import { View, Text } from 'react-native'
import React from 'react'
import GroceryElement from './GroceryElement'
import { useTranslation } from 'react-i18next'
import { useFoods } from '../context/FoodProvider'
import { ScrollView } from 'react-native-gesture-handler'

const ShoppingList = () => {
  const { t } = useTranslation();
  const { foods } = useFoods();

  const uniqueFoods = foods.reduce((acc, currentFood) => {
    const existingFood = acc.find((food) => food.name === currentFood.name);
    if (!existingFood) {
      acc.push(currentFood);
    }
    return acc;
  }, []);

  return (
    <ScrollView>
      <View>
      <Text style={{paddingHorizontal: 4, paddingTop: 6, marginBottom: 3, fontWeight: 'bold', fontSize: 20}}>{t('groceryList')}</Text></View>
      {uniqueFoods.map((food, index) => {
  // Find the lowest price and ecoScore from groceryStore for this food
  const lowestScore = food.ecologicScores.reduce((acc, score) => {
    if (!acc || score.price < acc.price) {
      return score;
    }
    return acc;
  }, null);

  return (
    <GroceryElement
      key={index}
      name={food.name}
      image={food.image.asset.url}
      description={food.short_description}
      price={lowestScore ? lowestScore.price : null}
      ecoScore={lowestScore ? lowestScore.score : null}
      storeName={lowestScore ? lowestScore.groceryStore.name : null} 
      nationality={food.nationality}
    />
  );
})}

    </ScrollView>
  );
};

export default ShoppingList;
