import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ProductItem = ({ imageSource, name, originalPrice, discountPercent, discountedPrice }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.originalPrice}>{originalPrice}</Text>
        <Text style={styles.discountPercent}>{discountPercent}% OFF</Text>
      </View>
      <Text style={styles.discountedPrice}>{discountedPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ProductItem;
