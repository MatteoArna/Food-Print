import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { StarIcon } from 'react-native-heroicons/outline'
import { useFoods } from '../context/FoodProvider';

const Recipe = ({
    id,
    imgUrl,
    title,
    raiting,
    genre,
    foods,
}) => {
  const {food, setFoods} = useFoods();
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    if (!pressed) {
      setFoods(old => [...old, ...foods]);
      setPressed(true);
    }
  };

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={handlePress}
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{raiting}</Text> {genre}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Recipe;
