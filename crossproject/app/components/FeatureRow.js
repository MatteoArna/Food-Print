import { ScrollView, StyleSheet, Text, View } from "react-native";
import { HeartIcon } from "react-native-heroicons/outline";
import Recipe from "./RecipeCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { useSettings } from "../context/SettingsProvider";

const FeatureRow = ({ id, title, description, recipes }) => {
  const [color, setColor] = useState("transparent");
  var red = false;
  const setRed = () => { 
    if(red){
      setColor("transparent")
      red = false
    }else{
      setColor("red") 
      red = true
    }
  }

  const { settings } = useSettings();

  const filteredRecipes = recipes.filter(recipe => {
    for (let i = 0; i < recipe.foods.length; i++) {
      if (recipe.foods[i].nationality.name === settings.country) {
        return true;
      }
    }
    return false;
  });

  return (
    <View>
      <View style={{ marginTop: 4, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{title}</Text>
        <TouchableOpacity onPress={setRed}>
          <HeartIcon color="teal" fill={color} />
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 12, color: "#888", paddingHorizontal: 4 }}>
        <Text>{description}</Text>
      </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 4 }}
      >
        {filteredRecipes.map((recipe) => (
          <Recipe
            key={recipe.name}
            id={recipe._key}
            imgUrl={recipe.image.asset.url}
            title={recipe.name}
            raiting={4.5}
            genre={recipe.type.name}
            short_description={recipe.short_description}
            foods={recipe.foods}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
