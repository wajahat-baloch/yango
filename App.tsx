// App.js
import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;
