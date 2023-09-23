import React from 'react'

import Cities from './Cities/Cities'
import City from './Cities/City'
import AddCity from './AddCity/AddCity'

import { color, colors } from './theme'

import {createBottonTabNavigator,
        createStackNavigator } from 'react-navigation'

const options = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
    }
}

const CitiesNav = createStackNavigator({
    Cities: { screen: Cities },
    City: { screen: City }
}, options)

const Tabs = createBottonTabNavigator({
    Cities: { screen: CitiesNav },
    AddCity: { screen: AddCity }
})

export default Tabs