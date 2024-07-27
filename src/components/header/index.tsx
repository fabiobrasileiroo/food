import {Ionicons, Feather }from '@expo/vector-icons'
import { Pressable, Text, View, } from 'react-native'
export function Header() {
  return (
      <View className=' w-full flex flex-row items-center justify-between'>
        <Pressable className='w-10 h-10 bg-slate-800 rounded-full flex justify-center items-center'>
          <Ionicons name='menu' size={20} color="#fefefe" /> 
        </Pressable>

        <View className='flex flex-col items-center justify-center '>
          <Text className='text-center text-sm text-slate-400'>Localização</Text>
          <View className='flex-row items-center justify-center gap-1'>
            <Feather name='map-pin' size={14} color='#FF0000'/>
            <Text className='text-lg font-bold text-slate-300'>Cidade nova (AM)</Text>
          </View>
        </View>

        <Pressable className='w-10 h-10 bg-slate-800 rounded-full flex justify-center items-center'>
          <Feather name='bell' size={20} color="#fefefe" /> 
        </Pressable>
      </View>
      )
}