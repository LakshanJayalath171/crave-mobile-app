import { Image } from "expo-image";
import { CircleCheck, RefreshCw } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

interface PreviousOrdersCardProps {
  _id: string;
  total_price: number;
  date: string;
  itemsCount: number;
  status: string;
}

const Previous_orders_card = ({
  _id,
  total_price,
  date,
  itemsCount,
  status,
}: PreviousOrdersCardProps) => {
  return (
    <View className=" flex-row items-center justify-start gap-3 mt-3">
      <View>
        <Image
          source={require("../../assets/images/item01.png")}
          style={{ width: 75, height: 75, borderRadius: 10 }}
        />
      </View>
      <View className="flex-1">
        <View className="flex-row items-center justify-between ">
          <AppText className="text-sm" weight="bold">
            # {_id}
          </AppText>
          <AppText className="text-sm text-primary" weight="medium">
            Rs.{total_price}
          </AppText>
        </View>
        <AppText className="text-xs text-gray-500" weight="medium">
          {date.slice(0, 10) + " At " + date.slice(11, 16)} · {itemsCount} items
        </AppText>
        <View className="flex-row items-center justify-between mt-2">
          <View className="flex-row items-center gap-1">
            <CircleCheck size={16} color={"green"} />
            <AppText className="text-sm text-green-500" weight="medium">
              {status}
            </AppText>
          </View>
          <TouchableOpacity className="flex-row items-center gap-1 bg bg-primary-soft px-2 py-1 rounded-lg">
            <RefreshCw size={16} color={"orange"} />
            <AppText className="text-sm text-primary" weight="medium">
              Reorder
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Previous_orders_card;
