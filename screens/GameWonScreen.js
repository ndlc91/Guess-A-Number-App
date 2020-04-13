import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors"
import CardContainer from "../components/CardContainer";
import CardText from "../components/CardText";

const GameWonScreen = (props) => {
  return (
    <CardContainer>
      <Card>
        <CardText>You won the game!</CardText>
        <CardText>The correct number was: {props.computerNumber}</CardText>
        <CardText>You won in {props.roundsNumber} rounds</CardText>
        <Button title="NEW GAME" onPress={props.newGameHandler} color={Colors.blue} />
      </Card>
    </CardContainer>
  );
};

const styles = StyleSheet.create({

})

export default GameWonScreen;
