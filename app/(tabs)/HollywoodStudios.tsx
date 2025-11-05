import { Text } from 'react-native';

import ThemedImageBackground from '@/components/styled-image-background';

const HollywoodStudios = () => {
  return (
    <ThemedImageBackground source={require('@/assets/images/hs.jpg')}>
      <Text>Welcome to the Hollywood Studios!</Text>
    </ThemedImageBackground>
  );
};

export default HollywoodStudios;
