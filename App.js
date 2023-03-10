import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles.js'
import BurgerSlider from './BurgerSlider.js'
import Menu from './lab-2-section-list/Menu.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Menu />
    </View>
  );
}

