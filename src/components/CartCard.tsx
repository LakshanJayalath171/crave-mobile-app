import { Image } from "expo-image";
import { Trash } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

const CartCard = () => {
  return (
    <View className="flex-row items-center justify-start bg-white  rounded-lg shadow-md">
      <View>
        <Image
          source={require("../../assets/images/category01.png")}
          style={{ width: 80, height: 80, borderRadius: 8 }}
        />
      </View>
      <View className="px-4 py-1">
        <View className="flex-row items-center justify-between gap-3">
          <AppText weight="bold" className="text-lg">
            Classic Smash Burger
          </AppText>
          <Trash size={20} color="red" className="absolute right-0 top-0" />
        </View>

        <View>
          <AppText className="text-gray-500 text-xs">
            Extra Aged Cheddar · Signature Crave Sauce
          </AppText>
        </View>

        <View className="flex-row items-center justify-between mt-2 ">
          <View className="flex-row items-center justify-end gap-2">
            <AppText weight="bold" className="text-lg">
              $12.99
            </AppText>
            <View className="flex-row items-center justify-center">
              <TouchableOpacity className="bg-gray-200 px-2 py-1 rounded-l">
                <AppText className="text-gray-700">-</AppText>
              </TouchableOpacity>
              <View className="bg-gray-100 px-4 py-1">
                <AppText className="text-gray-700">1</AppText>
              </View>
              <TouchableOpacity className="bg-gray-200 px-2 py-1 rounded-r flex items-center">
                <AppText className="text-gray-700">+</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-end mt-2">
          <AppText weight="bold" className="text-lg text-primary">
            $79.99
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
