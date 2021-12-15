import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

const Footer = () => {

    const users = [
        {id:1,name:'John'},
        {id:2,name:'Mary'}
    ]

    const [count,setCount] = useState(0); //count = 0
    const [title,setTitle] = useState('Hello');

    //alway run when re-render
    useEffect (()=>{
        console.log('use effect1')
    })

    //run only once at start
    useEffect (()=>{
        console.log('use effect2')
    },[])

    //run after exiting variable
    useEffect (()=>{
        console.log('use effect3')
    },[title])


    return (
        <View>
            <Text style = {styles.title}>Thai Nichi Institute of Technology {count}</Text>
            {
                users.map((user,index)=>{
                    return <Text key={user.id}>{index+1}) ID:{user.id} Name:{user.name}</Text>
                })
            }
            <Button
            title='Click Me(+)' 
            onPress={()=>{
                setCount(count+1) //update count to 5
            }}/>
            <Button
            title='Click Me(-)' 
            onPress={()=>{
                setCount(count-1) //update count to 5
            }}
            />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title:{
        fontSize:20,
    }
})
