import '../styles/global.css'
import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  //<Slot/>
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: 'rgb(17 24 39)',
      },
      headerTintColor: '#fefefe',
      animation: 'ios',
      gestureDirection: 'horizontal',
      gestureEnabled: true,
      
      // header(props) {
      //   return <Header {...props} />
      // },
      // headerBlurEffect: 'prominent',
      // freezeOnBlur: true,
      // statusBarTranslucent: true
    }}>
      <Stack.Screen name="index" options={{title: "Home"}} />
      <Stack.Screen name="profile" options={{title: "Profile"}} />
      <Stack.Screen name="trendingDetails/[id]" options={{title: "Trending Details"}}  />
    </Stack>
  )
}

