import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function JobDetails() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Reconvertir les images en tableau
  const images = params.images ? JSON.parse(params.images) : []; 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Galerie d'images */}
      <View style={styles.imageGallery}>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
          {images.map((img, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={img} style={styles.image} />
              <View style={styles.imageCounter}>
                <Text style={styles.imageCounterText}>{index + 1}/{images.length}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="share-social-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="heart-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Détails de l'emploi */}
      <View style={styles.detailsContainer}>
        <Text style={styles.jobTitle}>{params.title}</Text>
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={18} color="#66B2FF" />
          <Text style={styles.locationText}>{params.location}</Text>
        </View>

        {/* Informations de l'entreprise */}
        <View style={styles.companyContainer}>
          <View style={styles.companyLogo}>
            <Ionicons name="briefcase-outline" size={24} color="white" />
          </View>
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>{params.company}</Text>
            <Text style={styles.companyDetails}>membres GoJobs depuis 2012 (1 poste)</Text>
          </View>
          <MaterialCommunityIcons name="check-decagram" size={20} color="#66B2FF" />
        </View>

        {/* Salaire */}
        <Text style={styles.salaryText}>{params.salary} / Mois</Text>

        {/* Description de l'emploi */}
        <Text style={styles.description}>{params.description}</Text>

        {/* Section des Jobs similaires */}
        <Text style={styles.similarJobsTitle}>Jobs similaire</Text>
        <ScrollView horizontal contentContainerStyle={styles.similarJobsContainer}>
          {images.map((img, index) => (
            <View key={index} style={styles.similarJobCard}>
              <Image source={img} style={styles.similarJobImage} />
              <Text style={styles.similarJobTitle}>{params.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Boutons en bas */}
      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Postuler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageButtonText}>Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1D222B',
    paddingBottom: 20, // Pour laisser de l'espace pour les boutons
  },
  imageGallery: {
    position: 'relative',
  },
  imageWrapper: {
    width,
    height: width * 0.6,
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  imageCounter: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  imageCounterText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 8,
    borderRadius: 20,
  },
  topButtons: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
  },
  iconButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 8,
    borderRadius: 20,
    marginLeft: 10,
  },
  detailsContainer: {
    padding: 16,
  },
  jobTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationText: {
    color: '#66B2FF',
    marginLeft: 4,
  },
  companyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  companyLogo: {
    backgroundColor: '#333',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  companyInfo: {
    flex: 1,
  },
  companyName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyDetails: {
    color: '#AAAAAA',
    fontSize: 12,
  },
  salaryText: {
    color: '#E1E1E1',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    color: '#CCCCCC',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  similarJobsTitle: {
    color: '#66B2FF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  similarJobsContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  similarJobCard: {
    alignItems: 'center',
    marginRight: 16,
  },
  similarJobImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
  },
  similarJobTitle: {
    color: '#CCCCCC',
    fontSize: 12,
    textAlign: 'center',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  applyButton: {
    backgroundColor: '#888888',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  applyButtonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageButton: {
    backgroundColor: '#0044CC',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  messageButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
