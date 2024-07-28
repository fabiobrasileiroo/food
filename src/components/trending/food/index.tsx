import { View, Pressable, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { FoodProps } from '..'

export function CardHorizontalFood({ food }: { food: FoodProps }) {
 return (
   <Pressable className='flex flex-col rounded-xl relative'>
    <Image
      source={{ uri: food.image }}
      className="w-44 h-36 rounded-xl"
    />
    
    <View className='flex flex-row bg-slate-900/85 gap-1 rounded-bl-lg absolute right-0 px-2 py-1 items-center justify-center'>
      <Ionicons name="star" size={14} color="#ca8a04"/>
        <Text className='text-slate-100 text-sm'>{food.rating}</Text>
    </View>

    <View className='flex flex-row bg-slate-900/85 py-1 px-2 rounded-tl-xl  justify-end absolute bottom-11 right-0'>
      <Text className='font-medium  text-slate-100'> <Text className='text-green-400'>R$</Text> {food.price}</Text>
    </View>

    <View className='flex gap-2 flex-row'>
      <Text className='text-slate-300 mt-1'>{food.name}</Text>
    </View>
    <Text className='text-slate-500 text-sm'>{food.time} - R$ {food.delivery}</Text>
   </Pressable>
  );
}