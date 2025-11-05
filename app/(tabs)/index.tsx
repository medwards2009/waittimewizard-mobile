import { Text } from 'react-native';

import ThemedImageBackground from '@/components/styled-image-background';

const MagicKingdom = () => {
  return (
    <ThemedImageBackground source={require('@/assets/images/mk.jpg')}>
      <Text>Welcome to the Magic Kingdom!</Text>
    </ThemedImageBackground>
  );
};

export default MagicKingdom;
