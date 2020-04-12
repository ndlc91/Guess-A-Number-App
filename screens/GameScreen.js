import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';

const GameScreen = () => {
    return (
        <View>
            <Card>
                <Input />
            </Card>
        </View>
    )
}

export default GameScreen
