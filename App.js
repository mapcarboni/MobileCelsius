import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import styles from './styles/styles';

const Conversor = () => {
  // Declarando os estados para armazenar a temperatura em Celsius e o resultado em Fahrenheit
  const [celsius, setCelsius] = useState(''); // Estado para a temperatura em Celsius
  const [fahrenheit, setFahrenheit] = useState(null); // Estado para o resultado em Fahrenheit

  // Função para converter Celsius para Fahrenheit
  const converter = () => {
    Keyboard.dismiss(); // Fecha o teclado assim que o botão de converter for pressionado
    if (celsius !== '') { // Verifica se a entrada de Celsius não está vazia
      // Fórmula de conversão: (Celsius * 9/5) + 32
      const resultado = (parseFloat(celsius) * 9/5) + 32;
      setFahrenheit(resultado.toFixed(2)); // Armazena o valor de Fahrenheit com 2 casas decimais
    }
  };

  // Função para adicionar o sinal negativo no início do valor de celsius
  const adicionarNegativo = () => {
    if (celsius.charAt(0) !== '-') {
      setCelsius('-' + celsius); // Adiciona o sinal de negativo no começo do valor
    }
  };

  return (
    <View style={styles.container}>
      {/* Título explicativo do Conversor */}
      <Text style={styles.title}>Conversor Celsius → Fahrenheit</Text>

      {/* Contêiner para o botão de negativo e o input na mesma linha */}
      <View style={styles.inputContainer}>
        {/* Botão de sinal negativo que chama a função 'adicionarNegativo' */}
        <TouchableOpacity style={styles.negativeButton} onPress={adicionarNegativo}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        {/* Campo de input para o valor de Celsius */}
        <TextInput
          style={styles.input} // Aplica os estilos ao input
          placeholder="Digite em °C" // Texto que aparece dentro do input quando vazio
          keyboardType="decimal-pad" // Define o tipo de teclado como numérico
          value={celsius} // Vincula o valor do input ao estado 'celsius'
          onChangeText={setCelsius} // Atualiza o estado 'celsius' quando o texto no input mudar
        />
      </View>

      {/* Botão para converter a temperatura */}
      <TouchableOpacity style={styles.button} onPress={converter}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>

      {/* Exibe o resultado da conversão para Fahrenheit */}
      {fahrenheit !== null && (
        // Exibe o resultado apenas se o valor de Fahrenheit foi calculado
        <Text style={styles.result}>{fahrenheit} °F</Text>
      )}
    </View>
  );
};

export default Conversor;
