import { ImageBackground, StyleSheet } from 'react-native';

interface ThemedImageBackgroundProps {
  children: React.ReactNode;
  source: any;
}

const ThemedImageBackground: React.FC<ThemedImageBackgroundProps> = ({ source, children }) => {
  return (
    <ImageBackground source={source} style={styles.container}>
      {children}
    </ImageBackground>
  );
};

export default ThemedImageBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
