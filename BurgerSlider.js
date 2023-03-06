import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
import Signup from './Signup.js';
import styles from './styles.js'

var burger = [{ key: 0, title: 'Abdul Hadi' }]

export default function BurgerSlider() {

    // const [burger, setBurger] = useState([{ key: 0, title: 'Abdul Hadi' }])

    // const [burger, setBurger] = useState(
    //     [{
    //         key: 0,
    //         title: 'Monstera Patty',
    //         rating: 4.5,
    //         price: 9.99,
    //         image: './assets/burger1.jpg'
    //     },
    //     {
    //         key: 1,
    //         title: 'Hulk Patty',
    //         rating: 4.5,
    //         price: 9.99,
    //         image: './assets/burger1.jpg'
    //     },
    //     {
    //         key: 2,
    //         title: 'Dynamite Patty',
    //         rating: 4.5,
    //         price: 9.99,
    //         image: './assets/burger1.jpg'
    //     },
    //     {
    //         key: 3,
    //         title: 'Nuke Patty',
    //         rating: 4.5,
    //         price: 9.99,
    //         image: './assets/burger1.jpg'
    //     }]
    // )

    return (
        <View>

            <Text> Hello</Text>
            <Text> Hello</Text>
            <Text> Hello</Text>
            <Text> Hello</Text>

            <FlatList
                data={burger}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                    <View>
                        <Text> {item.titlek} </Text>
                    </View>
                )}
            />
            {/* <FlatList
                data={burger}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                    <View>
                        <Text>Hello</Text>
                    </View>
                )}
            /> */}
        </View>
    );
}

