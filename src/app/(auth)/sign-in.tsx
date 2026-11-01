import AppText from "@/components/AppText";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const sign_in = () => {
  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-white">
      <ScrollView className="flex-1 bg-white">
        <Image
          source={require("../../../assets/images/sign-up.png")}
          style={{
            width: "100%",
            height: 300,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        />
        <View className="px-6">
          <View className="flex items-center justify-center mt-4">
            <AppText weight="bold" className="text-xl text-text">
              Login Your Account
            </AppText>
          </View>
          <View className="py-2">
            <AppText weight="bold" className="text-md text-text">
              Sign In
            </AppText>
            <TextInput
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-4 mt-1 border-orange-500"
            />
          </View>

          <View className="py-2">
            <AppText weight="bold" className="text-md text-text">
              Password
            </AppText>
            <TextInput
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-4 mt-1 border-orange-500"
              secureTextEntry
            />
          </View>
          <View className="flex items-end justify-end px-4 ">
            <AppText className="text-xs text-text">Forgot Password?</AppText>
          </View>
          <View className="flex items-center justify-center mt-4 ">
            <AppText className="text-sm text-text text-center">
              By signing up, you agree to our Terms of Service and Privacy
              Policy.
            </AppText>
          </View>

          <View>
            <View className="mt-4">
              <TouchableOpacity className="bg-primary py-4 rounded-lg">
                <AppText weight="bold" className="text-center text-white">
                  Sign In
                </AppText>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-6">
            <AppText className="text text-center" weight="bold">
              Sign in with
            </AppText>
            <View className="flex-row items-center justify-center gap-8 mt-4">
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
            <AppText className="text-text-secondary font-xs " weight="regular">
              I haven't and account
            </AppText>
            <AppText
              onPress={() => router.push("/(auth)/sign-up")}
              weight="bold"
              className="text-primary"
            >
              Sign Up
            </AppText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default sign_in;
