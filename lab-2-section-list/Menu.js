import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, SectionList } from 'react-native';
import styles from './styles.js'


export default function Menu() {

    const [select, setSelect] = useState(false)
    const onSelect = (index) => {
        console.log(index);
        setSelect(!select);
    }
    const [data, setData] = useState(
        [
            {
                key: 0,
                title: 'Starters',
                data: [{ key: 0, title: 'Salad' }, { key: 1, title: 'Soup' }, { key: 2, title: 'Fish Cracker' }]
            },

            {
                key: 1,
                title: 'Dessi Food',
                data: [{ key: 0, title: 'Karahi' }, { key: 1, title: 'Kabab' }]
            },

            {
                key: 2,
                title: 'Fast Food',
                data: [{ key: 0, title: 'Burger' }, { key: 1, title: 'Pizza' }, { key: 2, title: 'Paasta' }, { key: 3, title: 'Shawarma' }]
            },

            {
                key: 3,
                title: 'Drinks',
                data: [{ key: 0, title: 'Coke' }, { key: 1, title: 'Fanta' }, { key: 2, title: 'Mint' }, { key: 3, title: 'Sprite' }]
            },

        ])

    return (
        <View style={styles.container}>
            <SectionList
                sections={data}
                keyExtractor={(item, index) => item + index}

                renderSectionHeader={({ section: { title } }) => (

                    <View style={styles.sectionHeaderView}>
                        <Text style={styles.sectionHeaderText}>{title}</Text>
                    </View>

                )}

                renderItem={({ item }) => (
                    <View style={styles.itemView}>
                        <TouchableOpacity key={item.key} style={select ? { backgroundColor: 'green' } : { backgroundColor: 'lightgrey' } + { color: 'white', fontSize: 22 }} onPress={() => onSelect(item.key)}>
                            <Text  >{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

