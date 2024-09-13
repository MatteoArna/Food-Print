import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, ScrollView } from 'react-native'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeatureRow';
import {useNavigation} from "@react-navigation/native";
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const GetInspired = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const fetchCategories = async () => {
    const queryUrl = decodeURIComponent('https://vvusuian.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22category%22%5D%7Bname%2C%20description%7D%0A');

    try {
      const response = await fetch(queryUrl.replace(/\s/g, ""));
      const categoriesData = await response.json();
      //console.log('Categories data:', categoriesData); 
      setCategories(categoriesData.result);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRecipes = async () => {
    // list of all foods for query nationality and ecologic score the lowest one
    const queryUrl = decodeURIComponent('https://vvusuian.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22recipe%22%5D%20%7B%0A%20%20%20%20name%2C%0A%20%20%20%20type%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%7D%2C%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20%20%20asset%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20foods%5B%5D%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20name%2C%0A%20%20%20%20%20%20%20%20short_description%2C%0A%20%20%20%20%20%20%20%20image%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20asset%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%0A%20%20%20%20%20%20%20%20nationality%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%7D%2C%0A%0A%20%20%20%20%20%20%20%20ecologicScores%5B%5D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20groceryStore%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20score%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20price%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%7D');
  
    try {
      const response = await fetch(queryUrl.replace(/\s/g, ""));
      const recipesData = await response.json();
      //console.log('Recipes data:', recipesData);
      // Loop through the recipes and add a foods property to each recipe object
      const recipesWithFoods = recipesData.result.map(recipe => {
        const foods = recipe.foods.map(food => food);
        console.log(recipe)
        return {
          ...recipe,
          foods: foods
        }
      });
      setRecipes(recipesWithFoods);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    fetchCategories();
    fetchRecipes();
  }, []);

  return (
    <SafeAreaView  className="pb-5 flex-1">
      {/* Header */}
      <Header />
      {/*Search*/}
      <SearchBar />
      {/*Body*/}
      <ScrollView className="bg-gray-100" 
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/*Categories*/}
        <Categories />
        {/*Featured*/}
        {categories.map((category) => (
          <FeaturedRow
            key={category.name}
            title={category.name}
            description={category.description}
            recipes={recipes.filter(recipe => recipe.type.name === category.name)}
            
          />
        ))}
       </ScrollView>
    </SafeAreaView>
  );
};

export default GetInspired;