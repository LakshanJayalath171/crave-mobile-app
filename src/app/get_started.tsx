import AppText from "@/components/AppText";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const GetStarted = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/started.png")}
        contentFit="cover"
        style={styles.image}
      />

      <LinearGradient
        colors={["transparent", "white"]}
        locations={[0, 1]}
        style={styles.gradient}
        pointerEvents="none"
      />

      <View className="absolute bottom-32 left-0 flex items-center justify-center w-full">
        <TouchableOpacity className="rounded-full bg-primary px-6 py-4">
          <AppText className="text-xl font-bold text-white" weight="bold">
            Get Started
          </AppText>
        </TouchableOpacity>

        <View className="mt-4">
          <AppText className="text-md" weight="bold">
            Sign In With
          </AppText>
        </View>

        <View className="flex-row items-center justify-between gap-8 mt-3">
          <Image
            source={require("../../assets/expo.icon/facebook.png")}
            contentFit="cover"
            style={{ width: 35, height: 35 }}
          />
          <Image
            source={require("../../assets/expo.icon/google.png")}
            contentFit="cover"
            style={{ width: 35, height: 35 }}
          />
          <Image
            source={require("../../assets/expo.icon/x.png")}
            contentFit="cover"
            style={{ width: 35, height: 35 }}
          />
        </View>
        <View className="flex-row items-start justify-center gap-2">
          <AppText
            className="mt-6 text-sm text-text-secondary text-center"
            weight="bold"
          >
            Don't have an account?
          </AppText>
          <AppText
            className="mt-6 text-sm text-center text-primary"
            weight="bold"
          >
            Sign Up
          </AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFill,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 500,
  },
});

export default GetStarted;
