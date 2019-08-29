import React, { useState } from "react";
import { View, Image, Text } from "react-native";

const ScrollImagesH = props => {
  return (
    <View
      style={{
        height: 130,
        width: 130,
        flexDirection: "row",
        marginRight: 2
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={{
            uri: props.uri
          }}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "contain"
          }}
        />
      </View>
    </View>
  );
};

export default ScrollImagesH;
