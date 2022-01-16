import React from "react";
import { ScrollView, View, Image, Text } from "react-native";

import styles from "./styles";
import URL from "../../constants/apiUrls";
import RssApi from "../../api/RssApi";
import DateFormat from "../../lib/DateFormat";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      loading: true,
    };
  }

  componentDidMount() {
    RssApi.fetchRSS(URL.RssNews).then((rss) => {
      this.setState({ feed: rss, loading: false });
    });
  }

  render() {
    let items = [];

    if (this.state.loading === false && this.state.feed.items != null) {
      items = this.state.feed.items.map(function (item, index) {
        let categories = '';
        if (item.categories != null && item.categories.length > 0) {
          categories = ' | ' + item.categories[0].name;
        }

        return (
          <View style={styles.news_item} key={index}>
            <Image style={styles.news_image} source={item.imageUrl}></Image>
            <Text style={styles.news_headline}>{item.title}</Text>
            <Text style={styles.news_meta}>{DateFormat.Date(item.published)}{categories}</Text>
          </View>
        );
      });
    }

    return <ScrollView style={styles.news_container}>{items}</ScrollView>;
  }
}
