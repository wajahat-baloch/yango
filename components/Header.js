// Header.js
import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet, Text} from 'react-native';

const Header = () => {
  // const openDrawer = () => {
  //   Navigation.mergeOptions('sideMenu', {
  //     sideMenu: {
  //       left: {
  //         visible: true,
  //       },
  //     },
  //   });
  // };

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
    padding: 20,
  },
  menuIcon: {
    marginRight: 10,
  },
  icon: {
    width: 35,
    height: 35,
  },
  locationContainer: {
    flex: 1,
    alignItems: 'center',
  },
  locationLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  locationText: {
    fontSize: 30,
    color: 'black',
  },
});

export default Header;
