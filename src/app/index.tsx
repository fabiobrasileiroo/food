import { Text, Pressable, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import Constants from "expo-constants";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";
import { StatusBar } from "expo-status-bar";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <>
      <StatusBar style="light" backgroundColor="rgb(15 23 42)" />
      <ScrollView
        style={{ flex: 1 }}
        className="bg-slate-900"
        showsHorizontalScrollIndicator={false}
      >
        <View
          className="w-full px-4"
          style={{ marginTop: statusBarHeight + 8 }}
        >
          <Header />

          <Banner />

          <Search />

          <Section
            name="Comidas em alta"
            size="text-2xl"
            label="Veja mais"
            action={() => {
              console.log("CLICOU EM COMIDAS EM ALTA sabia mais");
            }}
          />
          <TrendingFoods />

          <Section
            name="Famosos no DevFood"
            size="text-lg"
            label="Veja todos"
            action={() => {
              console.log("CLICOU EM veja todos famosos");
            }}
          />
          <Restaurants />

          <Section
            name="Restaurantes "
            size="text-lg"
            label="Veja todos"
            action={() => {
              console.log("CLICOU EM veja todos restaurante");
            }}
          />
          <RestaurantVerticalList />
        </View>
      </ScrollView>
    </>
  );
}
