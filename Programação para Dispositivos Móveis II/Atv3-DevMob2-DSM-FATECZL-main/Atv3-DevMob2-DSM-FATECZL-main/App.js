import React from 'react'
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import { BtCol1, BtCol2, BtCol3 } from './src/Botao'


const App = () => {
  return (
    <SafeAreaView style={style.app}>
      <>
      <View ><BtCol1/></View>
      <View ><BtCol2/></View>
      <View ><BtCol3/></View>
      </>

    </SafeAreaView>
    

  )
}

const style = StyleSheet.create({


  app: {
    paddingTop: StatusBar.currentHeight,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#AC9',
    flexGrow: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 120,    
  },

})

export default App;