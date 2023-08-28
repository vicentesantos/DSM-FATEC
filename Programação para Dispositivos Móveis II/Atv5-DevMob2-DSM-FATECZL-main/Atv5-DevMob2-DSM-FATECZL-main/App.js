import React, { useState } from 'react'
import { Text, View} from 'react-native'
import estilo from './src/estilo'
import alfabeto from './src/Alfabeto'
import Botao from './src/Botao'

export default function App() {
  const [maiuscula, setMaiuscula] = useState();
  const [minuscula, setMinuscula] = useState();
  const [pronuncia, setPronuncia] = useState();

  const handlePress = (value) => {
    setMaiuscula(value.maiuscula);
    setMinuscula(value.minuscula);
    setPronuncia(value.pronuncia);
  };

  return(
    <View style={estilo.container}>
      <View style={estilo.info}>
        {maiuscula ? (
          <>
            <Text style={estilo.infoText}>Letra maiúscula: {maiuscula}</Text>
            <Text style={estilo.infoText}>Letra minúscula: {minuscula}</Text>
            <Text style={estilo.infoText}>Pronúnica: {pronuncia}</Text>
          </>
        ) : (
          <Text style={estilo.infoText}>Selecione uma letra para ver sua escrita em maiúscula, minúscula e sua pronúncia</Text>
        )}
      </View>
      <View style={estilo.keyboard}>
        {alfabeto.map((value) => (
          <Botao
            key={value.maiuscula}
            value={value.maiuscula}
            func={() => handlePress(value)}
          />
        ))}
      </View>
    </View>
  );
}