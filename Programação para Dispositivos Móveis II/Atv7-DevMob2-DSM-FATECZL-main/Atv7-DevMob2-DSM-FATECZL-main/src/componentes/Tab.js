import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Tela1 from '../views/Tela1'
import Tela2 from '../views/Tela2'
import Tela3 from '../views/Tela3'
import Tela4 from '../views/Tela4'
import Tela5 from '../views/Tela5'
import Tela6 from '../views/Tela6'

const Tab = createBottomTabNavigator()

export default comp => (

    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                    case 'Tela1':
                        iconName = focused
                            ? 'home'
                            : 'home-outline'
                        break;
                    case 'Tela2':
                        iconName = focused
                            ? 'play-circle'
                            : 'play-circle-outline'
                        break;
                    case 'Tela3':
                        iconName = focused
                            ? 'play-circle'
                            : 'play-circle-outline'
                        break;
                    case 'Tela4':
                        iconName = focused
                            ? 'play-circle'
                            : 'play-circle-outline'
                        break;
                    case 'Tela5':
                        iconName = focused
                            ? 'play-circle'
                            : 'play-circle-outline'
                        break;
                    case 'Tela6':
                        iconName = focused
                            ? 'play-circle'
                            : 'play-circle-outline'
                        break;
                }
                return <Ionicons
                    name={iconName}
                    size={size}
                    color={color} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'grey',
            tabBarShowLabel: false,
        })}
        initialRouteName="Tela1">

        <Tab.Screen name="Tela1" component={Tela1} options={{ title: 'Departure Songs' }} />
        <Tab.Screen name="Tela2" component={Tela2} options={{ title: 'A Gallant Gentleman' }} />
        <Tab.Screen name="Tela3" component={Tela3} options={{ title: 'Bogatyri' }} />
        <Tab.Screen name="Tela4" component={Tela4} options={{ title: 'The Last Dive of David Shaw' }} />
        <Tab.Screen name="Tela5" component={Tela5} options={{ title: 'Chanllenger Part 1 - Flight' }} />
        <Tab.Screen name="Tela6" component={Tela6} options={{ title: 'Chanllenger Part 2 - A Swan Song' }} />
    </Tab.Navigator>
)
