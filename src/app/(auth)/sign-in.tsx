import axiosInstance from "@/api/axiosInstance";
import AppText from "@/components/AppText";
import { Image } from "expo-image";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React from "react";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { useAuthStore } from "../../store/authStore";

const sign_in = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const setUser = useAuthStore((state) => state.setUser);
  const handleSignIn = async () => {
    try {
      if (!email || !password) {
        Toast.show({
          type: "error",
          text1: "Login Failed",
          text2: "Please enter both email and password.",
        });
        return;
      }

      const response = await axiosInstance.post("/auth/user/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        const token = response.data.token;
        await SecureStore.setItemAsync("token", token);
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
        setUser(response.data.user);

        Toast.show({
          type: "success",
          text1: "Login Successful",
          text2: "You have successfully logged in.",
        });

        router.push("/(tabs)/Home");
      }
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Login Failed",
        text2:
          err instanceof Error
            ? err.message
            : "An error occurred during login.",
      });
    }
  };

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
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-4 mt-1 border-orange-500"
            />
          </View>

          <View className="py-2">
            <AppText weight="bold" className="text-md text-text">
              Password
            </AppText>
            <TextInput
              value={password}
              onChangeText={(password) => setPassword(password)}
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
              <TouchableOpacity
                onPress={handleSignIn}
                className="bg-primary py-4 rounded-lg"
              >
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
              onPress={() => router.push("/(auth)/sign-in")}
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
