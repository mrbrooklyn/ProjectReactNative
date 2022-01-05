import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const AboutScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text>เกี่ยวกับเรา</Text>
            <Button 
                title='Go to AboutPage again....'
                onPress={()=>navigation.push('About')}
            />
            <Button 
                title='Go to Home Page'
                onPress={()=>navigation.navigate('Home')}
            />
            <Button 
                title='Go Back'
                onPress={()=>navigation.goBack()}
            />
            <Button 
                title='Go Back to First Screen in Stack'
                onPress={()=>navigation.popToTop()}
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

export default AboutScreen