import { StyleSheet, FlatList, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Add padding for status bar and safe area
    paddingHorizontal: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    color: '#fff', // White text for better visibility on background
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    marginVertical: 5,
    borderRadius: 8,
  },
});

interface TimesListProps {
  times: string[];
}

const TimesList: React.FC<TimesListProps> = ({ times }) => {
  return (
    <View style={styles.container}>
      <FlatList data={times} renderItem={({ item }) => <Text style={styles.item}>{item}</Text>} />
    </View>
  );
};

export default TimesList;
