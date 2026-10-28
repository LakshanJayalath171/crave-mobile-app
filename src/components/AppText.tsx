import { Text, type TextProps } from "react-native";

type FontWeight = "regular" | "medium" | "semibold" | "bold" | "extrabold";

interface AppTextProps extends TextProps {
  weight?: FontWeight;
  className?: string;
}

const fontFamilies: Record<FontWeight, string> = {
  regular: "PlusJakartaSans_400Regular",
  medium: "PlusJakartaSans_500Medium",
  semibold: "PlusJakartaSans_600SemiBold",
  bold: "PlusJakartaSans_700Bold",
  extrabold: "PlusJakartaSans_800ExtraBold",
};

export default function AppText({
  weight = "regular",
  style,
  ...props
}: AppTextProps) {
  return (
    <Text {...props} style={[{ fontFamily: fontFamilies[weight] }, style]} />
  );
}
