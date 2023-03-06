import { StyleSheet } from "react-native";

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
        // backgroundColor: 'yellow',
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

export default styles