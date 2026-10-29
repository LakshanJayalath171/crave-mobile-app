import { Image } from "expo-image";
import { ShoppingCart } from "lucide-react-native";
import { View } from "react-native";
import AppText from "./AppText";
const Header = () => {
  return (
    <View>
      {/* heading */}
      <View className="flex-row items-center justify-between mt-2 mb-3">
        <View className="flex-row items-center justify-start gap-2">
          <Image
            source={require("../../assets/images/logo.svg")}
            contentFit="contain"
            style={{ width: 30, height: 30 }}
          />
          <AppText weight="bold" className="text-primary text-lg">
            Crave
          </AppText>
        </View>

        <View className="flex-row items-center justify-end gap-3">
          <View>
            <ShoppingCart size={24} className="text-orange-500" />
          </View>
          <View className="p-4 bg-primary rounded-full">
            <View className="w-3 h-3 bg-orange-500 rounded-full items-center justify-center">
              <AppText weight="bold" className="text-white text-xs">
                K
              </AppText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
