import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/Colors";
import CardContainer from "../components/CardContainer";
import CardText from "../components/CardText";

const GameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [userGuess, setUserGuess] = useState();
  const [rounds, setRounds] = useState(0);
  const [roundsRemaining, setRoundsRemaining] = useState(props.gameDifficulty);



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
    setRoundsRemaining(props.gameDifficulty - (rounds + 1) );
  };

  if (roundsRemaining == 0) {
    props.gameLostHandler();
  }

  let content;

  if (userGuess === props.computerNumber) {
    props.setRoundsHandler(rounds);
    props.gameWonHandler();
  } else if (userGuess < props.computerNumber) {
    content = (
      <Card>
        <CardText>You need to guess higher!</CardText>
        <CardText>Last guess: {userGuess}</CardText>
        <CardText>Rounds: {rounds}</CardText>
      </Card>
    );
  } else if (userGuess > props.computerNumber) {
    content = (
      <Card>
        <CardText>You need to guess lower!</CardText>
        <CardText>Last guess: {userGuess}</CardText>
        <CardText>Rounds: {rounds}</CardText>
      </Card>
    );
  }

  return (
    <CardContainer>
      <Card style={styles.card}>
        <Text>You have {roundsRemaining} rounds remaining</Text>
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
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 50,
  },
});

export default GameScreen;
