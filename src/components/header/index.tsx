import { Ionicons, Feather } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

export function Header() {
  return (
    <View className='w-full flex flex-row items-center justify-between p-4 rounded-2xl bg-gray-900'>
      <Pressable 
        className='w-10 h-10 bg-slate-700 rounded-full flex justify-center items-center'
        onPress={() => console.log('Menu pressed')}
        accessibilityLabel="Menu"
        accessibilityHint="Abre o menu"
      >
        <Ionicons name='menu' size={20} color="#fefefe" />
      </Pressable>

      <View className='flex flex-col items-center justify-center'>
        <Text className='text-center text-sm text-slate-400'>Localização</Text>
        <View className='flex-row items-center justify-center gap-1'>
          <Feather name='map-pin' size={14} color='#FF0000'/>
          <Text className='text-lg font-bold text-slate-300'>Cidade nova (AM)</Text>
        </View>
      </View>

      <Pressable 
        className='w-10 h-10 bg-slate-700 rounded-full flex justify-center items-center'
        onPress={() => console.log('Notificação pressionada')}
        accessibilityLabel="Notificações"
        accessibilityHint="Abre a tela de notificações"
      >
        <Feather name='bell' size={20} color="#fefefe" />
      </Pressable>
    </View>
  );
}
