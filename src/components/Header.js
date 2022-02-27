import React from 'react';
import { StyleSheet, View , Text } from 'react-native';
const Header=()=>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>Album</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        width: '100%',
        height: 80,
        marginTop:30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#bfd8ff',
        shadowColor: '#484848',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10, //Android only
    },
    headerText:{
        fontSize:28,
        fontWeight:"bold"
    },
});
export default Header;