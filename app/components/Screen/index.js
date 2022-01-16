import { React, Component } from "react";
import { View } from "react-native";

import Header from "../Header";
import styles from "./styles";

export default class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Header title={this.props.title} />
        {this.props.page}
      </View>
    );
  }
}
