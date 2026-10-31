import { Image } from "expo-image";
import { View } from "react-native";
import AppText from "./AppText";

const Large_category_card = () => {
  return (
    <View className="flex-row items-start justify-start gap-2 mt-3 border border-orange-600 p-1 rounded-lg">
      <View>
        <Image
          source={require("../../assets/images/item01.png")}
          style={{ width: 75, height: 75, borderRadius: 10 }}
        />
      </View>
      <View>
        <AppText className="text-lg" weight="bold">
          Classic Double Smash Burger
        </AppText>
        <AppText className="text-xs text-text-secondary" weight="bold">
          Order #12345
        </AppText>
        <View className="flex-row items-center justify-between gap-2 mt-1">
          <AppText className="text-md text-primary" weight="bold">
            1 item
          </AppText>
          <AppText className="text-md text-primary" weight="bold">
            $50.00
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default Large_category_card;
