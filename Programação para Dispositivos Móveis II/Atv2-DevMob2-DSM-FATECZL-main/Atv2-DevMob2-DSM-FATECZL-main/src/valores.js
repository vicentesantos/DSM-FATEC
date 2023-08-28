import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export default () => {
    const [valMin, newMin] = useState('');
    const [valMax, newMax] = useState('');
    const t = () => {
        return Math.floor(Math.random() * (valMax - valMin) + valMin)
    }

    return (
        <View style={{ width: 400 }} >
            <Text style={styles.title}>
                Valor Mínimo
            </Text>
            <TextInput
                style={styles.min}
                placeholder="Valor Mínimo"
                onChangeText={newText => newMin(newText)}
                defaultValue={valMin}
            />
            <Text style={styles.title}>
                Valor Máximo
            </Text>
            <TextInput
                style={styles.max}
                placeholder="Valor Máximo"
                onChangeText={newText => newMax(newText)}
                defaultValue={valMax}
            />
            <Text style={styles.title}>
                Resultado
            </Text>
            <Text style={styles.result}>
               {t()}, {t()} , {t()} , {t()} , {t()}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 15,
    },
    min: {
        borderColor: '#000',
        borderWidth: 2,
        padding: 10,
        fontSize: 16,
        borderRadius: 20,
        height: 60,
        margin: 10
    },
    max: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        fontSize: 16,
        borderRadius: 20,
        height: 60,
        margin: 10
    },
    result: {
        textAlign: 'center',
        fontSize: 14,
        paddingTop: 15,
    },
})