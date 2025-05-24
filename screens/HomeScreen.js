import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DirectoryButton from '../components/DirectoryButton';

const categories = [
  { name: 'You', icon: 'user', color: '#FF6B6B' },
  { name: 'Home', icon: 'home', color: '#4ECDC4' },
  { name: 'Love', icon: 'heart', color: '#FF8C94' },
  { name: 'Family', icon: 'users', color: '#FFD93D' },
  { name: 'Friends', icon: 'smile-o', color: '#A29BFE' },
  { name: 'School', icon: 'graduation-cap', color: '#70A1FF' },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {categories.map(cat => (
          <DirectoryButton
            key={cat.name}
            label={cat.name}
            iconName={cat.icon}
            color={cat.color}
            onPress={() =>
              navigation.navigate('Messages', {
                category: cat.name,
                icon: cat.icon,
                color: cat.color,
              })
            }
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
