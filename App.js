//rnfes

import React from 'react';
import { useState } from 'react';
import { StyleSheet,SafeAreaView,TextInput,Button,Text,View} from 'react-native';

const App = () => {
  const [inputValue,setInputValue] = useState('')
  
  const checkValueIsNumberOrNot = () =>{
    if(isNaN(inputValue)){
      alert("It is not a Number")
    }else{
      alert("It is a Number")
    }
  }

  return(
    <SafeAreaView style={{flex:1}}>
      <View style = {styles.container}>
        <TextInput
          placeholder = "Enter Text"
          style = {styles.testInputStyle}
          onChangeText = {(inputValue)=>{setInputValue(inputValue)}}
        />
        <Button
          title = "Check Value is Number or Not"
          color = "#606070"
          onPress = {checkValueIsNumberOrNot}
        />
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60
  },

  testInputStyle: {
    textAlign: 'center',
    height: 50,
    width:'70%',
    marginBottom: 10,
    borderColor:'black'
  },
});

export default App;

