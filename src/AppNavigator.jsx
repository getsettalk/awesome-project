import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Main from './StackNav/Main'
import Splash from './SplashScr/Splash'

const AppNavigator = () => {

    const stack = createStackNavigator();

    return (
        <NavigationContainer >
            <stack.Navigator initialRouteName='splash' screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#231e4e',
                },
                headerTitleStyle: { color: 'white', textTransform: 'capitalize' }
            }}>
                <stack.Screen name='splash' component={Splash} options={{
                    headerShown: false
                }} />
                <stack.Screen name='main' component={Main} />

            </stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator