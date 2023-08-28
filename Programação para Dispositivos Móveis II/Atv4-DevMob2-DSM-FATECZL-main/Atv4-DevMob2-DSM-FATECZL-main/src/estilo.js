import { StyleSheet, StatusBar } from 'react-native'

export default StyleSheet.create({
  App: {
      backgroundColor: '#AC9',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: StatusBar.currentHeight,
      marginTop: StatusBar.currentHeight,
    },
  FontGrande:{
    fontSize: 30,
    fontFamily: 'Times New Roman',
    paddingTop: 25,
  },
  FontMedia: {
    fontSize: 20,
    fontFamily: 'Arial',
  },
})