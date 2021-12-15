import React from 'react'
import { View, Text, StyleSheet, Alert, SafeAreaView, Button } from 'react-native'

const AlertExample = () => {

    const simpleAlertHandler = ()=> {
        alert('Hello I am Simple Alert')
    }

    const twoOptionHandler = ()=> {
        //function to make two option alert
        Alert.alert(
            'Hello', //title
            'I am two option alert, do you want to cancle me ?', //body
            [
                {
                    text:'Yes',
                    onPress : ()=> console.log('Yes Pressed')
                },
                {
                    text:'No',
                    onPress : ()=> console.log('No Pressed')
                }
            ]
        )
    }

    const threeOptionHandler = ()=> {
        Alert.alert(
            'Hello', //title
            'I am three option alert, do you want to cancle me ?', //body
            [
                {
                    text:'Maybe',
                    onPress : ()=> console.log('Maybe Pressed')
                },
                {
                    text:'Yes',
                    onPress : ()=> console.log('Yes Pressed')
                },
                {
                    text:'No',
                    onPress : ()=> console.log('No Pressed')
                },
            ],
            {cancelable:false}
        )
    }

    return (
        <SafeAreaView style = {{flex:1}}>
            <View style = {styles.container}>
                <Button
                    title = 'Simple Alert'
                    onPress = {simpleAlertHandler}
                />

                <Button
                    title = 'Alert with Two Options'
                    onPress = {twoOptionHandler}
                />      

                <Button
                    title = 'Alert with Three Options'
                    onPress = {threeOptionHandler}
                />      
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});

export default AlertExample