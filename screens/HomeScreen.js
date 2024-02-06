// HomeScreen.js
import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import RideDetails from '../components/RideDetails';
import Map from '../components/Map';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <Map style={styles.map} />
      </View>
      <View style={styles.rideDetailsContainer}>
        <RideDetails />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  mapContainer: {
    flex: 1,
    zIndex: 10,
  },

  map: {
    flex: 1,
  },

  rideDetailsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: '100%',
    height: '50%',
    zIndex: 1,
  },
});

export default HomeScreen;
