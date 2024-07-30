// src/navigation/StackNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import TrendingDetails from '../screens/TrendingDetails'; // Ajuste o caminho conforme necessário
import TrendingDetails from '../app/trendingDetails/[id]';
// import YourHomeScreen from '../screens/YourHomeScreen'; // Ajuste o caminho conforme necessário
import { Home } from '../components/home';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="TrendingDetails"
        component={TrendingDetails}
        options={{ title: 'Trending Details' }}
      />
    </Stack.Navigator>
  );
}
