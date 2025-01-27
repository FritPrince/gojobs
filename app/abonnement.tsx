import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const { width } = Dimensions.get('window');

// Données des abonnements
const subscriptionData = [
  {
    id: 1,
    name: 'Basique Pro',
    price: '24.75 $ / week',
    status: false,
    description:'- Accès aux appels d offres regroupés pour les professionnels. \n- Publication de 2 annonces standards par mois.\n- 4 fiches de paye par mois incluses'
  },
  {
    id: 2,
    name: 'Standard Pro',
    price: '44.75 $ / week',
    status: false, 
    description:'- Tout ce qui est inclus dans l abonnement Basique Pro.\n- Accès illimité aux appels d offres.\n- Publication de 5 annonces standards par mois.\n- Liaison de comptes pour les virements.\n- Fiches de paie : 9 fiches par mois\n- FlashJobs : 1 annonce incluse'
  },
  {
    id: 3,
    name: 'Premium Pro',
    price: '74.75 $ / week',
    status: false, // abonnement inactif
    description:'- Tout ce qui est inclus dans l abonnement Standard Pro.\n- Mise en avant illimitée des annonces.\n- Publication de 15 annonces standards par mois Limitations :\n- Fiches de paie : 50 fiches par mois\n- FlashJobs : 2 annonces incluses'
  },
  {
    id: 4,
    name: 'Entreprise',
    price: '74.75 $ / week',
    status: false, // abonnement inactif
    description:'- Tout ce qui est inclus dans l abonnement Premium Pro.\n- Gestion complète et support dédié.\n- Plafond de 1000 annonces standard par mois.\n- Fiches de paie : 100 fiches par mois\n- FlashJobs : 2 annonces incluses par mois'
  },
];
const cardColors = ['#FFFFFFFF', '#A4A6A6', '#0E365BCC', '#329EE6'];
const descriptionColors = ['#000000FF', '#FFFFFFFF', '#FFFFFFFF', '#FFFFFFFF'];

export default function Abonnement() {
const route = useRouter();

  return (
    <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <TouchableOpacity onPress={() => route.back()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Abonnement</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>

    {/* Liste des abonnements */}
    <ScrollView contentContainerStyle={styles.subscriptionList}>
      {subscriptionData.map((subscription, index) => (
        <View
          key={subscription.id}
          style={[styles.subscriptionCard, { backgroundColor: cardColors[index % cardColors.length] }]}
        >
          {/* Titre du plan */}
          <Text style={[styles.planTitle, { color: descriptionColors[index % descriptionColors.length] }]}>{subscription.name}</Text>

          {/* Description */}
          <Text
            style={[
              styles.planDescription,
              { color: descriptionColors[index % descriptionColors.length] }, // Couleur différente
            ]}
          >
            {subscription.description}
          </Text>

          {/* Ligne pour le prix et le bouton */}
          <View style={styles.priceButtonContainer}>
            <Text style={styles.planPrice}>{subscription.price}</Text>
            <TouchableOpacity
              style={[
                styles.button,
                subscription.status ? styles.buttonSuspend : styles.buttonSubscribe,
              ]}
            >
              <Text style={styles.buttonText}>
                {subscription.status ? 'Suspendre' : "S'abonner"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D222B',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  subscriptionList: {
    paddingBottom: 20,
  },
  subscriptionCard: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    width: width * 0.9,
    alignSelf: 'center',
    minHeight: 220,
  },
  planTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  planDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  priceButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planPrice: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonSuspend: {
    backgroundColor: '#FF4D4D',
  },
  buttonSubscribe: {
    backgroundColor: '#888888',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});