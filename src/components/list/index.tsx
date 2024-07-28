import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import env from '../../services/env/env';
import { RestaurantItem } from './item';
import BlinkingText from '../BlinkingText';

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function RestaurantVerticalList() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getFoods() {
      try {

        const response = await fetch(`${env()}restaurants`);
        const data = await response.json();
        setRestaurants(data.restaurants);
      } catch(error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        setLoading(false);
      }
    }

    getFoods();
  },[])
  if(loading) {
    return <BlinkingText  />;
  }
  return (
    <View className='px-2 flex-1 w-full h-full mb-11 gap-4'>
      {/* <Text className='text-slate-300'>List</Text> */}
      {restaurants.map(item => ( 
        <RestaurantItem item={item} key={item.id}/>
      ))}
    </View>
  )
}