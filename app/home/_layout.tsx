import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

export default function LoginScreen() {
  const router = useRouter();
  const [isEmployer, setIsEmployer] = useState(true); // Par défaut sur Employeur
  const [isLogin, setIsLogin] = useState(true); // Par défaut sur Login

  // Fonction pour gérer la redirection en fonction du profil sélectionné
  const handleLogin = () => {
    if (isEmployer) {
      router.push('../../pro/(tabs)');
    } else {
      router.push('../../candidat/(tabs)');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Switch entre Candidat et Employeur */}
        <View style={styles.switchContainer}>
          <View style={isEmployer ? styles.rightActive : styles.leftActive}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.gradientBackground}
            />
          </View>
          <TouchableOpacity onPress={() => setIsEmployer(false)} style={styles.switchButton}>
            <Text style={[styles.switchText, !isEmployer && styles.activeSwitchText]}>
              Candidats
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsEmployer(true)} style={styles.switchButton}>
            <Text style={[styles.switchText, isEmployer && styles.activeSwitchText]}>
              Employeur
            </Text>
          </TouchableOpacity>
        </View>

        {/* Formulaire de connexion */}
        <Text style={styles.title}>Login Form</Text>
        <View style={styles.formContainer}>
          {/* Switch entre Login et Signup */}
          <View style={styles.switchContainer}>
            <View style={isLogin ? styles.leftActive : styles.rightActive}>
              <LinearGradient
                colors={['#0F53E7FF', '#192f6a']}
                style={styles.gradientBackground}
              />
            </View>
            <TouchableOpacity onPress={() => setIsLogin(true)} style={styles.switchButton}>
              <Text style={[styles.switchText, isLogin && styles.activeSwitchText]}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsLogin(false)} style={styles.switchButton}>
              <Text style={[styles.switchText, !isLogin && styles.activeSwitchText]}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>

          <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#666" />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#666" secureTextEntry />

          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <LinearGradient colors={['#0F53E7FF', '#192f6a']} style={styles.gradientButtonBackground}>
              <Text style={styles.loginButtonText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.orText}>or</Text>

          <Text style={styles.infoText}>
            To connect a sign-in method, the email must match the one on your account.
          </Text>

          {/* Boutons de connexion social */}
          <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="amazon" size={24} color="black" style={styles.icon} />
              <Text style={styles.socialButtonText}>Continue with Amazon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="facebook" size={24} color="black" style={styles.icon} />
              <Text style={styles.socialButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <AntDesign name="google" size={24} color="black" style={styles.icon} />
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <AntDesign name="apple1" size={24} color="black" style={styles.icon} />
              <Text style={styles.socialButtonText}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.signUpText}>
          Need an account? <Text style={styles.signUpLink}>Sign up</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#003366',
    backgroundColor: '#fff',
    position: 'relative',
    marginBottom: 20,
  },
  switchButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    zIndex: 1,
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 25,
  },
  leftActive: {
    position: 'absolute',
    left: 0,
    width: '50%',
    height: '100%',
  },
  rightActive: {
    position: 'absolute',
    right: 0,
    width: '50%',
    height: '100%',
  },
  switchText: {
    fontSize: 14,
    color: '#003366',
    fontWeight: 'bold',
  },
  activeSwitchText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  forgotText: {
    color: '#3b82f6',
    textAlign: 'left',
    marginBottom: 20,
  },
  loginButton: {
    borderRadius: 1,
    overflow: 'hidden',
    marginBottom: 20,
  },
  gradientButtonBackground: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#888',
  },
  infoText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginBottom: 20,
  },
  socialLoginContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFFFF',
    borderRadius: 15,
    marginBottom: 10,
    width: '80%',
  },
  icon: {
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#000',
  },
  signUpText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
  signUpLink: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },
});
