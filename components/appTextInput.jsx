/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { themeColors } from "../theme";

const AppTextInput = ({ ...otherProps }) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(true)}
      placeholderTextColor={"#626262"}
      style={[
        {
          fontSize: 14,
          padding: 14,
          backgroundColor: "f1f4ff",
          borderRadius: 10,
          marginVertical: 10,
          borderColor: "#c2c2c2",
          borderWidth: 3,
        },
        focused && {
          borderColor: themeColors.text,
          borderWidth: 3,
          shadowOffset: { width: 4, height: 10 },
          shadowColor: themeColors.text,
          shadowOpacity: 0.2,
          shadowRadius: 10,
        },
      ]}
      {...otherProps}
    />
  );
};

export default AppTextInput;
