import { useCartStore } from "@/hooks/useCartStore";
import { useRouter } from "expo-router";
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
  const addToCart = useCartStore((state) => state.addToCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const quantity =
    useCartStore(
      (state) =>
        state.items.find((item) => item.product_id === _id)?.product_quantity,
    ) ?? 0;

  const router = useRouter();

  return (
    <View className="w-60 mt-3 rounded-xl bg-white overflow-hidden">
      <TouchableOpacity onPress={() => router.push(`/product/${_id}`)}>
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
        </View>
      </TouchableOpacity>

      <View className="p-2 pt-0">
        <View className="flex-row items-center justify-between">
          <AppText weight="bold" className="text-main text-md">
            {price}
          </AppText>

          <View className="flex-row items-center justify-end gap-2">
            <AppText weight="regular" className="text-secondary text-xs">
              {quantity}
            </AppText>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => decreaseQuantity(_id)}
              disabled={quantity === 0}
              className="bg-primary w-8 h-8 rounded-full flex items-center justify-center"
              accessibilityLabel={`Decrease ${name} quantity`}
            >
              <AppText weight="bold" className="text-white text-lg mb-2">
                -
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                if (quantity > 0) {
                  increaseQuantity(_id);
                  return;
                }

                addToCart({
                  product_id: _id,
                  product_name: name,
                  product_image: image_url,
                  product_price: price,
                  product_quantity: 1,
                });
              }}
              className="bg-green-400 w-8 h-8 rounded-full flex items-center justify-center"
              accessibilityLabel={`Add ${name} to cart`}
            >
              <AppText weight="bold" className="text-white text-lg mb-2">
                +
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Product_card;
