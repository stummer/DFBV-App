import React from "react";
import { ScrollView, Text } from "react-native";

import URL from "../../constants/apiUrls";
import RssApi from "../../api/RssApi";

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      loading: true,
    };
  }

  componentDidMount() {
    RssApi.fetchRSS(URL.RssEvents).then((rss) => {
      this.setState({ feed: rss, loading: false });
    });
  }

  render() {
    let items = [];

    if (this.state.loading === false && this.state.feed.items != null) {
      items = this.state.feed.items.map(function (item, index) {
        return <Text key={index}>{item.title}</Text>;
      });
    }

    return <ScrollView>{items}</ScrollView>;
  }
}
