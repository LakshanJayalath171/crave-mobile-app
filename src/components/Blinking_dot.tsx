import React, { useEffect, useRef } from "react";
import { Animated, type ViewStyle } from "react-native";

interface BlinkingDotProps {
  color?: string;
  size?: number;
  duration?: number;
  style?: ViewStyle;
}

const BlinkingDot: React.FC<BlinkingDotProps> = ({
  color = "#22C55E",
  size = 10,
  duration = 800,
  style,
}) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.2,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [opacity, duration]);

  return (
    <Animated.View
      accessibilityLabel="Status indicator"
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
          opacity,
        },
        style,
      ]}
    />
  );
};

export default BlinkingDot;
