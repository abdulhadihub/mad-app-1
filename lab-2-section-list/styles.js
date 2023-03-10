import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: 'black',
        // borderWidth: 1,
        marginTop: 50,
    },

    itemView: {
        flex: 1,
        height: 30,
        backgroundColor: 'white'
    },

    itemText: {
        backgroundColor: 'grey',
        color: 'white',
        fontSize: 18
    },

    sectionHeaderView: {
        flex: 1,
        height: 30,
        marginBottom: 10,
        backgroundColor: 'green'
    },

    sectionHeaderText: {
        backgroundColor: 'green',
        color: 'white',
        fontSize: 22
    },



});

export default styles