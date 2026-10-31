import AppText from "@/components/AppText";
import BlinkingDot from "@/components/Blinking_dot";
import Header from "@/components/Header";
import Large_category_card from "@/components/Large_category_card";
import { View } from "react-native";

const Orders = () => {
  return (
    <View className="flex-1 px-4">
      <Header />

      <View className="mt-4 flex-row items-center justify-between">
        <View>
          <AppText className="text-lg" weight="bold">
            Ongoing Orders
          </AppText>
        </View>
        <View className="flex-row items-center gap-2">
          <BlinkingDot />
          <AppText className="text-sm" weight="medium">
            1 Active
          </AppText>
        </View>
      </View>
      <Large_category_card />
    </View>
  );
};

export default Orders;
