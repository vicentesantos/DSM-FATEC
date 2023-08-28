import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView
} from 'react-native';



const App = () => {
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <Image
        style={styles.logo}
        source={require('./assets/fatec-zl.png')}
      />
      <Text style={styles.title}>Atividade Prática 1</Text>
      <Text style={styles.subTitle}>Vicente Santos</Text>
    </ScrollView>
  </SafeAreaView>

};

const styles = StyleSheet.create({
  container:{
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  scrollView:{
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  text:{
    fontSize: 12,
    alignContent: 'center'
  },
  logo:{
    width: 65,
    height: 30,
  },
  title: {
    fontSize: 36,
    color: 'white',
  },
  subTitle:{
    fontSize: 20,
    color: '#fff',
  },
});

export default App;