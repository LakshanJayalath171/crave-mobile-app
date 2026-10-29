import AppText from "@/components/AppText";
import Header from "@/components/Header";
import Product_card from "@/components/Product_card";
import {
  ArrowDownWideNarrow,
  ListSortAscendingIcon,
  Search,
} from "lucide-react-native";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Explore = () => {
  const [isAll, setIsAll] = React.useState(true);
  return (
    <ScrollView className="flex-1 bg-white px-4">
      <Header />

      {/* search */}
      <View className="flex-1">
        <View className="flex-row items-center justify-between gap-2 bg-gray-100 rounded-full px-3 py-1">
          <View className="flex-row items-center justify-start gap-2">
            <Search size={20} />
            <TextInput placeholder="Search dishes/pizza/burgers" />
          </View>
          <TouchableOpacity>
            <ListSortAscendingIcon size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* category filter */}
      <View>
        <ScrollView
          horizontal
          contentContainerStyle={{ gap: 8 }}
          showsHorizontalScrollIndicator={false}
          className="flex-row  py-4"
        >
          <TouchableOpacity>
            <View className="bg-gray-100 px-4 py-2 rounded-full">
              <Text className="text-sm font-bold">🔥 All</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="bg-gray-100 px-4 py-2 rounded-full">
              <Text className="text-sm font-bold">🍕 Pizza</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="bg-gray-100 px-4 py-2 rounded-full">
              <Text className="text-sm font-bold">🍔 Burgers</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="bg-gray-100 px-4 py-2 rounded-full">
              <Text className="text-sm font-bold">🥗 Salads</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="bg-gray-100 px-4 py-2 rounded-full">
              <Text className="text-sm font-bold">🍣 Sushi</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* filter */}
      <View className="flex-row items-center justify-between ">
        <AppText className="text-lg font-bold">All</AppText>
        <View className="flex-row items-center gap-6">
          <TouchableOpacity className="flex-row items-center gap-1">
            <ListSortAscendingIcon size={16} color={"orange"} />
            <AppText className="text-sm font-bold text-primary">Filter</AppText>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center gap-1">
            <ArrowDownWideNarrow size={16} color={"orange"} />
            <AppText className="text-sm font-bold text-primary">Sort</AppText>
          </TouchableOpacity>
        </View>
      </View>

      {/* cards */}
      <View className="">
        <AppText className="text-lg font-bold mt-4 text-primary">Pizza</AppText>
        <ScrollView
          horizontal
          contentContainerStyle={{ gap: 8 }}
          showsHorizontalScrollIndicator={false}
          className="flex-row "
        >
          <Product_card />
          <Product_card />
          <Product_card />
        </ScrollView>
      </View>
      <View className="">
        <AppText className="text-lg font-bold mt-4 text-primary">
          Burgers
        </AppText>
        <ScrollView
          horizontal
          contentContainerStyle={{ gap: 8 }}
          showsHorizontalScrollIndicator={false}
          className="flex-row "
        >
          <Product_card />
          <Product_card />
          <Product_card />
        </ScrollView>
      </View>
      <View className="">
        <AppText className="text-lg font-bold mt-4 text-primary">
          Salads
        </AppText>
        <ScrollView
          horizontal
          contentContainerStyle={{ gap: 8 }}
          showsHorizontalScrollIndicator={false}
          className="flex-row "
        >
          <Product_card />
          <Product_card />
          <Product_card />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Explore;
