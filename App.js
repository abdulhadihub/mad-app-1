import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-web';
// import styles from 'app.css'

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
        <TextInput style={styles.usernameField} placeholder='Password' />

      </View>

      <View style={styles.buttonsView}>
        <Button style={styles.signUpBtn} title='Sign Up' />
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
  },
  userNameLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  buttonsView: {
    flex: 0.3,
    // backgroundColor: 'green',
  },
  signUpBtn: {
    borderRadius: 100,

  }
});
