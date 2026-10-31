import { Image } from "expo-image";
import { BellIcon, UtensilsCrossed } from "lucide-react-native";
import { View } from "react-native";
import AppText from "./AppText";

const Profile_header = () => {
  return (
    <View className="flex-row items-center justify-between py-3">
      <View className="flex-row items-center justify-center gap-3">
        <View className="p-2 bg-orange-500/30 rounded-lg ">
          <UtensilsCrossed size={25} color={"orange"} />
        </View>
        <AppText className="text-2xl text-black/70" weight="bold">
          Profile
        </AppText>
      </View>
      <View className="flex-row items-center justify-center gap-3">
        <BellIcon size={25} color={"orange"} />
        <Image
          source={require("../../assets/images/avatar.png")}
          style={{ width: 40, height: 40, borderRadius: 50 }}
          className="rounded-full"
        />
      </View>
    </View>
  );
};

export default Profile_header;
