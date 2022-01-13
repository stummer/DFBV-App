import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footer_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#cccccc",
  },
  footer_button: {
    marginVertical: 0,
    marginHorizontal: 3,
    padding: 6,
    flexDirection: "column",
    alignItems: "center",
  },
  footer_text: {
    marginTop: 1,
    fontSize: 12,
    color: "#a3a3a3",
  },
  footer_text_active: {
    marginTop: 2,
    fontSize: 12,
    color: "#000000",
  },
});

export default styles;
