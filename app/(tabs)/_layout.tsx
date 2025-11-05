import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'rgb(40, 40, 40)',
        tabBarStyle: { backgroundColor: '#f8f8f8' },
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
