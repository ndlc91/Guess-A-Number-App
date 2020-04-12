import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CardContainer = props => {
    return (
    <View style={styles.cardContainer}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: "center",
        justifyContent: "center",
      },
})

export default CardContainer
