import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles.js'

var burger = [{ key: 0, title: 'Abdul Hadi' }]

export default function BurgerSlider() {



    const [burger, setBurger] = useState(
        [{
            key: 0,
            title: 'Monstera Patty',
            rating: 4.5,
            price: 9.99,
            image: require('./assets/burger1.jpg')
        },
        {
            key: 1,
            title: 'Hulk Patty',
            rating: 4.5,
            price: 9.99,
            image: require('./assets/burger1.jpg')
        },
        {
            key: 2,
            title: 'Dynamite Patty',
            rating: 4.5,
            price: 9.99,
            image: require('./assets/burger1.jpg')
        },
        {
            key: 3,
            title: 'Nuke Patty',
            rating: 4.5,
            price: 9.99,
            image: require('./assets/burger1.jpg')
        }]
    )

    return (



        <FlatList
            data={burger}
            keyExtractor={item => item.key}
            horizontal={true}
            renderItem={({ item }) => (
                <View style={styles.listContainer}>

                    <View >
                        <Image style={styles.burgerImage} source={item.image} />
                    </View>

                    <View style={styles.titleView}>
                        <Text>{item.title}</Text>
                    </View>
                    <View style={styles.priceView}>
                        <Text>{item.price}</Text>
                    </View>
                </View>



            )}
        />
    );
}

