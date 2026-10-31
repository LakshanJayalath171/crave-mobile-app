import AppText from "@/components/AppText";
import Profile_header from "@/components/Profile_header";
import { Image } from "expo-image";
import { ChevronRight, LogOut, Verified } from "lucide-react-native";
import { View } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1 px-4">
      {/* heading */}
      <Profile_header />
      {/* profile */}
      {/* profile image */}
      <View className="items-center justify-start mt-5">
        <Image
          source={require("../../../assets/images/avatar.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
          className="rounded-full"
        />
        <AppText className="text-2xl text-black/70 mt-3" weight="bold">
          John Doe
        </AppText>
        <AppText className="text-black/70 mt-1" weight="medium">
          john.doe@example.com
        </AppText>
        <View className="flex-row items-center justify-center gap-1">
          <AppText className="text-primary" weight={"bold"}>
            Edit profile
          </AppText>
          <ChevronRight size={20} color={"orange"} />
        </View>
      </View>

      {/* details header*/}
      <View className="mt-10 gap-3">
        <View className="flex-row items-center justify-between">
          <View>
            <AppText className="text-main text-lg" weight="bold">
              Personal Information
            </AppText>
            <AppText className="text-text-secondary text-xs" weight="regular">
              Manage your personal details
            </AppText>
          </View>
          <View className="flex-row items-center justify-center gap-1">
            <Verified size={20} color={"orange"} />
            <AppText className="text-primary text-xs" weight="bold">
              Verified
            </AppText>
          </View>
        </View>
      </View>

      {/* details */}
      <View>
        {/* name */}
        <View className="flex-row px-4 mt-4">
          <View className="flex-1">
            <AppText className="text-lg text-black/70" weight="bold">
              First Name
            </AppText>
            <AppText className="text-black/70" weight="regular">
              John
            </AppText>
          </View>
          <View className="flex-1">
            <AppText className="text-lg text-black/70" weight="bold">
              Last Name
            </AppText>
            <AppText className="text-black/70" weight="regular">
              Doe
            </AppText>
          </View>
        </View>

        {/* email */}
        <View className="">
          <AppText className="text-lg text-black/70 px-4 mt-4" weight="bold">
            Email
          </AppText>
          <AppText className="text-black/70 px-4" weight="regular">
            john.doe@example.com
          </AppText>
        </View>

        {/*   phone */}
        <View className="flex-row px-4 mt-4">
          <View className="flex-1">
            <AppText className="text-lg text-black/70" weight="bold">
              Phone Number
            </AppText>
            <AppText className="text-black/70" weight="regular">
              (123) 456-7890
            </AppText>
          </View>
          <View className="flex-1">
            <AppText className="text-lg text-black/70" weight="bold">
              Birth Date
            </AppText>
            <AppText className="text-black/70" weight="regular">
              January 1, 1990
            </AppText>
          </View>
        </View>
      </View>

      {/* logout */}
      <View className="mt-10">
        <View className="flex-row items-center justify-center">
          <LogOut size={20} color={"red"} />
          <AppText className="text-red-500 text-lg ml-2" weight="bold">
            Logout
          </AppText>
        </View>
        <AppText
          className="text-text-secondary text-xs mt-1 text-center"
          weight="regular"
        >
          Crave App v2.4.1 · Made with passion
        </AppText>
      </View>
    </View>
  );
};

export default Profile;
