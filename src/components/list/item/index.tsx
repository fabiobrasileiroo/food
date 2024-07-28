import { View, Pressable, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsProps } from "..";
export function RestaurantItem({item}: {item:RestaurantsProps}) {
  return (
    <Pressable className="flex flex-row items-center justify-start gap-2">
      <Image 
      source={{uri: item.image}}
      className="w-20 h-20 rounded-full"/>
      <View>
        <Text className="text-slate-200 text-base leading-4 font-bold" numberOfLines={2}>{item.name}</Text>
        {/* <Text> {item}</Text> */}
        <View className="flex-row items-center gap-1">
          <Ionicons name="star" size={14} color="yellow" />
          <Text className="text-slate-300"> 4.5</Text>
        </View>
      </View>
    </Pressable>
  )
}