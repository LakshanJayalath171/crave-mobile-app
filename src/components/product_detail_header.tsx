import { ChevronLeft, Heart, Share2 } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

const product_detail_header = () => {
  return (
    <View className="flex-row items-center justify-between px-4 py-1">
      <View className="flex-row items-center justify-start gap-3">
        <TouchableOpacity className="p-2 rounded-full bg-gray-200">
          <ChevronLeft size={24} color="black" />
        </TouchableOpacity>
        <AppText weight="bold" className="text-lg">
          Products Details
        </AppText>
      </View>
      <View>
        <View className="flex-row items-center justify-end gap-3">
          <TouchableOpacity className="p-2 rounded-full bg-gray-200">
            <Share2 size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 rounded-full bg-gray-200">
            <Heart size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default product_detail_header;
