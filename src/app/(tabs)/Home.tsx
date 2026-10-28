import AppText from "@/components/AppText";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  return (
    <View className="flex-1 bg-[#FFF9F3] px-6 py-4">
      {/* Hero Container */}
      <View className="w-full h-56 rounded-2xl overflow-hidden relative">
        {/* Background Image */}
        <Image
          source={require("../../../assets/images/hero_img.png")}
          resizeMode="cover"
          className="absolute w-full h-full"
        />

        {/* Content Over Image */}
        <View className="flex-1  flex absolute left-1/3 top-0 items-center justify-center px-10 bg-black/60 rounded-br-2xl rounded-tr-2xl h-full">
          {/* upper crave special */}
          <View className="bg-orange-600/40 px-4 py-2 rounded-3xl">
            <Text className="text-orange-500  text-lg font-bold">
              CRAVE SPECIAL
            </Text>
          </View>

          {/* header */}
          <AppText weight="bold" className="text-white text-xl mt-4">
            Good Food🍔
          </AppText>
          <AppText weight="bold" className="text-primary text-xl">
            😀Good Mood
          </AppText>
          {/* button */}
          <TouchableOpacity className="bg-primary px-3 py-1 rounded-lg mt-4">
            <Text>Explore Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* categories section */}

      <View className="flex flex-row items-center justify-between">
        <AppText weight="bold" className="text-primary text-lg mt-4">
          Categories
        </AppText>
        <TouchableOpacity>
          <AppText weight="regular" className="text-main text-sm mt-4">
            See All
          </AppText>
        </TouchableOpacity>
      </View>
      <View className="mt-3">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="text-center items-center justify-center mr-4">
            <Image
              source={require("../../../assets/images/category01.png")}
              className="w-24 h-24 rounded-full"
            ></Image>
            <Text className="text-sm mt-2 text-center">Pizza</Text>
          </View>

          <View className="text-center items-center justify-center mr-4">
            <Image
              source={require("../../../assets/images/category01.png")}
              className="w-24 h-24 rounded-full"
            ></Image>
            <Text className="text-sm mt-2 text-center">Pizza</Text>
          </View>

          <View className="text-center items-center justify-center mr-4">
            <Image
              source={require("../../../assets/images/category01.png")}
              className="w-24 h-24 rounded-full"
            ></Image>
            <Text className="text-sm mt-2 text-center">Pizza</Text>
          </View>

          <View className="text-center items-center justify-center mr-4">
            <Image
              source={require("../../../assets/images/category01.png")}
              className="w-24 h-24 rounded-full"
            ></Image>
            <Text className="text-sm mt-2 text-center">Pizza</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
