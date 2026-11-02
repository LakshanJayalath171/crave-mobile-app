import { Star } from "lucide-react-native";
import { Image, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

interface ProductCardProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  rating?: number; // Optional rating prop
}

const Product_card = ({
  _id,
  name,
  description,
  price,
  image_url,
}: ProductCardProps) => {
  return (
    <View className="w-60 mt-3 rounded-xl bg-white overflow-hidden">
      {/* Product Image */}
      <Image
        source={{ uri: image_url }}
        className="w-full h-36"
        resizeMode="contain"
      />

      {/* Product Details */}
      <View className="p-2">
        <AppText weight="bold" className="text-main text-md">
          {name}
        </AppText>

        <AppText
          weight="regular"
          className="text-secondary text-xs mt-1"
          numberOfLines={2}
        >
          {description}
        </AppText>

        {/* Rating */}
        <View className="flex-row items-center mt-2">
          <Star size={16} color="#FBBF24" fill="#FBBF24" />

          <AppText weight="regular" className="text-secondary text-xs ml-1">
            {"4.5"} {/* Replace with actual rating if available */}
          </AppText>
        </View>

        {/* Price and Add Button */}
        <View className="flex-row items-center justify-between mt-3">
          <AppText weight="bold" className="text-main text-md">
            {price}
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
