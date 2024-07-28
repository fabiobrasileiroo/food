import { View, Text, Pressable } from "react-native";

interface Props {
  name: string;
  size: "text-lg" | "text-md" | "text-2xl";
  label: string;
  action: () => void;
}

export function Section({ name, size, label, action }: Props) {
  return (
    <View className="w-full flex flex-row items-center justify-between px-4">
      <Text className={`text-slate-300 ${size} font-semibold my-4`}>
        {name}
      </Text>
      <Pressable
        onPress={() => {
          action();
        }}
        className="w-15 h-10 px-4 rounded-full flex justify-center items-center"
      >
        <Text className={`text-slate-300`}>{label}</Text>
      </Pressable>
    </View>
  );
}
