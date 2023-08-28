import React from 'react'
import { Button, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tela1 from './src/views/Tela1'
import Tela2 from './src/views/Tela2'
import Tela3 from './src/views/Tela3'
import Tela4 from './src/views/Tela4'
import Tela5 from './src/views/Tela5'
import Tela6 from './src/views/Tela6'
import Tela7 from './src/views/Tela7'
import PassoStack from './src/componentes/PassoStack'

function TelaPrincipal({ navigation }) {
  return (
    <SafeAreaView style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0AF'
    }}>
      <Text style={{
        color: '#FFF',
        fontSize: 30
      }}> Atividade Prática 6</Text>
      <Text style={{
        color: '#FFF',
        fontSize: 20
      }}> Vicente Santos Gonçalves</Text>
      <Button
        title="Menu"
        onPress={() => navigation.navigate('Menu')} />
    </SafeAreaView>

  )
}

function TelaMenu({ navigation }) {
  return (
    <SafeAreaView style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0F9'
    }}>
      <Text style={{
        color: '#FFF',
        fontSize: 25
      }}> Menu</Text>
      <Button
        title="Tela 1"
        onPress={() => navigation.push('Tela1')} />
      <Button
        title="Tela 2"
        onPress={() => navigation.push('Tela2')} />
      <Button
        title="Tela 3"
        onPress={() => navigation.push('Tela3')} />
      <Button
        title="Tela 4"
        onPress={() => navigation.push('Tela4')} />
      <Button
        title="Tela 5"
        onPress={() => navigation.push('Tela5')} />
      <Button
        title="Tela 6"
        onPress={() => navigation.push('Tela6')} />
      <Button
        title="Tela 7"
        onPress={() => navigation.push('Tela7')} />
      <Button
        title="Fechar Menu"
        onPress={() => navigation.navigate('Principal')} />
    </SafeAreaView>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal"
        screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name="Principal" component={TelaPrincipal} />

        <Stack.Screen
          name="Menu" component={TelaMenu} />

        <Stack.Screen
          name="Tela1"
          options={{ title: 'Tela 1' }}
          component={Tela1} >{comp => (
            <PassoStack {...comp} avancar="Tela2" voltar>
              <Tela1/>
            </PassoStack>
          )}</Stack.Screen>

        <Stack.Screen
          name="Tela2"
          options={{ title: 'Tela 2' }}
          component={Tela2} >{comp => (
            <PassoStack {...comp} avancar="Tela3" voltar>
              <Tela2/>
            </PassoStack>
          )}</Stack.Screen>

        <Stack.Screen
          name="Tela3"
          options={{ title: 'Tela 3' }}
          component={Tela3} >{comp => (
            <PassoStack {...comp} avancar="Tela4" voltar>
              <Tela3/>
            </PassoStack>
          )}</Stack.Screen>

        <Stack.Screen
          name="Tela4"
          options={{ title: 'Tela 4' }}
          component={Tela4} >{comp => (
            <PassoStack {...comp} avancar="Tela5" voltar>
              <Tela4/>
            </PassoStack>
          )}</Stack.Screen>

        <Stack.Screen
          name="Tela5"
          options={{ title: 'Tela 5' }}
          component={Tela5} >{comp => (
            <PassoStack {...comp} avancar="Tela6" voltar>
              <Tela5/>
            </PassoStack>
          )}</Stack.Screen>

        <Stack.Screen
          name="Tela6"
          options={{ title: 'Tela 6' }}
          component={Tela6} >{comp => (
            <PassoStack {...comp} avancar="Tela7" voltar>
              <Tela6/>
            </PassoStack>
          )}</Stack.Screen>

        <Stack.Screen
          name="Tela7"
          options={{ title: 'Tela 7' }}
          component={Tela7} >{comp => (
            <PassoStack {...comp} voltar>
              <Tela7/>
            </PassoStack>
          )}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}