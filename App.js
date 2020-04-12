import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/Colors";


export default function App() {

  const [gameStarted, setGameStarted] = useState(false);
  const [computerNumber, setComputerNumber] = useState();
  const [gameWon, setGameWon] = useState(false);
  const [roundsNumber, setRoundsNumber] = useState();

  const startGameHandler = () => {
      setComputerNumber(Math.floor(Math.random() * (100 - 1) + 1));
      setGameStarted(true);
  }

  const gameWonHandler = () => {
    setGameWon(true);
  }

  const newGameHandler = () => {
    setGameWon(false);
    setGameStarted(false);
  }

  const setRoundsHandler = numberOfRounds => {
    setRoundsNumber(numberOfRounds);
  }

  let content = <StartGameScreen startGameHandler={startGameHandler}/>

  if (gameStarted && !gameWon) {
    content = <GameScreen computerNumber={computerNumber} gameWonHandler={gameWonHandler} setRoundsHandler={setRoundsHandler}/>
  } else if (gameStarted && gameWon) {
    content = <GameOverScreen newGameHandler={newGameHandler} roundsNumber={roundsNumber} computerNumber={computerNumber}/>
  }


  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
