import React from 'react';
import {styles, Colors} from './styles';
import {Ionicons} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import Home from './../screens/Home';
import AddTask from './../screens/AddTask';
import Account from './../screens/Account';
import Settings from './../screens/Settings';

const Tab = createBottomTabNavigator();

const homeName = "Home";
const addTaskName = "Add Task";
const accountName = "Account";
const settingsName = "Settings";

const NavBar = ({navigation}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === addTaskName) {
              iconName = focused ? 'add' : 'add-outline';

            } else if (rn === accountName) {
              iconName = focused ? 'person' : 'person-outline';
            }
            else if (rn === settingsName) {
                iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.brand,
          tabBarInactiveTintColor: Colors.gray,
          tabBarLabelStyle: styles.NavBarItem,
          tabBarStyle: styles.NavBar,
          headerTitleAlign: 'center',
          headerRight: () => (
            route.name === "Home" && (
            <TouchableOpacity>
              <Icon
                style={{marginRight: 30}}
                name='filter-outline'
                size={30}
                color={Colors.brand}
                // onPress={console.log('hi')}
              />
            </TouchableOpacity> 
            
            )
            )
        })}
        >

        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={addTaskName} component={AddTask} />
        <Tab.Screen name={accountName} component={Account} />
        <Tab.Screen name={settingsName} component={Settings} />

      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default NavBar;
