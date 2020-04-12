import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";


export default function App() {

  const [gameStarted, setGameStarted] = useState(false);
  const [computerNumber, setComputerNumber] = useState();

  const startGameHandler = () => {
      setComputerNumber(Math.floor(Math.random() * (100 - 1) + 1));
      setGameStarted(true);
  }

  let content = <StartGameScreen startGameHandler={startGameHandler}/>

  if (gameStarted) {
    content = <GameScreen computerNumber={computerNumber}/>
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
