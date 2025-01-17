import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Tabs } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

export default function UserXLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            switch (route.name) {
              case 'home':
                iconSource = focused
                  ? require('@/assets/icons/home.png') // Chemin pour l'icône active
                  : require('@/assets/icons/home.png'); // Chemin pour l'icône inactive
                break;
              case 'flashjob':
                iconSource = focused
                  ? require('@/assets/icons/stopwatch.png')
                  : require('@/assets/icons/stopwatch.png');
                break;
              case 'publish':
                iconSource = focused
                  ? require('@/assets/icons/add-circle.png')
                  : require('@/assets/icons/add-circle.png');
                break;
              case 'favoris':
                iconSource = focused
                  ? require('@/assets/icons/heart.png')
                  : require('@/assets/icons/heart.png');
                break;
              case 'messages':
                iconSource = focused
                  ? require('@/assets/icons/chatbubble.png')
                  : require('@/assets/icons/chatbubble.png');
                break;
              default:
                iconSource = require('@/assets/icons/home.png');
            }

            return (
              <Image
                source={iconSource}
                style={{
                  width: size, // Taille de l'icône
                  height: size,
                  tintColor: color, // Applique la couleur active/inactive
                }}
                resizeMode="contain"
              />
            );
          },
          tabBarActiveTintColor: '#457DF5FF',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            backgroundColor: '#1A1A1D',
            height: 60,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        })}
      >
        <Tabs.Screen name="home" options={{ headerShown: false, title: 'Home' }} />
        <Tabs.Screen name="flashjob" options={{ headerShown: false, title: 'FlashJob' }} />
        <Tabs.Screen name="publish" options={{ headerShown: false, title: 'Publier' }} />
        <Tabs.Screen name="favoris" options={{ headerShown: false, title: 'Favoris' }} />
        <Tabs.Screen name="messages" options={{ headerShown: false, title: 'Messages' }} />
      </Tabs>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
