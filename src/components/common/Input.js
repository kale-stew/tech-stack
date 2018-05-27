import React from "react";
import { TextInput, View, Text } from "react-native";

const Input = ({
  label,
  value,
  onChangeText,
  placeholderText,
  secureTextEntry
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false} // toggle dependent on use
        placeholder={placeholderText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23, // how much space is between each line of text?
    flex: 2
  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20, // stand away from the lefthand border
    flex: 1 // flex property to relate siblings to eachother
    // add the values of flex to eachother to allocate space: 2/3 vs 1/3
  },

  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

export { Input };
