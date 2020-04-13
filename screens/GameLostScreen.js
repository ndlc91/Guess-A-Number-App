import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import CardText from "../components/CardText";
import CardContainer from "../components/CardContainer";

const GameLostScreen = props => {
  return (
    <CardContainer>
      <Card>
  <CardText style={styles.redColor}>You lost! </CardText>
  <CardText>The correct number was {props.computerNumber}! Try again next time</CardText>
        <Button title="TRY AGAIN" onPress={props.newGameHandler} color={Colors.blue} />
      </Card>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
    redColor: {
        color: Colors.red,
    }
})

export default GameLostScreen;
