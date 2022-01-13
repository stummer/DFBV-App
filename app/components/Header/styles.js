import { StyleSheet } from "react-native";

import Colors from "../../constants/colors"

const styles = StyleSheet.create({
  container: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    textAlignVertical: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: Colors.primaryColor,
  },
  logo: {
    width: 103,
    height: 36,
    resizeMode: "contain",
  },
  title: {
    fontSize: 23,
    color: "#ffffff",
  },
  menu: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default styles;
