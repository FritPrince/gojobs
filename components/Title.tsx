import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Title({ title, setTitle }) { // Ajout des props
  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          placeholderTextColor="#666"
          value={title} // Liaison avec l'état du titre
          onChangeText={setTitle} // Mise à jour du titre lorsque l'utilisateur saisit du texte
        />
      </View>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
        <Text style={styles.progressText}>Parfait !</Text>
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
  inputContainer: {
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
  },
  input: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 15,
  },
  progressBar: {
    height: 4,
    width: 60,
    backgroundColor: '#00FF00',
    borderRadius: 2,
  },
  progressText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginLeft: 10,
  },
});
