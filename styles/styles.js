import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, // O container ocupa toda a tela disponível
    justifyContent: 'center', // Centraliza os elementos verticalmente
    alignItems: 'center', // Centraliza os elementos horizontalmente
    backgroundColor: 'lightblue', // Define a cor de fundo da tela
    padding: 20, // Adiciona preenchimento em torno dos elementos
  },
  title: {
    fontSize: 32, // Tamanho da fonte do título
    fontWeight: 'bold', // Torna o título em negrito
    marginBottom: 20, // Adiciona um espaço abaixo do título
    textAlign: 'center', // Centraliza o título
  },
  inputContainer: {
    flexDirection: 'row', // Organiza o botão e o input na mesma linha
    alignItems: 'center', // Alinha os elementos verticalmente no centro
    width: '80%', // Define a largura do container com o input
    marginBottom: 20, // Adiciona um espaço abaixo do container de input
  },
  negativeButton: {
    backgroundColor: 'blue', // Cor de fundo do botão negativo
    paddingHorizontal: 12, // Adiciona preenchimento horizontal ao botão
    paddingVertical: 10, // Adiciona preenchimento vertical ao botão
    borderRadius: 10, // Arredonda os cantos do botão
    marginRight: 10, // Dá um espaço à direita do botão, afastando-o do input
  },
  input: {
    height: 50, // Define a altura do campo de input
    borderColor: 'black', // Cor da borda do campo de input
    borderWidth: 1, // Largura da borda do campo de input
    borderRadius: 10, // Arredonda os cantos do campo de input
    flex: 1, // Faz o campo de input ocupar o restante do espaço disponível
    paddingHorizontal: 15, // Adiciona preenchimento horizontal ao campo de input
    fontSize: 18, // Tamanho da fonte dentro do campo de input
    backgroundColor: 'white', // Cor de fundo do campo de input
  },
  button: {
    backgroundColor: 'blue', // Cor de fundo do botão de conversão
    paddingVertical: 12, // Adiciona preenchimento vertical ao botão
    borderRadius: 10, // Arredonda os cantos do botão
    width: '80%', // Largura do botão
    alignItems: 'center', // Centraliza o conteúdo dentro do botão
  },
  buttonText: {
    color: 'white', // Cor do texto do botão
    fontSize: 18, // Tamanho da fonte do texto do botão
    fontWeight: 'bold', // Torna o texto do botão em negrito
  },
  result: {
    fontSize: 22, // Tamanho da fonte do resultado da conversão
    marginTop: 20, // Espaço acima do resultado
    textAlign: 'center', // Centraliza o resultado
  },
});

export default styles;
