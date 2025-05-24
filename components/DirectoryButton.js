import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DirectoryButton({ label, iconName, color, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Icon name={iconName} size={30} color="#fff" />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    width: 140,
    height: 140,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});
