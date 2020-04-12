import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/Colors";

const GameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [userGuess, setUserGuess] = useState();
  const [rounds, setRounds] = useState(0);

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setUserGuess(chosenNumber);
    setEnteredValue("");
    setRounds(rounds + 1);
  };

  let content;

  if (userGuess === props.computerNumber) {
    props.gameWonHandler();
  } else if (userGuess < props.computerNumber) {
    content = (
      <Card>
        <Text style={styles.cardText}>You need to guess higher!</Text>
        <Text style={styles.cardText}>Last guess: {userGuess}</Text>
        <Text style={styles.cardText}>Rounds: {rounds}</Text>
      </Card>
    );
  } else if (userGuess > props.computerNumber) {
    content = (
      <Card>
        <Text style={styles.cardText}>You need to guess lower!</Text>
        <Text style={styles.cardText}>Last guess: {userGuess}</Text>
        <Text style={styles.cardText}>Rounds: {rounds}</Text>
      </Card>
    );
  }

  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Input
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <Button
          title="GUESS"
          color={Colors.blue}
          onPress={confirmInputHandler}
        />
      </Card>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 50,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginVertical: 30,
    width: "70%",
  },
  cardText: {
    textAlign: "center",
  },
});

export default GameScreen;
