import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';
import styles from './styles.js'

export default function Signup() {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>

        <Image
          style={styles.tinyLogo}
          source={require('./assets/logo.png')}
        />
      </View>
      <View style={styles.textfieldsView}>
        <Text style={styles.userNameLabel}>Please Enter your User Name:</Text>
        <TextInput style={styles.usernameField} placeholder='Username' />

        <Text style={styles.userNameLabel}>Please Enter your Password:</Text>
        <TextInput secureTextEntry={true} style={styles.usernameField} placeholder='Password' />

      </View>

      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.signUpBtn}>


          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

