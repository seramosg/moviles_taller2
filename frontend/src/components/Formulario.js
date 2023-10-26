import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Formulario() {
    const [name, setName] = useState('');
    // Creamos el estado para el campo de apellido
    const [lastname, setLastName] = useState('');
    // Creamos el estado para el campo de edad
    const [age, setAge] = useState('');

    // Creamos el estado para el campo de numero de invitados
    const [guestNumber, setguestNumber] = useState('');

    const handleLogin = () => {
        axios.post('http://172.20.10.2:8000/api/users', {
            name: name,
            lastname: lastname,
            age: age,
            guestNumber: guestNumber
        })
        .then(function (response) {
            // Alerta de inicio de sesión exitoso en web
            Alert.alert('Registro exitoso');
            // navigation.navigate('Home');
        })
        .catch(function (error) {
            console.log(error);
        });
    }

  return (
    <View>
       <Text style={{ fontSize: 30, marginBottom: 40 }}>Formulario</Text>

        {/* Campo para ingresar el nombre */}
       <TextInput placeholder='Ingrese su nombre' onChangeText={(text) =>setName(text)} ></TextInput>
        
        {/* Campo para ingresar el apellido */}
       <TextInput placeholder='Ingrese sus apellidos' onChangeText={(text) =>setLastName(text)} ></TextInput>
        
        {/* Campo para ingresar el edad */}
       <TextInput placeholder='Ingrese su edad' onChangeText={(text) =>setAge(text)} keyboardType='numeric' ></TextInput>
        
        {/* Campo para ingresar el edad */}
       <TextInput placeholder='Ingrese el numero de invitados' onChangeText={(text) =>setguestNumber(text)} keyboardType='numeric' ></TextInput>
            
        {/* Botón para iniciar sesión */}
        <Button title='Registrarse' onPress={handleLogin}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})