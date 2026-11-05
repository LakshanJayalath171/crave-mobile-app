import { Image } from "expo-image";
import { CircleCheck } from "lucide-react-native";
import { View } from "react-native";
import AppText from "./AppText";
import BlinkingDot from "./Blinking_dot";

interface OngoingOrdersCardProps {
  _id: string;
  total_price: number;
  status: string;
}

const Ongoing_orders_card = ({
  _id,
  total_price,
  status,
}: OngoingOrdersCardProps) => {
  return (
    <View className="mt-3 rounded-2xl border border-border bg-white p-3">
      <View className="flex-row items-start gap-3">
        <Image
          source={require("../../assets/images/item01.png")}
          style={{ width: 80, height: 80, borderRadius: 14 }}
        />
        <View className="flex-1 gap-1">
          <View className="flex-row items-start justify-between gap-2">
            <AppText
              className="flex-1 text-base"
              weight="bold"
              numberOfLines={1}
            >
              # {_id}
            </AppText>
          </View>
          <View className="mt-1 flex-row items-center gap-1">
            {status === "pending" && <BlinkingDot color={"blue"} />}
            {status === "confirmed" && <BlinkingDot color={"orange"} />}
            {status === "preparing" && <BlinkingDot color={"yellow"} />}
            {status === "out-for-delivery" && <BlinkingDot color={"green"} />}

            <AppText className="text-xs text-text-secondary" weight="medium">
              {status}
            </AppText>
          </View>
          <View className="mt-2 flex-row items-center justify-between">
            <AppText className="text-sm text-text-secondary" weight="medium">
              Total Price
            </AppText>
            <AppText className="text-base text-primary" weight="bold">
              Rs.{total_price}
            </AppText>
          </View>
        </View>
      </View>

      <View className="mt-3 flex-row items-center gap-1 rounded-xl bg-primary-soft px-3 py-2">
        <CircleCheck size={16} color="#F97316" />
        <AppText className="text-sm text-primary" weight="bold">
          Mark As Completed
        </AppText>
      </View>
    </View>
  );
};

export default Ongoing_orders_card;
