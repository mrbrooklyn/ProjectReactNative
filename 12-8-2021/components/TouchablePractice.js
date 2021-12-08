import React,{ useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'

const TouchablePractice = () => {

    const [email,onChangeEmail] = useState('')
    const [password,onChangePassword] = useState('')

    const onPressAlert = ()=> {
        if (!email.trim()){
            alert('Please Enter Name');
        }//user === ''
        else if (!password.trim()){
            alert('Please Enter Email');
        }//email === ''
        else{
            alert(`Email : ${email} \nPassword : ${password}`);
        }
    }

    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <TouchableOpacity
                    style = {styles.textInputStyle}
                    activeOpacity = {0.5}
            >
                <TextInput
                    style = {{flex:1}}
                    placeholder="Enter Email"
                    underlineColorAndroid="transparent"
                    onChangeText = {onChangeEmail}
                />
            </TouchableOpacity>
            <TouchableOpacity
                    style = {styles.textInputStyle}
                    activeOpacity = {0.5}
            >
                <TextInput
                    style = {{flex:1}}
                    placeholder="Enter Password"
                    underlineColorAndroid="transparent"
                    onChangeText = {onChangePassword}
                />
            </TouchableOpacity>
            <TouchableOpacity
                    style = {styles.buttonStyle}
                    activeOpacity = {0.5}
                    onPress = {onPressAlert}
            >
                <Text style = {styles.buttonTextStyle}>Submit</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
        borderRadius: 10
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
    buttonStyle: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4668bd',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        marginTop: 10
    },
});

export default TouchablePractice
