import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/components/theme/GlobalStyles';

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         operacionesBasicas,resultado, Operadores  } = useCalculadora();

  return (
  
    <View style={GlobalStyles.container}>    
      <Pantalla espan1={true} text={formula} />
      <Pantalla espan1={false} text={numeroAnterior} />
     
      
      
      <StatusBar style="auto" />

    <View style={GlobalStyles.fila}>
      <BotonOperacion label='C' stilo='btnotros' onPress={clean}></BotonOperacion>
      <BotonOperacion label='+/-' stilo='btnotros' onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion label='del' stilo='btnotros' onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion label='/' stilo='btnfun' onPress={() => operacionesBasicas(Operadores.dividir)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='7' stilo="btnum"  onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion label='8' stilo="btnum" onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion label='9' stilo="btnum" onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion label='x' stilo="btnfun" onPress={() => operacionesBasicas(Operadores.multiplicar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='4' stilo="btnum" onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion label='5' stilo="btnum" onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion label='6' stilo="btnum" onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion label='-' stilo="btnfun" onPress={() =>operacionesBasicas(Operadores.restar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='1' stilo="btnum" onPress={() =>construirNumero('1')}></BotonOperacion>
      <BotonOperacion label='2' stilo="btnum" onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion label='3' stilo="btnum" onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion label='+' stilo="btnfun" onPress={() =>operacionesBasicas(Operadores.sumar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='0' stilo="btnum" width={165} onPress={() =>construirNumero('0')}></BotonOperacion>
      <BotonOperacion label='.' stilo="btnum" onPress={() =>construirNumero('.')}></BotonOperacion>
      <BotonOperacion label='=' stilo="btnfun" onPress={resultado}></BotonOperacion>
    </View>
    </View>
  );
}


