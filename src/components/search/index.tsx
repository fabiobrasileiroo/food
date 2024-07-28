import { View, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

export function Search() {
  return (
    <View className='w-full flex-row border border-slate-500 h-14 rounded-full items-center gap-2 px-4'>
      <Feather name='search' size={24} color="#64748b">
        <TextInput className='w-full h-12 bg-slate-400 rounded-2xl px-4 text-slate-400 text-lg'
          placeholder='Procure usa comida ...'
        />
      </Feather>
    </View>
  )
}