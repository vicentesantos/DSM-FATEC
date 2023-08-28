import React from 'react'
import { View} from 'react-native'
import Contador from './src/contador'/* Descobrir o que está causando erro NaN */
import estilo from './src/estilo' 

export default () => (
  <View style={estilo.App}>
    <Contador inicialSoma={0} inicialMult={1} />
  </View>
)