import React from "react";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { store, persistor } from "@/store/store";
import Toast from "react-native-toast-message";

export default function AppLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={styles.container}>
          <Toast />
          <RooterNav />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>

  );
}
export const RooterNav = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="candidat/(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="pro/(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="JobDetails" options={{ headerShown: false }} />
    </Stack>
  );


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
