import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { RestaurantItem } from './horizontal';
import env from '../../services/env/env';
import BlinkingText from '../BlinkingText';

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFoods() {
      try {
        const response = await fetch(`${env()}restaurants`);
        const data = await response.json();
        setRestaurants(data.restaurants);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        setLoading(false);
      }
    }

    getFoods();
  }, []);

  if (loading) {
    return <BlinkingText  />;
  }

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem item={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
