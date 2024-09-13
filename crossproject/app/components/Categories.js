import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CategoryCard from '../components/CategoryCard';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const queryUrl = decodeURIComponent('https://vvusuian.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22food%22%5D%20%7B%0A%20%20name%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%0A%7D%0A%0A%0A');
    
    const fetchCategories = async () => {
      try {
        const response = await fetch(queryUrl.replace(/\s/g, ""));
        const data = await response.json();
        setCategories(data.result);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchCategories();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          imgUrl={category.imageUrl}
          //title={category.name}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});

export default Categories;