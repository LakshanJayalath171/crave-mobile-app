import AppText from "@/components/AppText";
import { Image } from "expo-image";
import { router } from "expo-router";
import {
    ScrollView,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const sign_up = () => {
  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-white">
      <ScrollView className="flex-1 bg-white w-full h-full pb-">
        <View>
          <Image
            source={require("../../../assets/images/sign-up.png")}
            contentFit="cover"
            style={{
              width: "100%",
              height: 300,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}
          />
        </View>

        <View className="flex items-center justify-center mt-4">
          <AppText weight="bold" className="text-xl text-text">
            Create an account
          </AppText>
        </View>

        <View className="px-6 py-2">
          <AppText weight="bold">E-Mail</AppText>
          <TextInput
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-4 mt-1 border-orange-500"
          />
        </View>

        <View className="px-6 py-2">
          <AppText weight="bold">Password</AppText>
          <TextInput
            placeholder="Enter your password"
            className="w-full rounded-lg border border-gray-300 px-4 py-4 mt-1 border-orange-500"
            secureTextEntry
          />
        </View>

        <View className="px-6 py-2">
          <AppText weight="bold">Confirm Password</AppText>
          <TextInput
            placeholder="Enter your password"
            className="w-full rounded-lg border border-gray-300 px-4 py-4 mt-1 border-orange-500"
            secureTextEntry
          />

          <View className="mt-2">
            <TouchableOpacity className="bg-primary py-4 rounded-lg">
              <AppText weight="bold" className="text-center text-white">
                Create Account
              </AppText>
            </TouchableOpacity>
          </View>

          <AppText
            weight="regular"
            className="text-xs text-text-secondary mt-4 text-center "
          >
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </AppText>
        </View>

        <View>
          <AppText weight="bold" className="text-lg text-text text-center mt-4">
            Sign Up with
          </AppText>
          <View className="flex-row items-center justify-center gap-6 mt-6">
            <Image
              source={require("../../../assets/expo.icon/facebook.png")}
              style={{ width: 30, height: 30 }}
            />
            <Image
              source={require("../../../assets/expo.icon/google.png")}
              style={{ width: 30, height: 30 }}
            />
            <Image
              source={require("../../../assets/expo.icon/x.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </View>

        <View className="mt-3 flex-row items-center justify-center gap-1">
          <AppText weight="regular" className="text-xs text-text-secondary">
            I already have an account
          </AppText>
          <AppText
            onPress={() => router.push("/(auth)/sign-in")}
            weight="bold"
            className="text-xs text-primary "
          >
            Sign In
          </AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default sign_up;
