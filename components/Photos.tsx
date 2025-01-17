import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function Photos({ selectedPhotos, setSelectedPhotos }) {
  const pickImage = async () => {
    // Demander la permission d'accéder à la galerie
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // Ouvrir la galerie pour sélectionner une photo
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedPhotos([...selectedPhotos, ...result.assets.map(asset => asset.uri)]); // Ajouter les photos sélectionnées
    }
  };

  return (
    <View>
      <Text style={styles.label}>Photos</Text>
      <Text style={styles.photoCount}>Photos {selectedPhotos.length}/10</Text>

      <View style={styles.photoSection}>
        <TouchableOpacity style={styles.addPhotoButton} onPress={pickImage}>
          <Ionicons name="add-outline" size={24} color="#666" />
          <Text style={styles.addPhotoText}>Add photos</Text>
        </TouchableOpacity>

        {/* Conteneur des aperçus de photos sélectionnées */}
        <View style={styles.photoPreviewContainer}>
          {selectedPhotos.map((photoUri, index) => (
            <Image key={index} source={{ uri: photoUri }} style={styles.photoPreview} />
          ))}
        </View>
      </View>

      <View style={styles.tipContainer}>
        <View style={styles.tipLabelContainer}>
          <Text style={styles.tipLabel}>TIP</Text>
        </View>
        <View style={styles.tipContent}>
          <Text style={styles.tipTitle}>More photos get more replies</Text>
          <Text style={styles.tipText}>
            Include photos of the workplace, typical work, and team to showcase your business to potential candidates.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  photoCount: {
    color: '#888',
    fontSize: 12,
    marginBottom: 10,
  },
  photoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addPhotoButton: {
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
    marginRight: 10,
  },
  addPhotoText: {
    color: '#666',
    fontSize: 14,
  },
  photoPreviewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  photoPreview: {
    width: 90,
    height: 90,
    borderRadius: 12,
    marginRight: 10,
  },
  tipContainer: {
    flexDirection: 'row',
    backgroundColor: '#3A3A3C',
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
  },
  tipLabelContainer: {
    backgroundColor: '#037E4AFF',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    height: 25,
  },
  tipLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  tipText: {
    color: '#888',
    fontSize: 14,
    right: 43,
  },
});
