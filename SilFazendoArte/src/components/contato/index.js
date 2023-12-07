import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from "./styles.js"

const PersonWithWhatsApp = () => {
  const personImage = require('../../../assets/perfil.png');

  const openWhatsApp = () => {
    const phoneNumber = '5511953138408'; // Substitua pelo número de telefone desejado
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(whatsappUrl);
  };

  return (
    <View style={styles.container}>
      <Image source={personImage} style={styles.image} />
      <TouchableOpacity style={styles.whatsappButton} onPress={openWhatsApp}>
        <FontAwesome name="whatsapp" size={24} color="white" style={styles.whatsappIcon} />
        <Text style={styles.whatsappText}>Enviar mensagem no WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};


export default PersonWithWhatsApp;
