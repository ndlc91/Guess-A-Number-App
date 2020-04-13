import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameWonScreen from "./screens/GameWonScreen";
import GameLostScreen from './screens/GameLostScreen'
import Colors from "./constants/Colors";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [computerNumber, setComputerNumber] = useState();
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [roundsNumber, setRoundsNumber] = useState();
  const [gameDifficulty, setGameDifficulty] = useState();


  const easyDifficultyHandler = () => {
    setComputerNumber(Math.floor(Math.random() * (100 - 1) + 1));
    setGameDifficulty(20);
    setGameStarted(true);
  };

  const mediumDifficultyHandler = () => {
    setComputerNumber(Math.floor(Math.random() * (100 - 1) + 1));
    setGameDifficulty(10);
    setGameStarted(true);
    
  };
  const hardDifficultyHandler = () => {
    setComputerNumber(Math.floor(Math.random() * (100 - 1) + 1));
    setGameDifficulty(5);
    setGameStarted(true);
    
  };

  const gameWonHandler = () => {
    setGameWon(true);
  };

  const gameLostHandler = () => {
    setGameLost(true);
  }

  const newGameHandler = () => {
    setGameWon(false);
    setGameLost(false);
    setGameStarted(false);

  };

  const setRoundsHandler = (numberOfRounds) => {
    setRoundsNumber(numberOfRounds);
  };

  let content = (
    <StartGameScreen
      easyDifficultyHandler={easyDifficultyHandler}
      mediumDifficultyHandler={mediumDifficultyHandler}
      hardDifficultyHandler={hardDifficultyHandler}
    />
  );

  if (gameStarted && !gameWon  && !gameLost) {
    content = (
      <GameScreen
        computerNumber={computerNumber}
        gameWonHandler={gameWonHandler}
        setRoundsHandler={setRoundsHandler}
        gameDifficulty={gameDifficulty}
        gameLostHandler={gameLostHandler}
      />
    );
  } else if (gameStarted && gameWon) {
    content = (
      <GameWonScreen
        newGameHandler={newGameHandler}
        roundsNumber={roundsNumber}
        computerNumber={computerNumber}
      />
    );
  } else if (gameStarted && gameLost) {
    content = <GameLostScreen newGameHandler={newGameHandler} computerNumber={computerNumber}/>
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
  },
});
