import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from './components/Header';
import RideDetails from './components/RideDetails';
import HomeScreen from './screens/HomeScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <Text style={styles.title}>Welcome to React Native!</Text>
      </View>
      {/* <RideDetails /> */}
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
