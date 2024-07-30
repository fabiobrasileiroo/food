import { Text, Pressable, View, ScrollView } from "react-native";
import { Header } from "../header";
import { Banner } from "../banner";
import { Search } from "../search";
import { Section } from "../section";
import { TrendingFoods } from "../trending";
import { Restaurants } from "../restaurants";
import { RestaurantVerticalList } from "../list";
// import Constants from "expo-constants";

// const statusBarHeight = Constants.statusBarHeight;

export function Home() {
  return (
    <>
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
    </>
  )
}