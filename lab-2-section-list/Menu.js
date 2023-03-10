import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, SectionList } from 'react-native';
import styles from './styles.js'


export default function Menu() {

    const [select, setSelect] = useState([])
    const [active, setActive] = useState(false)
    const onSelect = (index) => {
        if (select.includes(index)) {
            setSelect(select.filter((item) => item !== index));
            return null;
        }
        if (select.length === 0) {
            setSelect([index]);
            return;
        }
        setSelect([...select, index]);
        return;

    }

    const isActive = (index) => {
        if (select.includes(index)) {
            return true;
        }
        else {
            return false;
        }
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
                data: [{ key: 12, title: 'Karahi' }, { key: 3, title: 'Kabab' }]
            },

            {
                key: 2,
                title: 'Fast Food',
                data: [{ key: 4, title: 'Burger' }, { key: 5, title: 'Pizza' }, { key: 6, title: 'Paasta' }, { key: 7, title: 'Shawarma' }]
            },

            {
                key: 3,
                title: 'Drinks',
                data: [{ key: 8, title: 'Coke' }, { key: 9, title: 'Fanta' }, { key: 10, title: 'Mint' }, { key: 11, title: 'Sprite' }]
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
                        <TouchableOpacity key={item.key} onPress={() => onSelect(item.key)}>
                            <Text style={isActive(item.key) ? styles.selectedItemText : styles.itemText}  >{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

