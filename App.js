import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Navigation from './src/navigation/index';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});