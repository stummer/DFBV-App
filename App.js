import React from "react";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, BackHandler } from "react-native";

import Footer from "./app/components/Footer";
import Screen from "./app/components/Screen";

import NewsPage from "./app/screens/News";
import EventsPage from "./app/screens/Events";
import SettingsPage from "./app/screens/Settings";

const pages = [
  {
    title: null,
    component: <NewsPage />,
    footer_index: 0,
    parent: null,
  },
  {
    title: "Termine",
    component: <EventsPage />,
    footer_index: 1,
    parent: null,
  },
  {
    title: "Einstellungen",
    component: <SettingsPage />,
    footer_index: 2,
    parent: null,
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_page: 0,
    };
  }

  setPage = (idx) => {
    if (pages[this.state.current_page].footer_index !== idx || pages[this.state.current_page].parent !== null) {
      for (let i = 0; i < pages.length; i++) {
          if (pages[i].footer_index === idx && pages[i].parent === null) {
            this.setState({ current_page: i });
            break;
          }
        }
      }
  };

  backAction = () => {
    if (this.state.current_page == 0) {
      // On NEWS page (home) -> exit app
      BackHandler.exitApp();
    }
    else if (pages[this.state.current_page].parent !== null) {
      // On sub page -> goto parent
      this.setPage(pages[this.state.current_page].parent);
    }
    else {
      // On main page -> goto NEWS
      this.setPage(0);
    }
    return true;
  };
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }

  render() {
    let page = pages[this.state.current_page];

    return (
      <View style={styles.container}>
        <StatusBar translucent />
        <SafeAreaView style={styles.content_container}>
          <Screen page={page.component} title={page.title} />
          <Footer active={page.footer_index} onClick={this.setPage} />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6c8999",
    flex: 1,
  },
  content_container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#ffffff",
    flex: 1,
  },
});
