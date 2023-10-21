// Application from "React Native in Action" book
// New comment
// Added again 3rd comment - modified comment
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Tabs from './src';

export default class App extends Component {
    state = {
        cities: []
    }

    // Adds a City
    addCity = (city) => {
        const cities = this.state.cities;
        cities.push.apply(city);
        this.setState({ cities });
    }

    // Adds a City Location
    addLocation = (location, city) => {
        const index = this.state.cities.findIndex( item => {
            return item.id === city.id
        })
        const chosenCity = this.state.cities[index];
        chosenCity.locations.push(location);
        const cities = [
            ...this.state.cities.slice(0, index),
            chosenCity,
            ...this.state.cities.slice(index + 1)
        ];
        this.setState({ cities });
    }

    // Render - this function renders the screen elements
    // Returns the Tabs with the different tabs
    // otro comentario nuevo cambio
    // UNo mas
    render() {
        return (
            <Tabs screenProps={{
                cities: this.state.cities,
                addCity: this.addCity,
                addLocation: this.addLocation
            }}
            />
        )
    }
}