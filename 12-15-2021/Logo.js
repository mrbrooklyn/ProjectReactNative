import React from 'react'
import { View, Text } from 'react-native'

const Logo = () => {
    const title = "TNI"
    const isTitle = true;

    const showData = ()=> <Text>Hello December</Text>

    return (
        <View> 
            <Text style={{color:'blue',fontSize:20}}>Thai-Nichi </Text>
            {// JSX need {}
                isTitle === true && <Text>{title} </Text>
            } 
            {
                isTitle === true // 3rd = for check type
                ?<Text>{title} </Text> //if true
                :<Text>Thai-Nichi</Text> //if false
            }
            {showData()}
            
        </View>
    )
}

export default Logo
