import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Example01 = () => {
  const [fact, setFact] = useState(null);

  const getFact = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data);
    } catch (error) {
      console.error('Error al obtener el hecho del gato', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={getFact}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get cat fact!</Text>
      </TouchableOpacity>
      {fact ? (
        <Text style={styles.fact}>{fact.fact}</Text>
      ) : (
        <Text style={styles.message}>Click to get cat fact!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 15,
  },
  button: {
    backgroundColor: '#444',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center"
  },
  fact: {
    fontSize: 24,
    color: '#FFA500', // Amarillo
  },
  message: {
    fontSize: 24,
    color: '#FF0000', // Rojo
  },
});

export default Example01;
