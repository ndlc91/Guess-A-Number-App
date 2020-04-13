import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button
          title="START EASY GAME"
          onPress={props.easyDifficultyHandler}
          color={Colors.blue}
        />
        <Button
          title="START MEDIUM GAME"
          onPress={props.mediumDifficultyHandler}
          color={Colors.grey}
        />
        <Button
          title="START HARD GAME"
          onPress={props.hardDifficultyHandler}
          color={Colors.red}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default StartGameScreen;
