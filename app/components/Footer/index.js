import React, { Component } from "react";
import { View, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const buttons = [
  {
    title: "Aktuelles",
    icon: "md-newspaper-outline",
  },
  {
    title: "Termine",
    icon: "md-calendar-outline",
  },
  {
    title: "Einstellungen",
    icon: "md-settings-outline",
  },
];

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active !== null ? props.active : 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.active !== prevProps.active)
      this.setState({ active: this.props.active });
  }

  onClick = (idx) => {
    if (this.state.active == idx) return;

    this.setState({ active: idx });
    if (this.props.onClick != null) this.props.onClick(idx);
  };

  render() {
    let active = this.state.active;
    let onClick = this.onClick;

    let btns = buttons.map(function (btn, index) {
      let icon_size = 20;
      let icon_color = active === index ? "#000000" : "#a3a3a3";
      let text_style =
        active === index ? styles.footer_text_active : styles.footer_text;

      return (
        <Pressable
          key={index}
          style={styles.footer_button}
          onPress={() => onClick(index)}
        >
          <Ionicons name={btn.icon} size={icon_size} color={icon_color} />
          <Text style={text_style}>{btn.title}</Text>
        </Pressable>
      );
    });

    return <View style={styles.footer_container}>{btns}</View>;
  }
}
