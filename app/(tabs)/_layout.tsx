import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';

// Saving tab bar style for later if i change my mind
// tabBarStyle: {
//   backgroundColor: 'rgba(255, 255, 255, 0.7)',
//   position: 'absolute',
//   bottom: Platform.OS === 'ios' ? 25 : 16,
//   elevation: 4,
//   marginLeft: '5%',
//   width: '90%',
//   borderRadius: 15,
//   height: 60,
//   shadowColor: '#000',
//   shadowOffset: {
//     width: 0,
//     height: 4,
//   },
//   shadowOpacity: 0.2,
//   shadowRadius: 12,
//   paddingBottom: 0,
//   borderWidth: 1,
//   borderColor: 'rgba(255, 255, 255, 0.7)',
// },

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'rgb(40, 40, 40)',
        tabBarInactiveTintColor: 'rgb(140, 140, 140)', // darker gray for selected tab
        tabBarStyle: {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          position: 'absolute',
          bottom: Platform.OS === 'ios' ? 25 : 16,
          elevation: 4,
          marginLeft: '5%',
          width: '90%',
          borderRadius: 50,
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
      <Tabs.Screen
        name="index"
        options={{
          title: 'Magic Kingdom',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/icons/mkIcon.png')}
              style={{ width: size ?? 24, height: size ?? 24, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Epcot"
        options={{
          title: 'Epcot',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/icons/epcotIcon.png')}
              style={{ width: size ?? 24, height: size ?? 24, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="HollywoodStudios"
        options={{
          title: 'Hollywood Studios',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/icons/hsIcon.png')}
              style={{ width: size ?? 24, height: size ?? 24, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="AnimalKingdom"
        options={{
          title: 'Animal Kingdom',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/icons/akIcon.png')}
              style={{ width: size ?? 24, height: size ?? 24, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
