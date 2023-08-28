import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import estilo from './estilo'

export default (comp) => {
  const [numeroSoma, setNumeroSoma] = useState(comp.inicialSoma)
  const inc = () => setNumeroSoma(numeroSoma + 25)
  const dec = () => setNumeroSoma(numeroSoma - 25)

  const [numeroMult, setNumeroMult] = useState(comp.inicialMult)
  const incMult = () => setNumeroMult(numeroMult * 2)
  const decMult = () => setNumeroMult(numeroMult / 2)

  return (
    <>
      <Text style={estilo.FontGrande}>{numeroSoma}</Text>
      <Button title="+" onPress={inc}/>
      <Button title="-" onPress={dec}/>

      <Text style={estilo.FontGrande}>{numeroMult}</Text>
      <Button title="*" onPress={incMult}/>
      <Button title="/" onPress={decMult}/>
    </>
  )
}