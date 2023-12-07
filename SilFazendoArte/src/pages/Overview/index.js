import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const data = [
  { title: 'Pulseira Ametista', image: require('../../../assets/produtos/PulseiraAmetista.png') },
  { title: 'Pulseira Cristal', image: require('../../../assets/produtos/PulseiraCristal.png') },
  { title: 'Jogo Americano Verde', image: require('../../../assets/produtos/JogoAmericanoVerde.jpg') },
  { title: 'Tapete Bordado', image: require('../../../assets/produtos/TapeteBordado.png') },
  { title: 'Lenço Carion', image: require('../../../assets/produtos/LencoCarion.png') },
  // Adicione mais itens conforme necessário
];

export function Overview() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} autoplayTimeout={2}>
          {data.map((item, index) => (
            <View key={index} style={styles.slide}>
              <Text style={styles.title}>{item.title}</Text>
              <Image source={item.image} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {
      height: '80%', // 80% da altura da tela
    },
    slide: {
      flex: 1,
      justifyContent: 'flex-start', // Títulos na parte superior
      alignItems: 'center',
    },
    image: {
      width: '80%', // 80% da largura da tela
      height: '80%', // 80% da altura da tela
      resizeMode: 'contain', // 'contain' para evitar cortes
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
      color: 'white', // Cor do texto
      padding: 10,
      color: 'pink',
      textAlign: 'center',
      width: '100%', // Largura total
      position: 'absolute', // Posicionamento absoluto sobre a imagem
      top: 20, // Distância do topo da imagem
      backgroundColor: 'transparent', // Fundo transparente 
    },
  });
  