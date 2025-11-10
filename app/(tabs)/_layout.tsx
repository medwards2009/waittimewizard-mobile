import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'rgb(40, 40, 40)',
        tabBarInactiveTintColor: 'rgb(140, 140, 140)',
        tabBarStyle: {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          position: 'absolute',
          bottom: Platform.OS === 'ios' ? 25 : 16,
          elevation: 4,
          marginLeft: '5%',
          width: '90%',
          borderRadius: 15,
          height: 60,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.2,
          shadowRadius: 12,
          paddingBottom: 0,
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.7)',
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Magic Kingdom' }} />
      <Tabs.Screen name="Epcot" options={{ title: 'Epcot' }} />
      <Tabs.Screen name="HollywoodStudios" options={{ title: 'Hollywood Studios' }} />
      <Tabs.Screen name="AnimalKingdom" options={{ title: 'Animal Kingdom' }} />
    </Tabs>
  );
};

export default TabsLayout;
