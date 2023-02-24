import { View, Text, Image, Button } from "react-native";

import { style } from "../../../formstyle";

export const Welcome = ({ navigation }) => {
  return (
    <View>
      <Image
        source={{
          uri: "https://blog.darwinbox.com/hubfs/Blog%20Image-2.png",
        }}
        style={style.img}
      />
      <View style={style.btnstyle}>
        <View style={style.formstyle1}>
          <Button
            color={"green"}
            title="Signup"
            onPress={() => navigation.navigate("Form")}
          />
        </View>
        <View style={style.formstyle2}>
          <Button
            color={"red"}
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
};
