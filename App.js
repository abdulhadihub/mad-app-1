import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';
// import styles from 'styles.js'

export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  logoView: {
    flex: 0.2,
    padding: 10,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  textfieldsView: {
    flex: 0.5,
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  usernameField: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 4,
    borderRadius: 3,
  },
  userNameLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  buttonsView: {
    flex: 0.3,
    // backgroundColor: 'green',
  },
  signUpBtn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    zIndex: 1,
    fontWeight: 'bold',
  }
});
