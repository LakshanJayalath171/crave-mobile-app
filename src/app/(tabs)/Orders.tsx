import AppText from "@/components/AppText";
import BlinkingDot from "@/components/Blinking_dot";
import Header from "@/components/Header";
import Ongoing_orders_card from "@/components/Large_category_card";
import Previous_orders_card from "@/components/Previous_orders_card";
import { useOrders } from "@/hooks/useOrders";
import { router } from "expo-router";
import { ChevronRightIcon } from "lucide-react-native";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Orders = () => {
  const { data: orders, isLoading, error } = useOrders();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <ScrollView className="flex-1 px-4">
        {/* headers */}
        <Header />

        {/* ongoing orders */}
        <View className="mt-4 flex-row items-center justify-between">
          <View>
            <AppText className="text-lg" weight="bold">
              Ongoing Orders
            </AppText>
          </View>
          <View className="flex-row items-center gap-2">
            <BlinkingDot />
            <AppText className="text-sm" weight="medium">
              1 Active
            </AppText>
          </View>
        </View>
        <Ongoing_orders_card />

        {/* previous orders */}
        <View className="mt-4">
          <View className="flex-row items-center justify-between">
            <AppText className="text-lg" weight="bold">
              Previous Orders
            </AppText>
            <View className="flex-row items-center gap-1">
              <AppText className="text-sm text-primary" weight="medium">
                See all
              </AppText>
              <ChevronRightIcon size={20} color={"orange"} />
            </View>
          </View>
          <View className="mt-2">
            {orders?.map((order) => (
              <TouchableOpacity
                onPress={() => router.push(`/order/${order._id}`)}
                key={order.id}
                className="mt-2"
              >
                <Previous_orders_card
                  _id={order._id}
                  total_price={order.total_price}
                  date={order.createdAt}
                  itemsCount={order.items.length}
                  status={order.status}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orders;
