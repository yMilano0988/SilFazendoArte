import * as React from 'react';
import { View, Text } from 'react-native';

//dependencia do mapa
import MapView from 'react-native-maps';

//estilos
import { styles } from "./styles.js"


export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Venha nos conhecer</Text>
        <Text style={styles.subHeaderText}>Veja nossa localização</Text>
      </View>

      <Text style={styles.description}>
      Sil Fazendo Arte dês de 2023 esta localizada na R. Boa Vista, 825 - Boa Vista, São Caetano do Sul - SP, 09572-300
      </Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.644388983150854,
          longitude: -46.55832587117082,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034,
        }}
      />

      <Text style={styles.description}>
      Sil Fazendo Arte representa a força e dedicação de uma mulher forte, que entrega designs e beleza para seus clientes, sem esquecer de seus valores como o comprometimento, sustentabilidade, responsabilidade social e a satisfação de seus clientes. Com suas mãos nascem criações que ajudam a contar a história de uma designer em busca de experimentações e novos significados para seu trabalho. 
      </Text>

    </View>
  );
}