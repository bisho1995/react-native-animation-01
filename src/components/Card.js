import React from "react";
import { View, Image, Text, Animated } from "react-native";

const AVATAR_SIZE = 70;

export default class Card extends React.PureComponent {
  render() {
    const { image, name, jobTitle, email, style = {} } = this.props;

    return (
      <Animated.View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgba(255,255,255,0.8)",
          marginHorizontal: 24,
          marginVertical: 12,
          padding: 16,
          borderRadius: 16,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 1,
          shadowRadius: 20,
          ...style,
        }}
      >
        <View>
          <Image
            borderRadius={AVATAR_SIZE / 2}
            source={{ uri: image }}
            style={{ width: AVATAR_SIZE, height: AVATAR_SIZE, marginRight: 16 }}
          />
        </View>
        <View style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>{name}</Text>
          <Text style={{ color: "#a0a0a0", marginVertical: 4, opacity: 0.7 }}>
            {jobTitle}
          </Text>
          <Text style={{ color: "#0099cc", opacity: 0.8 }}>{email}</Text>
        </View>
      </Animated.View>
    );
  }
}
