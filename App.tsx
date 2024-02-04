import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from './components/Header';
import RideDetails from './components/RideDetails';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <Text style={styles.title}>Welcome to React Native!</Text>
      </View>
      <RideDetails />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
