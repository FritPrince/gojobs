import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomCheckbox from './CustomCheckbox'; // Assurez-vous que ce composant est bien importé

export default function WorkingRightsExperience({ selectedOptions, setSelectedOptions }) {
  
  const toggleOption = (option) => {
    // Vérifier si l'option est déjà sélectionnée
    if (selectedOptions.includes(option)) {
      // Si l'option est déjà sélectionnée, on la retire
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // Sinon, on l'ajoute
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <View>
      <Text style={styles.sectionTitle}>Working rights & experience</Text>
      <Text style={styles.sectionSubtitle}>
        Increase your job's visibility by ticking all options that are suitable for this job.
      </Text>

      <View style={styles.checkboxGroup}>
        <CustomCheckbox
          label="Entry level"
          value={selectedOptions.includes('Entry level')}
          onValueChange={() => toggleOption('Entry level')}
        />
        <CustomCheckbox
          label="Person with a disability"
          value={selectedOptions.includes('Person with a disability')}
          onValueChange={() => toggleOption('Person with a disability')}
        />
        <CustomCheckbox
          label="Working holiday visa"
          value={selectedOptions.includes('Working holiday visa')}
          onValueChange={() => toggleOption('Working holiday visa')}
        />
        <CustomCheckbox
          label="Student visa"
          value={selectedOptions.includes('Student visa')}
          onValueChange={() => toggleOption('Student visa')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionSubtitle: {
    color: '#888',
    fontSize: 14,
    marginBottom: 20,
  },
  checkboxGroup: {
    marginBottom: 20,
  },
});
