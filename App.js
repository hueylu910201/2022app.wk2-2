import { StatusBar } from 'expo-status-bar';
// import React from "node_modules";
import { StyleSheet, Text, View , SafeAreaView } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <Header />

      <View style={styles.title}>
        <View>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle:{
    backgroundColor:"#F8F8F8",
    justifyContent:"center",
    alignItems:"center",
    height:60,
    shadowColor:"#000",
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.2,
    elevation:5,
    marginTop:5,
  },
  textStyle:{
    fontSize:20,
  },
  title:{
    flexDirection:"row",
    justifyContent:"flex-start",
  },
});
