import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RideDetails from '../components/RideDetails'; // Ensure correct import path

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* ... other content above RideDetails */}
      <View style={styles.rideDetailsContainer}>
        <RideDetails />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 0, // Ensure no horizontal padding
    marginLeft: '-100%',
  },
  rideDetailsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: '50%',
    height: '55%',
  },
});

export default HomeScreen;
