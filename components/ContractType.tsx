import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import CustomCheckbox from './CustomCheckbox'; // Utiliser le même CustomCheckbox
import { Ionicons } from '@expo/vector-icons';

export default function ContractType({
  cdi, setCdi,
  cdd, setCdd,
  alternance, setAlternance,
  freelance, setFreelance,
  isHourly, setIsHourly,
  isMonthly, setIsMonthly,
  hourlyRate, setHourlyRate,
  monthlyRate, setMonthlyRate
}) {

  // Fonction pour gérer la sélection d'une option de salaire
  const handleSalaryToggle = (type) => {
    if (type === 'hourly') {
      setIsHourly(!isHourly);
      setIsMonthly(false); // Désélectionner l'autre option
    } else if (type === 'monthly') {
      setIsMonthly(!isMonthly);
      setIsHourly(false); // Désélectionner l'autre option
    }
  };

  return (
    <View>
      <Text style={styles.sectionTitle}>Type de contract</Text>

      <View style={styles.checkboxGroup}>
        <CustomCheckbox label="CDI" value={cdi} onValueChange={setCdi} />
        <CustomCheckbox label="CDD" value={cdd} onValueChange={setCdd} />
        <CustomCheckbox label="alternance" value={alternance} onValueChange={setAlternance} />
        <CustomCheckbox label="free lance" value={freelance} onValueChange={setFreelance} />
      </View>

      <Text style={styles.salaireLabel}>Salaire</Text>
      <View style={styles.salaryContainer}>
        <TouchableOpacity style={styles.salaryOption} onPress={() => handleSalaryToggle('hourly')}>
          <Text style={styles.salaryOptionText}>/H</Text>
          {isHourly && <Ionicons name="checkmark-circle-outline" size={24} color="#FFFFFF" />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.salaryOption} onPress={() => handleSalaryToggle('monthly')}>
          <Text style={styles.salaryOptionText}>/Mois</Text>
          {isMonthly && <Ionicons name="checkmark-circle-outline" size={24} color="#FFFFFF" />}
        </TouchableOpacity>
      </View>

      {/* Champ de saisie pour le taux horaire */}
      {isHourly && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.salaryInput}
            placeholder="Montant par heure"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={hourlyRate}
            onChangeText={setHourlyRate}
          />
        </View>
      )}

      {/* Champ de saisie pour le salaire mensuel */}
      {isMonthly && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.salaryInput}
            placeholder="Montant par mois"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={monthlyRate}
            onChangeText={setMonthlyRate}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  checkboxGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  salaireLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  salaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  salaryOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    padding: 10,
    width: '48%',
    justifyContent: 'space-between',
  },
  salaryOptionText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  salaryInput: {
    backgroundColor: '#888888',
    color: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
});
