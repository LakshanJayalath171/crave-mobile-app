import { Star } from "lucide-react-native";
import { Image, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

const Product_card = () => {
  return (
    <View className="w-60 mt-3 rounded-xl bg-white overflow-hidden">
      {/* Product Image */}
      <Image
        source={require("../../assets/images/item01.png")}
        className="w-full h-24"
        resizeMode="cover"
      />

      {/* Product Details */}
      <View className="p-2">
        <AppText weight="bold" className="text-main text-md">
          Pizza Margherita
        </AppText>

        <AppText
          weight="regular"
          className="text-secondary text-xs mt-1"
          numberOfLines={2}
        >
          Pizza Margherita is a classic Italian pizza made with tomato,
          mozzarella, and basil.
        </AppText>

        {/* Rating */}
        <View className="flex-row items-center mt-2">
          <Star size={16} color="#FBBF24" fill="#FBBF24" />

          <AppText weight="regular" className="text-secondary text-xs ml-1">
            4.5
          </AppText>
        </View>

        {/* Price and Add Button */}
        <View className="flex-row items-center justify-between mt-3">
          <AppText weight="bold" className="text-main text-md">
            $12.99
          </AppText>

          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-primary w-8 h-8 rounded-full flex items-center justify-center"
          >
            <AppText weight="bold" className="text-white text-lg mb-2">
              +
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Product_card;
