import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';
import Signup from './Signup.js';
import styles from './styles.js'
import BurgerSlider from './BurgerSlider.js'

export default function App() {
  return (
    <View>
      <BurgerSlider />

      {/* <Text> In The name of Allah </Text> */}
    </View>
  );
}

