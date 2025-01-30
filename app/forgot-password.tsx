import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // 1: Request, 2: Email Sent, 3: New Password, 4: Success

  const handleRequestReset = () => {
    console.log('Request Reset Email:', email);
    
    setStep(2);
  };

  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      console.log('New Password:', newPassword);
      
      setStep(4);
    } else {
      alert('Les mots de passe ne correspondent pas.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {step === 1 && (
          <>
            <Text style={styles.title}>Mot de passe oublié</Text>
            <Text style={styles.subtitle}>Entrez votre adresse e-mail pour réinitialiser votre mot de passe.</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#666"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity onPress={handleRequestReset} style={styles.button}>
              <LinearGradient colors={['#0F53E7FF', '#192f6a']} style={styles.gradientButtonBackground}>
                <Text style={styles.buttonText}>Envoyer</Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        )}

        {step === 2 && (
          <>
            <Text style={styles.title}>E-mail envoyé</Text>
            <Text style={styles.subtitle}>Un e-mail de réinitialisation a été envoyé à {email}.</Text>
            <TouchableOpacity onPress={() => setStep(3)} style={styles.button}>
              <LinearGradient colors={['#0F53E7FF', '#192f6a']} style={styles.gradientButtonBackground}>
                <Text style={styles.buttonText}>Continuer</Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        )}

        {step === 3 && (
          <>
            <Text style={styles.title}>Nouveau mot de passe</Text>
            <Text style={styles.subtitle}>Entrez votre nouveau mot de passe.</Text>
            <TextInput
              style={styles.input}
              placeholder="Nouveau mot de passe"
              placeholderTextColor="#666"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmer le mot de passe"
              placeholderTextColor="#666"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={handleResetPassword} style={styles.button}>
              <LinearGradient colors={['#0F53E7FF', '#192f6a']} style={styles.gradientButtonBackground}>
                <Text style={styles.buttonText}>Réinitialiser</Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        )}

        {step === 4 && (
          <>
            <Text style={styles.title}>Mot de passe réinitialisé</Text>
            <Text style={styles.subtitle}>Votre mot de passe a été réinitialisé avec succès.</Text>
            <TouchableOpacity onPress={() => router.push('./')} style={styles.button}>
              <LinearGradient colors={['#0F53E7FF', '#192f6a']} style={styles.gradientButtonBackground}>
                <Text style={styles.buttonText}>Se connecter</Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 20,
  },
  gradientButtonBackground: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});