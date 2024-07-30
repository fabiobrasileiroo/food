import { View, Text, Image, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import env from '../../services/env/env';

export default function TrendingDetails() {
  const { id } = useLocalSearchParams();
  const [foods, setFood] = useState<FoodProps | any >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFoodDetails() {
      try {
        const response = await fetch(`${env()}foods`);
        console.log(env()+"foods")
        const data = await response.json();
        console.log(data.foods)
        setFood(data.foods);
      } catch (error) {
        console.error('Error fetching food details:', error);
      } finally {
        setLoading(false);
      }
    }

    getFoodDetails();
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!foods) {
    return <Text>Food not found</Text>;
  }

  return (
    <View className='p-4 bg-slate-800'>
      <Image
        source={{ uri: foods.image }}
        className='w-full h-64 rounded-xl'
        style={{ borderRadius: 10 }}
      />
      <Text className='text-2xl font-bold mt-2'>{foods.name}</Text>
      <Text className='text-lg mt-2'>Price: R$ {foods.price}</Text>
      <Text className='text-lg mt-2'>Delivery: R$ {foods.delivery}</Text>
      <Text className='text-lg mt-2'>Time: {foods.time}</Text>
      <Text className='text-lg mt-2'>Rating: {foods.rating}</Text>
    </View>
  );
}

interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}
