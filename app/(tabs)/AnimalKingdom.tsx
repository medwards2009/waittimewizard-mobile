import { Text } from 'react-native';

import ThemedImageBackground from '@/components/styled-image-background';

const AnimalKingdom = () => {
  return (
    <ThemedImageBackground source={require('@/assets/images/ak.jpg')}>
      <Text>Welcome to the Animal Kingdom!</Text>
    </ThemedImageBackground>
  );
};

export default AnimalKingdom;
