import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function Formulario() {
    // Creamos el estado para el campo de nombre
    const [name, setName] = useState('');
    // Creamos el estado para el campo de apellido
    const [last_name, setLast_Name] = useState('');
    // Creamos el estado para el campo de edad
    const [age, setAge] = useState('');
    // Creamos el estado para el campo de numero de invitados
    const [companions, setCompanions] = useState('');

    const handleLogin = () => {
        axios.post('http://192.168.56.1:8000/api/guests', {
            name: name,
            last_name: last_name,
            age: age,
            companions: companions
        })
        .then(function (response) {
            // Alerta de inicio de sesión exitoso en web
            console.log(response)
            Alert.alert('Registro exitoso');
            
            // Limpiamos los campos
            setName('');
            setLast_Name('');
            setAge('');
            setCompanions('');
        })
        .catch(function (error) {
            console.log(error.response.data.message);
        });
    }

  return (
    <View style={styles.container}>
       <Text style={{ fontSize: 30, marginBottom: 40 }}>Formulario de ingreso</Text>

        {/* Campo para ingresar el nombre */}
       <TextInput placeholder='Ingrese su nombre' onChangeText={(text) =>setName(text)} style={styles.input}></TextInput>
        
        {/* Campo para ingresar el apellido */}
       <TextInput placeholder='Ingrese sus apellidos' onChangeText={(text) =>setLast_Name(text)} style={styles.input}></TextInput>
        
        {/* Campo para ingresar el edad */}
        <TextInput placeholder='Ingrese su edad' onChangeText={(text) =>setAge(text)} keyboardType='numeric' style={styles.input}></TextInput>
        
        {/* Campo para ingresar el edad */}
       <TextInput placeholder='Ingrese cantidad de invitados' onChangeText={(text) =>setCompanions(text)} keyboardType='numeric' style={styles.input}></TextInput>
            
        {/* Botón para iniciar sesión */}
        <Button title='Registrarse' onPress={handleLogin}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    // Estilos para el contenedor
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Estilos para el campo de texto
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})