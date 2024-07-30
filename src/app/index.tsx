import { Text, Pressable, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import Constants from "expo-constants";

import { StatusBar } from "expo-status-bar";
import { Home } from "../components/home";
import { Link } from "expo-router";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <>
      <StatusBar style="light" backgroundColor="rgb(15 23 42)" />
      {/* <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}> */}
        <ScrollView
          style={{ flex: 1 }}
          className="bg-slate-900"
          showsHorizontalScrollIndicator={false}
        >
          <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
            <Header />
            <Home />
            <Link className="text-white" href={"/profile"}>
              Ir para tela Profile{" "}
            </Link>
          </View>
        </ScrollView>
      {/* </View> */}
    </>
  );
}
