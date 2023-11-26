import React, { useEffect } from 'react'
import { View, Text, StyleSheet, useColorScheme, StatusBar } from 'react-native'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('main') // hide Splash Screen
        }, 3000)
    }, []) 

    const isDarkMode = useColorScheme() // detect Dark mode

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode == 'dark' ? '#27374D' : '#9DB2BF' }]}>
            <StatusBar translucent backgroundColor={isDarkMode == 'dark' ? '#27374D' : '#9DB2BF'} />
            <Text style={{ fontSize: 30, fontWeight: '700' }}>Awesome App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Splash