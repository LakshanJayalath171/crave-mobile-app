import AppText from "@/components/AppText";
import BlinkingDot from "@/components/Blinking_dot";
import CartCard from "@/components/CartCard";
import Header from "@/components/Header";
import { useCartStore } from "@/hooks/useCartStore";
import { ChevronsDown, CircleCheck, Trash2 } from "lucide-react-native";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
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
              {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
            </AppText>
          </View>
          <View className="flex-row items-center gap-2">
            {totalItems > 0 && (
              <>
                <BlinkingDot color="orange" size={8} duration={800} />
                <AppText className="text-xs font-light text-text-secondary">
                  Active
                </AppText>
              </>
            )}
          </View>
        </View>

        {/* Cart items */}
        <View className="mt-4 flex flex-col gap-2">
          {items.length > 0 ? (
            items.map((item) => <CartCard key={item.product_id} item={item} />)
          ) : (
            <AppText className="py-8 text-center text-gray-500">
              Your cart is empty
            </AppText>
          )}
        </View>

        {/* add more */}
        {items.length > 0 && (
          <>
            <View className="mt-4 flex-row items-center justify-center gap-2">
              <AppText className="text-sm font-light text-text-secondary">
                Add more items
              </AppText>
              <ChevronsDown size={15} className="ml-2" color={"gray"} />
            </View>
            <TouchableOpacity
              onPress={clearCart}
              className="mt-4 flex-row items-center justify-center gap-2"
              accessibilityLabel="Clear cart"
            >
              <Trash2 size={16} color="red" />
              <AppText className="text-sm text-red-500">Clear cart</AppText>
            </TouchableOpacity>
          </>
        )}

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
              ${totalPrice.toFixed(2)}
            </AppText>
          </View>
        </View>

        {/* Checkout button */}
        <TouchableOpacity
          disabled={items.length === 0}
          className="mt-6 bg-primary py-3 rounded-lg items-center justify-center flex-row gap-2"
          style={{ opacity: items.length === 0 ? 0.5 : 1 }}
        >
          <CircleCheck size={20} color="white" className="mb-1" />
          <AppText weight="bold" className="text-white text-lg">
            Checkout
          </AppText>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
