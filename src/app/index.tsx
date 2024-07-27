import { Text, Pressable, View, ScrollView } from "react-native";
import { Header } from '../components/header'
import { Banner } from "../components/banner";
import Constants from 'expo-constants'

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView
    style={{ flex: 1 }}
    className="bg-slate-900"
    showsHorizontalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />
      </View>
    </ScrollView>

  );
}
