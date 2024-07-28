import { useState, useEffect } from 'react'
import { FlatList } from 'react-native';
import { CardHorizontalFood } from './food'
import env from '../../services/env/env';
import BlinkingText from '../BlinkingText';


export interface FoodProps{
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getFoods(){
      try {

        const response = await fetch(`${env()}foods`)
        const data = await response.json()
        setFoods(data.foods);
      } catch(error) {
        console.error('Error fetching foods:', error);
      } finally {
        setLoading(false);
      }
    }

    getFoods();
  }, [])

  if(loading) {
    return <BlinkingText  />;
  }

 return (
   <FlatList
      data={foods}
      renderItem={ ({ item }) => <CardHorizontalFood food={item} /> }
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
      showsHorizontalScrollIndicator={false}
   />
  );
}