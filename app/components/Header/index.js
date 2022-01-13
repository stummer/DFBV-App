import React, { Component } from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  renderTitle() {
    if (this.props.title == null) {
      return (
        <Image
          key="logo"
          style={styles.logo}
          source={require("../../assets/logo-header.png")}
        ></Image>
      );
    } else {
      return (
        <Text key="title" style={styles.title}>
          {this.props.title}
        </Text>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTitle()}
      </View>
    );
  }
}
