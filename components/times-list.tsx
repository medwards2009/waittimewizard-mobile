import { StyleSheet, FlatList, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
    borderRadius: 20,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    marginVertical: 5,
    borderRadius: 8,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
});

interface TimesListProps {
  times: string[];
}

const TimesList: React.FC<TimesListProps> = ({ times }) => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.listWrapper}>
        <FlatList
          data={times}
          renderItem={({ item, index }) => (
            <Text style={[styles.item, index === times.length - 1 && styles.lastItem]}>{item}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default TimesList;
