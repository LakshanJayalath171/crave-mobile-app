import AppText from "@/components/AppText";
import BlinkingDot from "@/components/Blinking_dot";
import CartCard from "@/components/CartCard";
import Header from "@/components/Header";
import { ChevronsDown, CircleCheck } from "lucide-react-native";
import { ScrollView, TouchableOpacity, View } from "react-native";

const Cart = () => {
  return (
    <ScrollView className="flex-1 bg-white px-4">
      {/* Cart Content */}
      <Header />

      {/* Cart header */}
      <View className="flex-row items-center justify-between mt-2">
        <View>
          <AppText className="text-lg font-bold" weight="bold">
            Your Cart
          </AppText>
          <AppText className="text-xs font-light text-text-secondary">
            3 items in your cart
          </AppText>
        </View>
        <View className="flex-row items-center gap-2">
          <BlinkingDot color="orange" size={8} duration={800} />
          <AppText className="text-xs font-light text-text-secondary">
            2 Active
          </AppText>
        </View>
      </View>

      {/* Cart items */}
      <View className="mt-4 flex flex-col gap-2">
        <CartCard />
        <CartCard />
        <CartCard />
      </View>

      {/* add more */}
      <View className="mt-4 flex-row items-center justify-center gap-2">
        <AppText className="text-sm font-light text-text-secondary">
          Add more items
        </AppText>
        <ChevronsDown size={15} className="ml-2" color={"gray"} />
      </View>

      {/* Total */}
      <View className="mt-6 flex-row items-center justify-between">
        <View>
          <AppText weight="bold" className="text-lg">
            Total
          </AppText>
          <AppText weight="regular" className="text-xs text-gray-500">
            Including taxes and fees
          </AppText>
        </View>
        <View>
          <AppText weight="bold" className="text-lg text-primary">
            $79.99
          </AppText>
        </View>
      </View>

      {/* Checkout button */}
      <TouchableOpacity className="mt-6 bg-primary py-3 rounded-lg items-center justify-center flex-row gap-2">
        <CircleCheck size={20} color="white" className="mb-1" />
        <AppText weight="bold" className="text-white text-lg">
          Checkout
        </AppText>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Cart;
