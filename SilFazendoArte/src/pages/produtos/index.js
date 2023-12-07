import * as React from 'react';
import { View, Text, ScrollView, TextInput, FlatList } from 'react-native';
import { styles } from "./styles.js";
import Produto from "../../components/produto/index.js";

export function Produtos({ navigation }) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const produtos = [
  {
    id: 1,
    category: 'Jogos americanos',
    items: [
      {
        id: 1,
        imageSource: require('../../../assets/produtos/JogoAmericanoSimples.jpg'),
        name: 'Jogo Americano Simples',
        originalPrice: 'R$ 30',
        discountPercent: '10',
        discountedPrice: 'R$ 27',
      },
      {
        id: 2,
        imageSource: require('../../../assets/produtos/JogoAmericanoVerde.jpg'),
        name: 'Jogo Americano Verde',
        originalPrice: 'R$ 40',
        discountPercent: '5',
        discountedPrice: 'R$ 38',
      },
    ],
  },
  {
    id: 2,
    category: 'Tapetes',
    items: [
      {
        id: 3,
        imageSource: require('../../../assets/produtos/TapeteCoracao.png'),
        name: 'Tapete Coração',
        originalPrice: 'R$ 75',
        discountPercent: '10',
        discountedPrice: 'R$ 67,5',
      },
      {
        id: 4,
        imageSource: require('../../../assets/produtos/TapeteBordado.png'),
        name: 'Tapete Bordado',
        originalPrice: 'R$ 60',
        discountPercent: '30',
        discountedPrice: 'R$ 42',
      },
    ],
  },
  {
    id: 3,
    category: 'Pulseiras',
    items: [
      {
        id: 5,
        imageSource: require('../../../assets/produtos/PulseiraAmetista.png'),
        name: 'Pulseira Ametista',
        originalPrice: 'R$ 23',
        discountPercent: '5',
        discountedPrice: 'R$ 21,85',
      },
      {
        id: 6,
        imageSource: require('../../../assets/produtos/PulseiraCristal.png'),
        name: 'Pulseira Cristal',
        originalPrice: 'R$ 59',
        discountPercent: '9',
        discountedPrice: 'R$ 53,69',
      },
    ],
  },
];


  const filteredProdutos = produtos
    .filter(categoria =>
      categoria.items.some(produto =>
        produto.name && produto.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  const renderItem = ({ item }) => (
    <>
      <Text style={styles.titleProduto}>{item.category}:</Text>
      <View style={styles.row}>
        <FlatList
          data={item.items}
          keyExtractor={(produto) => produto.id.toString()}
          renderItem={({ item: produto }) => (
            <Produto
              imageSource={produto.imageSource}
              name={produto.name}
              originalPrice={produto.originalPrice}
              discountPercent={produto.discountPercent}
              discountedPrice={produto.discountedPrice}
            />
          )}
        />
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Veja os produtos</Text>
        <Text style={styles.subHeaderText}>Promoções e preços incríveis</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar produto..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <FlatList
        data={filteredProdutos}
        keyExtractor={(categoria) => categoria.id.toString()}
        renderItem={renderItem}
      />

      <Text style={styles.descriptionProdutos}>Entre em contato para mais peças e descontos exclusivos</Text>
    </View>
  );
}
