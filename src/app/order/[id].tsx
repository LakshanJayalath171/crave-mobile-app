import axiosInstance from "@/api/axiosInstance";
import AppText from "@/components/AppText";
import { router, useLocalSearchParams } from "expo-router";
import {
  ArrowLeft,
  Check,
  CircleCheck,
  CircleHelp,
  MapPin,
  MessageSquareText,
  MoreHorizontal,
  PackageCheck,
  RotateCcw,
  Share2,
  Tag,
  UserRound,
} from "lucide-react-native";
import { useEffect, useState, type ReactNode } from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const colors = {
  accent: "#AD3F08",
  orange: "#FF7112",
  background: "#FFF9F6",
  blush: "#FFF0EB",
  border: "#F4DCD3",
  muted: "#6A5148",
  text: "#160E0B",
  white: "#FFFFFF",
};

const items = [
  {
    name: "Classic Smash Burger",
    description: "Extra aged cheddar, Brioche bun",
    price: "$25.60",
    quantity: "2x · $12.80 ea",
    image: require("../../../assets/images/item01.png"),
  },
  {
    name: "Loaded Golden Waffle Fries",
    description: "With melted cheese & bacon bits",
    price: "$6.50",
    quantity: "1x · $6.50 ea",
    image: require("../../../assets/images/category01.png"),
  },
  {
    name: "Crispy Buffalo Wings",
    description: "6 pcs · Creamy ranch dip",
    price: "$9.20",
    quantity: "1x · $9.20 ea",
    image: require("../../../assets/images/hero_img.png"),
  },
];

function Card({ children, style }: { children: ReactNode; style?: object }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

function IconButton({
  children,
  accessibilityLabel,
}: {
  children: ReactNode;
  accessibilityLabel: string;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={styles.iconButton}
    >
      {children}
    </Pressable>
  );
}

const OrderDetails = () => {
  const { id } = useLocalSearchParams();

  const [data, setData] = useState(null);
  const getOrderData = async (orderId: string) => {
    try {
      const response = await axiosInstance.get(`/user/get-order/${orderId}`);

      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    getOrderData(id as string);
  }, [id]);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            onPress={() => router.back()}
            hitSlop={10}
          >
            <ArrowLeft size={25} color={colors.text} strokeWidth={2} />
          </Pressable>
          <AppText weight="bold" style={styles.title}>
            Checkout
          </AppText>
          <View style={styles.profileButton}>
            <UserRound size={20} color={colors.white} strokeWidth={2} />
          </View>
        </View>

        <View style={styles.referenceRow}>
          <View>
            <AppText weight="medium" style={styles.referenceLabel}>
              ORDER REFERENCE
            </AppText>
            <AppText weight="bold" className="text-sm">
              # {data?._id || "Loading..."}
            </AppText>
          </View>
          <View style={styles.referenceActions}>
            <IconButton accessibilityLabel="Share order">
              <Share2 size={18} color={colors.text} />
            </IconButton>
            <IconButton accessibilityLabel="More order options">
              <MoreHorizontal size={20} color={colors.text} />
            </IconButton>
          </View>
        </View>

        <Card>
          <View style={styles.statusHeading}>
            <View style={styles.statusIcon}>
              <Check size={20} color={colors.accent} strokeWidth={2.5} />
            </View>
            <View style={styles.statusText}>
              <View style={styles.inline}>
                <AppText weight="bold" style={styles.cardTitle}>
                  Order
                </AppText>
                <View style={styles.completedBadge}>
                  <AppText weight="medium" style={styles.completedText}>
                    {data?.status}
                  </AppText>
                </View>
              </View>
              <AppText style={styles.secondaryText}>
                Delivered {data?.updatedAt.slice(0, 10) || "Loading..."}
                at {data?.updatedAt.slice(11, 16) || "Loading..."}
              </AppText>
            </View>
          </View>

          <View style={styles.timeline}>
            <View style={styles.timelineLabels}>
              <AppText weight="medium" style={styles.timelineText}>
                Placed {data?.createdAt.slice(0, 10) || "Loading..."} at{" "}
                {data?.createdAt.slice(11, 16) || "Loading..."}
              </AppText>
            </View>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>

          <View style={styles.metaRow}>
            <View style={styles.inline}>
              <PackageCheck size={17} color={colors.accent} />
              <AppText style={styles.accentText}>Contactless Delivery</AppText>
            </View>
          </View>
        </Card>

        <Card style={styles.deliveryCard}>
          <View style={styles.sectionHeading}>
            <AppText weight="bold" style={styles.sectionTitle}>
              Delivery Information
            </AppText>
          </View>

          <View style={styles.addressRow}>
            <View style={styles.smallIconCircle}>
              <MapPin size={19} color={colors.accent} />
            </View>
            {data?.address.map((address, index) => (
              <View key={index} style={styles.addressText}>
                <AppText weight="medium" style={styles.addressTitle}>
                  {address.lane} {address.street}
                </AppText>
                <AppText style={styles.secondaryText}>{address.city}</AppText>
              </View>
            ))}
          </View>
          <View style={styles.note}>
            <MessageSquareText size={16} color={colors.muted} />
            <AppText style={styles.noteText}>
              “Leave at door, ring doorbell”
            </AppText>
          </View>
        </Card>

        <Card style={styles.itemsCard}>
          <View style={styles.sectionHeading}>
            <AppText weight="bold" style={styles.sectionTitle}>
              Items Ordered
            </AppText>
            <View style={styles.itemCount}>
              <AppText weight="medium" style={styles.itemCountText}>
                3 items
              </AppText>
            </View>
          </View>
          {data?.items.map((item, index) => (
            <View
              key={index}
              style={[styles.item, index > 0 && styles.itemBorder]}
            >
              <Image
                resizeMode="contain"
                source={{ uri: item.image_url }}
                style={styles.itemImage}
              />
              <View style={styles.itemDetails}>
                <View style={styles.itemTopRow}>
                  <View style={styles.itemNameBlock}>
                    <AppText
                      weight="bold"
                      style={styles.itemName}
                      numberOfLines={1}
                    >
                      {item.product_name}
                    </AppText>
                    <AppText
                      weight="bold"
                      className="text-lg text-primary"
                      numberOfLines={1}
                    >
                      Rs.{item.product_price}
                    </AppText>

                    <View style={styles.quantityBadge}>
                      <AppText weight="medium" style={styles.quantityText}>
                        x {item.quantity}
                      </AppText>
                    </View>
                  </View>
                </View>
                <Pressable style={styles.addAgain}>
                  <AppText weight="medium" style={styles.accentText}>
                    Rs.{item.product_price * item.quantity}
                  </AppText>
                </Pressable>
              </View>
            </View>
          ))}
        </Card>

        <Card style={styles.paymentCard}>
          <AppText weight="bold" style={styles.sectionTitle}>
            Payment Summary
          </AppText>
          <View style={styles.summaryRows}>
            <SummaryRow
              label="Items Subtotal"
              value={"Rs. " + data?.total_price}
            />
          </View>
          <View style={styles.totalRow}>
            <AppText weight="bold" style={styles.totalLabel}>
              Total Paid
            </AppText>
            <AppText weight="bold" style={styles.totalValue}>
              {data?.total_price ? `Rs.${data.total_price}` : "Loading..."}
            </AppText>
          </View>
          <View style={styles.paymentMethod}>
            <View style={styles.applePay}>
              <AppText weight="bold" style={styles.applePayText}>
                ◉
              </AppText>
            </View>
            <View style={styles.paymentText}>
              <AppText weight="medium" style={styles.addressTitle}>
                Apple Pay
              </AppText>
              <AppText style={styles.secondaryText}>
                Ending in • • • • 9012
              </AppText>
            </View>
            <AppText weight="medium" style={styles.accentText}>
              Paid
            </AppText>
          </View>
        </Card>

        {data?.status === "completed" || data?.status === "cancelled" ? (
          <Pressable style={styles.reorderButton} accessibilityRole="button">
            <RotateCcw size={20} color={colors.white} />
            <AppText weight="bold" style={styles.reorderText}>
              Reorder All Items ($41.30)
            </AppText>
          </Pressable>
        ) : (
          <View style={styles.reorderButton} accessibilityRole="button">
            <CircleCheck size={16} color="white" />
            <AppText
              className="text-sm"
              style={styles.reorderText}
              weight="bold"
            >
              Mark As Completed
            </AppText>
          </View>
        )}

        <View style={styles.bottomActions}>
          <Pressable style={styles.secondaryButton}>
            <AppText weight="bold" style={styles.secondaryButtonText}>
              ▣ &nbsp; Download Receipt
            </AppText>
          </Pressable>
          <Pressable style={styles.secondaryButton}>
            <CircleHelp size={17} color={colors.accent} />
            <AppText weight="bold" style={styles.secondaryButtonText}>
              Need Help?
            </AppText>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

function SummaryRow({
  label,
  value,
  discount,
  suffix,
}: {
  label: string;
  value: string;
  discount?: boolean;
  suffix?: boolean;
}) {
  return (
    <View style={styles.summaryRow}>
      <View style={styles.inline}>
        {discount && <Tag size={16} color={colors.accent} />}
        <AppText style={[styles.summaryLabel, discount && styles.accentText]}>
          {label}
        </AppText>
        {suffix && <CircleHelp size={14} color={colors.muted} />}
      </View>
      <AppText style={[styles.summaryValue, discount && styles.accentText]}>
        {value}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 18, paddingBottom: 22 },
  header: {
    height: 66,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#FFF0EC",
  },
  title: { color: colors.text, fontSize: 23 },
  profileButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.accent,
  },
  referenceRow: {
    minHeight: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  referenceLabel: { color: colors.muted, fontSize: 11, letterSpacing: 0.6 },
  referenceValue: { color: colors.text, fontSize: 20, marginTop: 1 },
  referenceActions: { flexDirection: "row", gap: 8 },
  iconButton: {
    width: 45,
    height: 45,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFECE6",
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 18,
    marginBottom: 27,
    shadowColor: "#6A2B12",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },
  statusHeading: { flexDirection: "row", alignItems: "center" },
  statusIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF0EB",
    borderWidth: 1,
    borderColor: "#FFE0D6",
  },
  statusText: { marginLeft: 11, flex: 1 },
  inline: { flexDirection: "row", alignItems: "center", gap: 7 },
  cardTitle: { color: colors.text, fontSize: 19 },
  completedBadge: {
    backgroundColor: "#FFE8DF",
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  completedText: { color: colors.accent, fontSize: 12 },
  secondaryText: { color: colors.muted, fontSize: 14, lineHeight: 20 },
  timeline: {
    backgroundColor: "#FFF0EB",
    borderRadius: 13,
    marginTop: 19,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 8,
  },
  timelineLabels: { flexDirection: "row", justifyContent: "space-between" },
  timelineText: { color: colors.accent, fontSize: 12 },
  progressTrack: {
    height: 7,
    borderRadius: 5,
    backgroundColor: "#F9CDC0",
    overflow: "hidden",
    marginTop: 7,
  },
  progressFill: { flex: 1, backgroundColor: colors.orange, borderRadius: 5 },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 21,
    gap: 8,
  },
  accentText: { color: colors.accent, fontSize: 13 },
  deliveryCard: { marginBottom: 27 },
  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: { color: colors.text, fontSize: 17 },
  addressRow: { flexDirection: "row", alignItems: "center", marginTop: 20 },
  smallIconCircle: {
    width: 37,
    height: 37,
    borderRadius: 19,
    backgroundColor: "#FFF0EB",
    alignItems: "center",
    justifyContent: "center",
  },
  addressText: { marginLeft: 10, flex: 1 },
  addressTitle: { color: colors.text, fontSize: 15 },
  note: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FFF0EB",
    borderRadius: 9,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 8,
    marginLeft: 45,
  },
  noteText: { color: colors.muted, fontSize: 13, fontStyle: "italic" },
  driver: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF0EB",
    borderRadius: 15,
    padding: 9,
    marginTop: 18,
  },
  driverAvatar: {
    width: 42,
    height: 42,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5DED5",
  },
  driverInitials: { color: colors.muted, fontSize: 16 },
  driverText: { flex: 1, marginLeft: 10 },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
  },
  ratingText: { color: colors.text, fontSize: 13 },
  itemsCard: { paddingBottom: 5 },
  itemCount: {
    backgroundColor: "#F7E5DF",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
  itemCountText: { color: colors.text, fontSize: 12 },
  item: { flexDirection: "row", paddingVertical: 18 },
  itemBorder: { borderTopWidth: 1, borderTopColor: colors.border },
  itemImage: { width: 91, height: 91, borderRadius: 14 },
  itemDetails: { flex: 1, marginLeft: 10, justifyContent: "space-between" },
  itemTopRow: { flexDirection: "row", flex: 1 },
  itemNameBlock: { flex: 1, paddingRight: 4 },
  itemName: { color: colors.text, fontSize: 15 },
  itemDescription: { color: colors.muted, fontSize: 13, marginTop: 2 },
  itemPrice: { color: colors.text, fontSize: 17 },
  quantityBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#FFE8E1",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 6,
  },
  quantityText: { color: colors.muted, fontSize: 12 },
  addAgain: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    gap: 3,
  },
  paymentCard: { marginBottom: 32 },
  summaryRows: { marginTop: 17 },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
  },
  summaryLabel: { color: colors.muted, fontSize: 15 },
  summaryValue: { color: colors.text, fontSize: 15 },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 13,
    marginTop: 5,
  },
  totalLabel: { color: colors.text, fontSize: 20 },
  totalValue: { color: colors.accent, fontSize: 22 },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF0EB",
    borderRadius: 12,
    padding: 9,
    marginTop: 18,
  },
  applePay: {
    width: 37,
    height: 37,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  applePayText: { color: colors.text, fontSize: 20 },
  paymentText: { flex: 1, marginLeft: 9 },
  reorderButton: {
    height: 59,
    borderRadius: 14,
    backgroundColor: colors.orange,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    shadowColor: "#B9470C",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.22,
    shadowRadius: 9,
    elevation: 3,
  },
  reorderText: { color: colors.white, fontSize: 16 },
  bottomActions: { flexDirection: "row", gap: 10, marginTop: 10 },
  secondaryButton: {
    flex: 1,
    height: 54,
    borderRadius: 14,
    backgroundColor: "#FFEAE4",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  secondaryButtonText: { color: colors.accent, fontSize: 14 },
});

export default OrderDetails;
