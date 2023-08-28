import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import estilo from './estilo'

const Botao = ({ value, func }) => {
    return (
      <TouchableOpacity onPress={func}>
        <View style={estilo.keyboardButton}>
          <Text>{value}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  export default Botao;