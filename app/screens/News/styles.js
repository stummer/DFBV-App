import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  news_container: {
    backgroundColor: "#f8f8f8",
  },
  news_item: {
    marginHorizontal: 12,
    marginVertical: 6,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#eeeeee",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  news_image: {
    width: "100%",
  },
  news_headline: {
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 24,
  },
  news_meta: {
    marginHorizontal: 12,
    marginBottom: 12,
    color: "#a3a3a3",
  },
});

export default styles;
