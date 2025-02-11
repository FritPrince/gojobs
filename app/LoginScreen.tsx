import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

export default function LoginScreen() {
  const router = useRouter();
  const [isEmployer, setIsEmployer] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleLoginData = (field, value) => {
    setLoginData({
      ...loginData,
      [field]: value,
    });
  };

  const handleSignupData = (field, value) => {
    setSignupData({
      ...signupData,
      [field]: value,
    });
  };

  const handleLogin = () => {
    console.log('Login Data:', loginData);
    if (isEmployer) {
      router.push('../../pro/(tabs)');
    } else {
      router.push('../../candidat/(tabs)');
    }
  };

  const handleSignup = () => {
    console.log('Signup Data:', signupData);
    if (isEmployer) {
      router.push('../../pro/(tabs)');
    } else {
      router.push('../../candidat/(tabs)');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={require('@/assets/images/logooo.png')} style={{ alignItems: 'center', justifyContent: 'center', right: -100 }} />

        <View style={styles.switchContainer}>
          <View style={isEmployer ? styles.rightActive : styles.leftActive}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.gradientBackground} />
          </View>
          <TouchableOpacity onPress={() => setIsEmployer(false)} style={styles.switchButton}>
            <Text style={[styles.switchText, !isEmployer && styles.activeSwitchText]}>Candidats</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsEmployer(true)} style={styles.switchButton}>
            <Text style={[styles.switchText, isEmployer && styles.activeSwitchText]}>Employeur</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.switchContainer}>
          <View style={isLogin ? styles.leftActive : styles.rightActive}>
            <LinearGradient colors={['#0F53E7FF', '#192f6a']} style={styles.gradientBackground} />
          </View>
          <TouchableOpacity onPress={() => setIsLogin(true)} style={styles.switchButton}>
            <Text style={[styles.switchText, isLogin && styles.activeSwitchText]}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsLogin(false)} style={styles.switchButton}>
            <Text style={[styles.switchText, !isLogin && styles.activeSwitchText]}>S'inscrire</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          {isLogin ? (
            <>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#666"
                value={loginData.email}
                onChangeText={(text) => handleLoginData('email', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#666"
                secureTextEntry
                value={loginData.password}
                onChangeText={(text) => handleLoginData('password', text)}
              />
              <TouchableOpacity onPress={() => router.push('../forgot-password')}>
                <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                <LinearGradient colors={['#0F53E7FF', '#192f6a']} style={styles.gradientButtonBackground}>
                  <Text style={styles.loginButtonText}>Se connecter</Text>
                </LinearGradient>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder="Nom complet"
                placeholderTextColor="#666"
                value={signupData.fullName}
                onChangeText={(text) => handleSignupData('fullName', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#666"
                value={signupData.email}
                onChangeText={(text) => handleSignupData('email', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Numéro"
                placeholderTextColor="#666"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                maxLength={15}
                value={signupData.phoneNumber}
                onChangeText={(text) => handleSignupData('phoneNumber', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                placeholderTextColor="#666"
                secureTextEntry
                value={signupData.password}
                onChangeText={(text) => handleSignupData('password', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirmer le mot de passe"
                placeholderTextColor="#666"
                secureTextEntry
                value={signupData.confirmPassword}
                onChangeText={(text) => handleSignupData('confirmPassword', text)}
              />
              <TouchableOpacity onPress={handleSignup} style={styles.loginButton}>
                <LinearGradient colors={['#0F53E7FF', '#192f6a']} style={styles.gradientButtonBackground}>
                  <Text style={styles.loginButtonText}>S'inscrire</Text>
                </LinearGradient>
              </TouchableOpacity>
            </>
          )}
          <Text style={styles.orText}>ou</Text>
          <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="linkedin" size={24} color="black" style={styles.icon} />
              <Text style={styles.socialButtonText}>Continuer avec Linkedin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="facebook" size={24} color="black" style={styles.icon} />
              <Text style={styles.socialButtonText}>Continuer avec Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <AntDesign name="google" size={24} color="black" style={styles.icon} />
              <Text style={styles.socialButtonText}>Continuer avec Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <AntDesign name="apple1" size={24} color="black" style={styles.icon} />
              <Text style={styles.socialButtonText}>Continuer avec Apple</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    borderRadius: 25,
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