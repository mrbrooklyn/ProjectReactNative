import React,{ useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native'

const TextInputPractice1 = () => {
    const [user,onChangeUser] = useState('')
    const [email,onChangeEmail] = useState('')

    const onPressAlert = ()=> {
        if (!user.trim()){
            alert('Please Enter Name');
        }//user === ''
        else if (!email.trim()){
            alert('Please Enter Email');
        }//email === ''
        else{
            alert('Success');
        }
    }
    return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.textInputStyle}>
                <TextInput
                    style = {{flex:1}}
                    placeholder="Enter Name"
                    underlineColorAndroid="transparent"
                    onChangeText = {onChangeUser}
                />
            </View>
            <View style={styles.textInputStyle}>
                <TextInput
                    style = {{flex:1}}
                    placeholder="Enter Email"
                    underlineColorAndroid="transparent"
                    onChangeText = {onChangeEmail}
                />
            </View>
            <View style={{width:'90%',marginTop:10}}>
                <Button  
                    style = {{flex:1}}
                    onPress = {onPressAlert}
                    title = "SUBMIT"
                    color = "#5e8cff"
                />
            </View>
        
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputStyle: {
        width: '90%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
        borderRadius: 10
        },
});

export default TextInputPractice1
