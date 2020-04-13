import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CardText = props => {
    return (
    <Text style={{...props.style, ...styles.cardText}}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    cardText: {
        textAlign: "center",
        fontSize: 18,
        marginVertical: 8,
      },
})

export default CardText
