import { Text } from 'react-native';

import ThemedImageBackground from '@/components/styled-image-background';

const Epcot = () => {
  return (
    <ThemedImageBackground source={require('@/assets/images/epcot.jpg')}>
      <Text>Welcome to the Epcot!</Text>
    </ThemedImageBackground>
  );
};

export default Epcot;
