import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactOptions({
  gojobsMessaging, setGojobsMessaging,
  call, setCall,
  apply, setApply,
  websiteRedirect, setWebsiteRedirect,
  phoneNumber, setPhoneNumber,
  customQuestion1, setCustomQuestion1,
  customQuestion2, setCustomQuestion2
}) {
  // Calculer le nombre de sélections actuelles
  const selectedCount = [gojobsMessaging, call, apply, websiteRedirect].filter(Boolean).length;

  // Fonction pour gérer la sélection avec la limite de 2
  const handleToggle = (optionSetter, currentValue) => {
    if (currentValue) {
      optionSetter(false); // Permettre de désélectionner l'option
    } else if (selectedCount < 2) {
      optionSetter(true); // Permettre de sélectionner si moins de 2 options sont sélectionnées
    }
  };

  return (
    <View>
      <Text style={styles.sectionTitle}>Contacte</Text>
      <Text style={styles.sectionSubtitle}>
        Sélection votre choix pour être contacté, 2 choix minimum et maximum
      </Text>

      <TouchableOpacity
        style={[styles.contactOption, gojobsMessaging && styles.selected]}
        onPress={() => handleToggle(setGojobsMessaging, gojobsMessaging)}
      >
        <Text style={styles.contactOptionText}>Messagerie Gojobs</Text>
        {gojobsMessaging && <Ionicons name="checkmark-circle-outline" size={24} color="#FFFFFF" />}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.contactOption, call && styles.selected]}
        onPress={() => handleToggle(setCall, call)}
      >
        <Text style={styles.contactOptionText}>Appel</Text>
        {call && <Ionicons name="checkmark-circle-outline" size={24} color="#FFFFFF" />}
      </TouchableOpacity>

      {/* Afficher le champ de saisie si "Apelle" est sélectionné */}
      {call && (
        <View style={styles.phoneNumberContainer}>
          <TextInput
            style={styles.phoneNumberInput}
            placeholder="Phone number :"
            placeholderTextColor="#FFFFFF"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      )}

      <TouchableOpacity
        style={[styles.contactOption, apply && styles.selected]}
        onPress={() => handleToggle(setApply, apply)}
      >
        <Text style={styles.contactOptionText}>Postuler</Text>
        {apply && <Ionicons name="checkmark-circle-outline" size={24} color="#FFFFFF" />}
      </TouchableOpacity>

      {/* Afficher les options supplémentaires si "postuler" est sélectionné */}
      {apply && (
        <View style={styles.applyOptionsContainer}>
          <View style={styles.checkboxRow}>
            <TouchableOpacity style={styles.checkbox}>
              <Ionicons name="square-outline" size={20} color="#FFFFFF" />
              <Text style={styles.checkboxText}>Curriculum vitae</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkbox}>
              <Ionicons name="square-outline" size={20} color="#FFFFFF" />
              <Text style={styles.checkboxText}>Lettre de motivation</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.checkboxRow}>
            <TouchableOpacity style={styles.checkbox}>
              <Ionicons name="square-outline" size={20} color="#FFFFFF" />
              <Text style={styles.checkboxText}>Pas de question</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.checkboxRow}>
            <TouchableOpacity style={styles.checkbox}>
              <Ionicons name="square-outline" size={20} color="#FFFFFF" />
              <Text style={styles.checkboxText}>Combien d'années d'expérience</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.checkboxRow}>
            <TouchableOpacity style={styles.checkbox}>
              <Ionicons name="square-outline" size={20} color="#FFFFFF" />
              <Text style={styles.checkboxText}>Avez-vous le permis et êtes-vous véhiculé</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionSubtitle}>Ajouter vos propres questions</Text>

          <View style={styles.customQuestionsContainer}>
            <TextInput
              style={styles.customQuestionInput}
              placeholder="Votre question ici"
              placeholderTextColor="#FFFFFF"
              value={customQuestion1}
              onChangeText={setCustomQuestion1}
            />
            <TextInput
              style={styles.customQuestionInput}
              placeholder="Votre question ici"
              placeholderTextColor="#FFFFFF"
              value={customQuestion2}
              onChangeText={setCustomQuestion2}
            />
          </View>
        </View>
      )}

      <TouchableOpacity
        style={[styles.contactOption, websiteRedirect && styles.selected]}
        onPress={() => handleToggle(setWebsiteRedirect, websiteRedirect)}
      >
        <Text style={styles.contactOptionText}>Redirection vers site web</Text>
        {websiteRedirect && <Ionicons name="checkmark-circle-outline" size={24} color="#FFFFFF" />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  sectionSubtitle: {
    color: '#888',
    fontSize: 12,
    marginBottom: 20,
  },
  contactOption: {
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  contactOptionText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  selected: {
    backgroundColor: '#484848', // Change la couleur si sélectionné
  },
  phoneNumberContainer: {
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
  },
  phoneNumberInput: {
    backgroundColor: '#888888', // Fond gris clair pour le champ de saisie
    color: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  applyOptionsContainer: {
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    color: '#FFFFFF',
    marginLeft: 10,
  },
  customQuestionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customQuestionInput: {
    backgroundColor: '#888888',
    color: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    width: '48%',
    marginBottom: 10,
  },
});
