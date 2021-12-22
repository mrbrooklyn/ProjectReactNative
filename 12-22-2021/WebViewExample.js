import React from 'react'
import { View, Text, SafeAreaView,StyleSheet,ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview'

export default function WebViewExample() {
    return (
        <SafeAreaView style = {{flex: 1}}>
            <WebView
                source = {{uri:'https://www.tni.ac.th'}}
                style = {{marginTop: 20}}
            />
        </SafeAreaView>
    )
}
