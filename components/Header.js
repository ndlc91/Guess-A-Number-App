import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headertext}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 96,
        paddingTop: 40,
        backgroundColor: Colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    headertext: {
        justifyContent: 'center',
        fontSize: 20,
        color: Colors.blue,
    },
})

export default Header;
