import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CoinsStack } from './src/components/coins/CoinsStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import colors from './src/res/colors'
import { color } from 'react-native-reanimated'


const Tabs = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Coins: 'Coins'
            }
            return (
              <Image
                source={require('./src/assets/rn_assets/bank.png')}
                name={icons[route.name]}
                color={color}
                size={size}
              />
            )
          }
        })}
      >
        <Tabs.Screen
          name='Coins'
          component={CoinsStack}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default App