import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'; // Utilisation de ImagePicker d'Expo

export default function ContractSection({ contractImages, setContractImages }) {
  
  // Fonction pour ouvrir la galerie et sélectionner une image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setContractImages([...contractImages, result.assets[0].uri]); // Ajouter l'image sélectionnée à la liste
    }
  };

  return (
    <View style={styles.contractContainer}>
      <Text style={styles.sectionTitle}>Contract</Text>
      <Text style={styles.sectionSubtitle}>
        Possibilité d'ajouter un contrat prérempli sans nom, prénom, date de naissance, ville, ou autre information. Laissez ces cases vides, elles seront remplies automatiquement par le candidat.
      </Text>

      <View style={styles.contractPreviewContainer}>
        {/* Bouton pour ajouter un contrat depuis la galerie */}
        <TouchableOpacity style={styles.addContractButton} onPress={pickImage}>
          <Ionicons name="add-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Affichage des contrats sélectionnés */}
        {contractImages.map((imageUri, index) => (
          <Image key={index} source={{ uri: imageUri }} style={styles.contractPreview} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contractContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionSubtitle: {
    color: '#888',
    fontSize: 14,
    marginBottom: 10,
  },
  addContractButton: {
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginBottom: 16,
    marginRight: 18,
  },
  contractPreviewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  contractPreview: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 18,
  },
});
