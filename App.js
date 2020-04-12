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

  let content = <StartGameScreen startGameHandler={startGameHandler}/>

  if (gameStarted && !gameWon) {
    content = <GameScreen computerNumber={computerNumber} gameWonHandler={gameWonHandler}/>
  } else if (gameStarted && gameWon) {
    content = <GameOverScreen newGameHandler={newGameHandler}/>
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
