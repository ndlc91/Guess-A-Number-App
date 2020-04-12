import React from 'react'
import { View, Text, Button } from 'react-native'

const GameOverScreen = props => {
    return (
        <View>
            <Text>You won the game!</Text>
            <Button title="NEW GAME" onPress={props.newGameHandler}/>
        </View>
    )
}

export default GameOverScreen
