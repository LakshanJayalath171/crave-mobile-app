import AppText from "@/components/AppText";
import Header from "@/components/Header";
import Product_card from "@/components/Product_card";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-[#FFF9F3] px-6 py-4">
      <Header />
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
      {/* scroll selector */}
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

      {/* popular section */}

      <View className="flex flex-row items-center justify-between">
        <View>
          <AppText weight="bold" className="text-primary text-lg mt-4">
            Popular
          </AppText>
          <AppText weight="regular" className="text-main text-sm">
            Our most popular dishes
          </AppText>
        </View>
        <View>
          <Text className="text-sms font-light">See All</Text>
        </View>
      </View>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10,
            gap: 10,
          }}
        >
          <Product_card />
          <Product_card />
          <Product_card />
          <Product_card />
        </ScrollView>
      </View>

      {/* offers */}
      <View className="py-6">
        <View className="relative min-h-[158px] w-full flex-row overflow-hidden rounded-2xl bg-[#3A2D28] px-5 py-5">
          <View className="flex-1 pr-3">
            <AppText weight="bold" className="text-primary text-xs">
              LIMITED-TIME OFFER
            </AppText>

            <AppText weight="bold" className="mt-2 text-white text-lg">
              Your Meal, Your Deal
            </AppText>
            <AppText weight="regular" className="text-white/80 text-sm">
              Save 20% on selected combos
            </AppText>

            <TouchableOpacity className="mt-3 flex-row items-center self-start rounded-lg bg-primary px-4 py-2">
              <AppText weight="bold" className="text-white text-sm">
                Explore Deals
              </AppText>
              <Text className="ml-2 text-white text-lg">→</Text>
            </TouchableOpacity>
          </View>

          <View className="relative w-[102px] items-center justify-center">
            <Image
              source={require("../../../assets/images/item01.png")}
              resizeMode="cover"
              className="h-24 w-24 rounded-2xl"
            />
            <View className="absolute bottom-2 left-0 rounded-full bg-discount px-3 py-1">
              <AppText weight="bold" className="text-white text-xs">
                20% OFF
              </AppText>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
