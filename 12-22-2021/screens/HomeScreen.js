import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import AboutScreen from './AboutScreen'

const HomeScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text>หน้าหลัก</Text>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default HomeScreen