import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export function HeartIcon({ heart, setHeart }) {
  return (
    <TouchableOpacity
      onPress={() => {
        heart ? setHeart(false) : setHeart(true);
      }}
    >
      {heart ? (
        <Icon name="hearto" color={"white"} size={22} />
      ) : (
        <Icon name="heart" color={"white"} size={22} />
      )}
    </TouchableOpacity>
  );
}
