import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home';
import About from './About';

import { Image } from 'react-native-animatable';
import { useNavigation, useRoute } from '@react-navigation/native';
import ConstructionComponent from './ConstructionComponent';

const DrawerNavigator = () => {
    const Drwer = createDrawerNavigator();


    const Tabbtn = [
        { lable: "Home", icon: require('../images/TabIcons/home.png'), Ficon: require('../images/TabIcons/focused/home.png'), component: Home },
        { lable: "About", icon: require('../images/TabIcons/heart.png'), Ficon: require('../images/TabIcons/focused/heart.png'), component: About },
        { lable: "ConstructionComponent", icon: require('../images/TabIcons/heart.png'), Ficon: require('../images/TabIcons/focused/heart.png'), component: ConstructionComponent },
    ];

    const CustomerDrawe = (props) => {
        const navigation = useNavigation()
        const { state } = props
        const { routes, index } = state; //Not sure about the name of index property. Do check it out by logging the 'state' variable.
        const focusedRoute = routes[index];


        return (
            <ScrollView {...props} style={{
                margin: 0,
                padding: 0,
            }}>
                <View style={{
                    width: '100%',
                    height: 250,
                    marginBottom: 5,
                    position: 'relative'
                }}>
                    <Image source={{ uri: 'https://1fid.com/wp-content/uploads/2022/07/aesthetic-profile-picture-2-520x520.jpg' }} style={{ width: '100%', height: '100%' }} />
                </View>
                {Tabbtn.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            backgroundColor: (focusedRoute.name == item.lable ? '#DAFCDF' : null),
                            paddingVertical: 9,
                            paddingHorizontal: 10,
                            borderColor: '#A1F7AE',
                            borderWidth: 1,
                            marginLeft: 10,
                            borderTopLeftRadius: 30,
                            borderBottomLeftRadius: 30,
                            marginBottom: 5
                        }} onPress={() => navigation.navigate(item.lable)}>
                            <Image source={item.icon} />
                            <Text style={{ color: '#455F4B', marginLeft: 10, fontWeight: '500' }}> {item.lable}</Text>
                        </TouchableOpacity>
                    )
                })}

            </ScrollView>

        )
    }

    return (
        <Drwer.Navigator drawerContent={(props) => <CustomerDrawe {...props} />} >
            <Drwer.Screen name='Home' component={Home} options={{
                headerShown: true
            }} />
            <Drwer.Screen name='About' component={About} />
            <Drwer.Screen name='ConstructionComponent' component={ConstructionComponent} />
        </Drwer.Navigator>
    )
}

export default DrawerNavigator