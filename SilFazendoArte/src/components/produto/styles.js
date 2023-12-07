import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    width: windowWidth / 2 - 20, // Dividindo a largura da tela por 2 e subtraindo a margem
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginRight: 16, // Adicionando margem à direita para separar os produtos
  },
  image: {
    width: '100%',
    aspectRatio: 1, // Para manter a proporção quadrada
    maxHeight: 200, // Defina o tamanho máximo da imagem aqui
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountPercent: {
    color: 'red',
    fontWeight: 'bold',
  },
  discountedPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});