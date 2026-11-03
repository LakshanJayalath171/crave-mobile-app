import AppText from "@/components/AppText";
import Productdetail_header from "@/components/product_detail_header";
import { useCartStore } from "@/hooks/useCartStore";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { CircleOff, Clock, Heart, StarCheck } from "lucide-react-native";
import { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axiosInstance from "../../api/axiosInstance";

interface Product {
  _id: string;
  name: string;
  description?: string;
  category?: string;
  image_url: string;
  price: number;
}

const page = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { id } = useLocalSearchParams();
  const productId = Array.isArray(id) ? id[0] : id;
  const cartQuantity = useCartStore(
    (state) =>
      state.items.find((item) => item.product_id === productId)
        ?.product_quantity,
  );
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const quantity = cartQuantity ?? 0;

  const fetchProduct = async (productId: string) => {
    try {
      const response = await axiosInstance.get(`/user/products/${productId}`);
      setProductDetails(response.data.product);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const calculateTotalPrice = (price: number, quantity: number) => {
    setTotalPrice(price * quantity);
  };

  useEffect(() => {
    if (productId) {
      fetchProduct(productId);
    }
  }, [productId]);

  useEffect(() => {
    if (productDetails) {
      calculateTotalPrice(productDetails.price, quantity);
    }
  }, [productDetails, quantity]);

  return (
    <SafeAreaView className="flex-1 bg-[#FFF9F3]" edges={["top", "bottom"]}>
      <Productdetail_header />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <View className="h-80 w-full items-center justify-center px-6">
          <Image
            source={{ uri: productDetails?.image_url }}
            contentFit="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View className="px-4 pt-2 flex-row items-center justify-between">
          <View>
            <AppText className="text-sm text-primary" weight="bold">
              Crave Kitchen • {productDetails?.category}
            </AppText>
            <AppText className="text-2xl" weight="bold">
              {productDetails?.name}
            </AppText>
          </View>

          <View className="mt-2 flex-row items-center justify-between mr-2">
            <View>
              <Heart size={24} color="black" />
            </View>
          </View>
        </View>

        <View className="px-4 py-3 flex-row items-center justify-start gap-1">
          <AppText className="text-2xl text-primary" weight="bold">
            Rs.
            {productDetails?.price ? productDetails.price.toFixed(2) : "0.00"}
          </AppText>
          <AppText className="text-sm text-text-secondary" weight="bold">
            /portion
          </AppText>
        </View>

        <View className="flex-row items-center justify-between px-4 pt-1">
          {/* Rating */}
          <View className="flex-row items-center justify-start gap-2">
            <StarCheck size={18} color="gold" />
            <View className="flex-row items-center justify-start gap-1">
              <AppText className="text-sm" weight="bold">
                4.7
              </AppText>
              <AppText className="text-sm text-text-secondary" weight="bold">
                (120)
              </AppText>
            </View>
          </View>
          {/* availability */}
          <View className="flex-row items-center justify-start gap-2">
            <CircleOff size={18} color="red" />
            <View className="flex-row items-center justify-start gap-1">
              <AppText className="text-sm" weight="bold">
                Not Available
              </AppText>
            </View>
          </View>

          {/* time */}
          <View className="flex-row items-center justify-start gap-1">
            <Clock size={18} color="black" />
            <AppText className="text-sm" weight="bold">
              30-40 min
            </AppText>
          </View>
        </View>

        {/* description */}
        <View className="px-4 py-3">
          <AppText className="text-lg text-main my-1" weight="bold">
            Description
          </AppText>
          <AppText className="text-sm text-text-secondary" weight="bold">
            {productDetails?.description || "N/A"}
          </AppText>
        </View>
      </ScrollView>

      <View className="flex-row items-center justify-between border-t border-gray-200 bg-[#FFF9F3] px-4 py-3">
        <View>
          <AppText className="text-sm text-text-secondary" weight="bold">
            Total Price
          </AppText>
          <AppText className="text-2xl text-primary" weight="bold">
            {totalPrice > 0 ? `Rs. ${totalPrice.toFixed(2)}` : "Rs. 0.00"}
          </AppText>
        </View>

        {/* add cart controllers  */}
        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            onPress={() => productId && decreaseQuantity(productId)}
            disabled={!productId || quantity === 0}
            className="h-12 w-12 items-center justify-center rounded-full bg-primary"
            accessibilityLabel="Decrease quantity"
          >
            <AppText className="text-xl leading-6 text-white" weight="bold">
              -
            </AppText>
          </TouchableOpacity>

          <View className="items-center">
            <AppText className="text-sm text-text-secondary" weight="bold">
              Quantity
            </AppText>
            <AppText className="text-2xl text-primary" weight="bold">
              x {quantity}
            </AppText>
          </View>

          <TouchableOpacity
            onPress={() => {
              if (!productDetails || !productId) {
                return;
              }

              if (quantity > 0) {
                increaseQuantity(productId);
                return;
              }

              addToCart({
                product_id: productDetails._id || productId,
                product_name: productDetails.name,
                product_image: productDetails.image_url,
                product_price: productDetails.price,
                product_quantity: 1,
              });
            }}
            className="h-12 w-12 items-center justify-center rounded-full bg-green-500"
            accessibilityLabel="Increase quantity"
          >
            <AppText className="text-xl leading-6 text-white" weight="bold">
              +
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default page;
