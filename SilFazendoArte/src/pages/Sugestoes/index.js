import  React,{ useState, useEffect } from 'react';
import { View, Text,TouchableOpacity,TextInput,Image ,Alert,FlatList} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//dependencia do mapa
import MapView from 'react-native-maps';

//estilos
import { styles } from "./styles.js"

export function Sugestoes() {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [commentsList, setCommentsList] = useState([]); // Adicionado estado para a lista de comentários
  useEffect(() => {
    // Solicitar permissão ao usuário para acessar a galeria
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'A permissão para acessar a galeria é necessária.');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setUserImage(result.uri);
    }
  };

  const handleEnviarComentario = () => {
    // Lógica para enviar o comentário
    if (!name.trim() || !comment.trim()) {
      Alert.alert('Erro', 'O nome e o comentário não podem estar vazios.');
      return;
    }

    // Adiciona o novo comentário à lista de comentários
    setCommentsList([...commentsList, { name, comment, image: userImage }]);

    // Limpa os estados para o próximo comentário
    setName('');
    setComment('');
    setUserImage(null);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , marginTop: '10%' }}>
      {/* Exibição da imagem do usuário */}
      {userImage && <Image source={{ uri: userImage }} style={{ width: 200, height: 200, marginBottom: 10 }} />}

      {/* Botão para escolher uma imagem */}
      {/* <TouchableOpacity onPress={pickImage} style={{ backgroundColor: 'skyblue', padding: 10, borderRadius: 5, marginBottom: 10 }}>
        <Text style={{ color: 'white' }}>Escolher Imagem</Text>
      </TouchableOpacity> */}

      {/* Campo de entrada para o nome */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5, width: 200 }}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Campo de entrada para o comentário */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5, width: 200 }}
        placeholder="Digite seu comentário"
        value={comment}
        onChangeText={(text) => setComment(text)}
      />

      {/* Botão para enviar o comentário */}
      <TouchableOpacity onPress={handleEnviarComentario} style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Enviar Comentário</Text>
      </TouchableOpacity>

      {/* Lista de comentários */}
      <FlatList
        data={commentsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            {item.image && <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />}
            <Text>{`${item.name}: ${item.comment}`}</Text>
          </View>
        )}
      />
    </View>
  );
}