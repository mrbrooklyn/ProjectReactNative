import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import AboutScreen from './AboutScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Ionicons name="home-outline" size={30} color='skyblue'></Ionicons>
            <Text>หน้าหลัก</Text>
            <Button
                title="Go to About"
                onPress={()=>navigation.push('About',{email:'damrongdech@tni.ac.th'})}
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