import { useCartStore, type CartItem } from "@/hooks/useCartStore";
import { Image } from "expo-image";
import { Trash } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

interface CartCardProps {
  item: CartItem;
}

const CartCard = ({ item }: CartCardProps) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <View className="flex-row items-center justify-start bg-white  rounded-lg shadow-md">
      <View>
        <Image
          source={{ uri: item.product_image }}
          style={{ width: 80, height: 80, borderRadius: 8 }}
          contentFit="contain"
        />
      </View>
      <View className="px-4 py-1">
        <View className="flex-row items-center justify-between gap-3">
          <AppText weight="bold" className="text-lg">
            {item.product_name}
          </AppText>
          <TouchableOpacity
            onPress={() => removeFromCart(item.product_id)}
            accessibilityLabel={`Remove ${item.product_name} from cart`}
          >
            <Trash size={20} color="red" />
          </TouchableOpacity>
        </View>

        <View>
          <AppText className="text-gray-500 text-xs" numberOfLines={2}>
            {item.product_name}
          </AppText>
        </View>

        <View className="flex-row items-center justify-between mt-2 ">
          <View className="flex-row items-center justify-end gap-2">
            <AppText weight="bold" className="text-lg">
              ${item.product_price.toFixed(2)}
            </AppText>
            <View className="flex-row items-center justify-center">
              <TouchableOpacity
                onPress={() => decreaseQuantity(item.product_id)}
                className="bg-gray-200 px-2 py-1 rounded-l"
                accessibilityLabel={`Decrease ${item.product_name} quantity`}
              >
                <AppText className="text-gray-700">-</AppText>
              </TouchableOpacity>
              <View className="bg-gray-100 px-4 py-1">
                <AppText className="text-gray-700">
                  {item.product_quantity}
                </AppText>
              </View>
              <TouchableOpacity
                onPress={() => increaseQuantity(item.product_id)}
                className="bg-gray-200 px-2 py-1 rounded-r flex items-center"
                accessibilityLabel={`Increase ${item.product_name} quantity`}
              >
                <AppText className="text-gray-700">+</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-end mt-2">
          <AppText weight="bold" className="text-lg text-primary">
            ${(item.product_price * item.product_quantity).toFixed(2)}
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
