import { Text, View, StyleSheet } from 'react-native';
import ThemedImageBackground from '@/components/styled-image-background';

const MagicKingdom = () => {
  return (
    // <View style={styles.container}>
    <ThemedImageBackground source={require('@/assets/images/mk.jpg')}>
      {/* <View style={styles.content}> */}
      <Text>Welcome to the Magic Kingdom!</Text>
      {/* </View> */}
    </ThemedImageBackground>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100, // Add padding to account for floating tabs
  },
});

export default MagicKingdom;
