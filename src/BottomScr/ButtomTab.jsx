import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import * as Animatable from 'react-native-animatable';


const ButtomTab = () => {
    const Bottom = createBottomTabNavigator();

    const Tabbtn = [
        { lable: "Feed", icon: require('../images/TabIcons/home.png'), Ficon: require('../images/TabIcons/focused/home.png'), component: Screen1 },
        { lable: "Notification", icon: require('../images/TabIcons/heart.png'), Ficon: require('../images/TabIcons/focused/heart.png'), component: Screen2 },
        { lable: "Setting", icon: require('../images/TabIcons/settings.png'), Ficon: require('../images/TabIcons/focused/settings.png'), component: Screen3 }
    ];

    // custom button 
    const TabButton = (props) => {
        const { item, onPress, accessibilityState } = props;
        const focused = accessibilityState.selected;
        const viewRef = useRef(null)
        // console.log(viewRef)
        useEffect(() => {
            if (focused) {
                viewRef.current.animate({ 0: { scale: .5, rotate: '0deg' }, 1: { scale: 1.5, rotate: '360deg' } })
            }
        }, [focused])


        return (
            <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.5}>
                <Animatable.View
                    //animation="zoomIn"
                    ref={viewRef}
                    duration={1000}
                    style={styles.container} >
                    <Image style={{ width: 20, height: 20 }} source={focused ? item.Ficon : item.icon} />
                </Animatable.View>

            </TouchableOpacity>
        )
    }

    return (
        <Bottom.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    // backgroundColor:'red',
                    marginHorizontal: 15,
                    marginBottom: 6,
                    borderRadius: 16,

                }
            }}
            sceneContainerStyle={
                {
                    backgroundColor: 'gray'
                }
            }
        >
            {
                Tabbtn.map((item, index) => {
                    // console.log(item)
                    return (<Bottom.Screen name={item.lable} component={item.component} key={index} options={{
                        tabBarShowLabel: false,
                        // tabBarIcon: ({ color, focused }) => (
                        //     <Image style={{ width: 25, height: 25 }} source={focused ? item.Ficon : item.icon} />
                        // ),
                        tabBarButton: (props) => <TabButton {...props} item={item} />
                    }} />)
                })
            }

        </Bottom.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ButtomTab