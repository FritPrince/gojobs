import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Définir l'état monté une fois le composant chargé
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Redirection vers /home après le montage
      router.replace('/home');
    }
  }, [isMounted, router]);

  return null; // Pas d'affichage, redirection automatique
}
