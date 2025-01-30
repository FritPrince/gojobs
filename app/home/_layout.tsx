import React from 'react';
import { useRouter } from 'expo-router';
import LoginScreen from '../LoginScreen'; // Assurez-vous que le chemin est correct

export default function StartScreen() {
  const router = useRouter();

  return (
    <LoginScreen />
  );
}