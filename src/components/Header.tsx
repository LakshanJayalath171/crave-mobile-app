import { Image } from "expo-image";
import { ShoppingCart } from "lucide-react-native";
import { View } from "react-native";
import { useCartStore } from "@/hooks/useCartStore";
import AppText from "./AppText";

const Header = () => {
  const cartItemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.product_quantity, 0),
  );

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
          <View className="relative">
            <ShoppingCart size={24} className="text-orange-500" />
            {cartItemCount > 0 && (
              <View className="absolute -right-2 -top-2 min-w-4 h-4 rounded-full bg-primary items-center justify-center px-1">
                <AppText
                  weight="bold"
                  className="text-[9px] leading-3 text-white"
                >
                  {cartItemCount}
                </AppText>
              </View>
            )}
          </View>
          {/* profile image */}
          <View className="p-4 rounded-full">
            <View className="w-3 h-3 border-2 rounded-full items-center justify-center">
              <Image
                source={require("../../assets/images/avatar.png")}
                style={{ width: 30, height: 30, borderRadius: 50 }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
