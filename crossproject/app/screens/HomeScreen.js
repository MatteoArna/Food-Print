import * as React from "react";
import { SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";

import ShoppingList from "../components/ShoppingList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";


export default function HomeScreen(){
  {/* Disable upper page description */}
  const navigation = useNavigation();
  React.useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView style={{flex:1}}>

      <Header 
        navigation={navigation}
      />

      <SearchBar />
      
      <ShoppingList />
      
    </SafeAreaView>

  );
};