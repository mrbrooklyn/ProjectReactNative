import React, { useState } from 'react'

import { StyleSheet, SafeAreaView, TextInput, Text, ImageBackground } from 'react-native';

const TextInputReview = () => {

    const [text, onChangeText] = useState("")

    return (
        <SafeAreaView style={styles.container}>
            <Text>{text}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            
        </SafeAreaView>
    )
}

export default TextInputReview

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 300,
      backgroundColor: '#ffffff',
    },
    input: {
      width: 250,
      padding: 10,
      backgroundColor: '#e8e8e8',
    },
});