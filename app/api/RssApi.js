import * as rssParser from 'react-native-rss-parser';

var RssApi = {
  fetchRSS(url) {
    return fetch(url)
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData));
  }
};

module.exports = RssApi;