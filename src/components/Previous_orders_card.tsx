import { Image } from "expo-image";
import { CircleCheck, RefreshCw } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

const Previous_orders_card = () => {
  return (
    <View className=" flex-row items-center justify-start gap-3 mt-3">
      <View>
        <Image
          source={require("../../assets/images/item01.png")}
          style={{ width: 75, height: 75, borderRadius: 10 }}
        />
      </View>
      <View className="flex-1">
        <View className="flex-row items-center justify-between ">
          <AppText className="text-lg" weight="bold">
            Chicken Burger
          </AppText>
          <AppText className="text-lg text-primary" weight="medium">
            $16.48
          </AppText>
        </View>
        <AppText className="text-xs text-gray-500" weight="medium">
          Oct 27, 2026 · 2 items
        </AppText>
        <View className="flex-row items-center justify-between mt-2">
          <View className="flex-row items-center gap-1">
            <CircleCheck size={16} color={"green"} />
            <AppText className="text-sm text-green-500" weight="medium">
              Completed
            </AppText>
          </View>
          <TouchableOpacity className="flex-row items-center gap-1 bg bg-primary-soft px-2 py-1 rounded-lg">
            <RefreshCw size={16} color={"orange"} />
            <AppText className="text-sm text-primary" weight="medium">
              Reorder
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Previous_orders_card;
