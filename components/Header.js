// Header.js
import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuIcon}>
        <Image source={require('../images/R.png')} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.locationContainer}>
        <Text style={styles.locationLabel}>Your Location</Text>
        <Text style={styles.locationText}>Jahangir Road</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  },
  menuIcon: {
    marginLeft: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  locationContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -15,
  },
  locationLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  locationText: {
    fontSize: 20,
    color: 'black',
  },
});

export default Header;
