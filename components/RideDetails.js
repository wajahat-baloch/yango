import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Car1 = require('../images/car1.png');
const Car = require('../images/car.png');
const Location = require('../images/location.jpg');

const RideDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <View style={styles.firstInner}>
          <Image source={Car1} style={styles.image} />
          <Text style={styles.firstInnerText}>Where to?</Text>
        </View>
        <View style={styles.firstInnerBox}>
          <Text style={styles.firstInner2}>→</Text>
        </View>
      </View>

      {/* second */}
      <View style={styles.second}>
        <View style={styles.second1}>
          <View>
            <Text style={styles.second1Text}>Expo Center</Text>
            <View style={styles.secondBox2}>
              <Image source={Car} style={styles.secondBox2Image1} />
              <Image source={Location} style={styles.secondBox2Image2} />
            </View>
          </View>
        </View>

        <View style={styles.second2}>
          <View>
            <Text style={styles.second2Text}>Expo Center</Text>
            <View style={styles.secondBox3}>
              <Image source={Car} style={styles.secondBox3Image1} />
              <Image source={Location} style={styles.secondBox3Image2} />
            </View>
          </View>
        </View>
      </View>

      {/* third */}
      <View style={styles.third}>
        <View style={styles.third1}>
          <View>
            <Text style={styles.third2Text}>Expo Center</Text>
            <View style={styles.thirdBox3}>
              <Image source={Car} style={styles.thirdBox3Image1} />
              <Image source={Location} style={styles.thirdBox3Image2} />
            </View>
          </View>
        </View>

        <View style={styles.third2}>
          <View>
            <Text style={styles.third2Text}>Expo Center</Text>
            <View style={styles.thirdBox3}>
              <Image source={Car} style={styles.thirdBox3Image1} />
              <Image source={Location} style={styles.thirdBox3Image2} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    padding: 1,
    justifyContent: 'space-evenly',
    gap: 5,
  },
  first: {
    backgroundColor: '#cfcfcf',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '25%',
    borderRadius: 15,
  },
  firstInner: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 70,
    height: 30,
    marginRight: 10,
    marginLeft: 5,
  },
  firstInnerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#000',
    width: '20%',
  },
  firstInnerText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  firstInner2: {
    fontSize: 35,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: -15,
    color: '#000',
  },
  second: {
    height: '35%',
    width: '100%',
    borderRadius: 15,
    flexDirection: 'row',
  },
  second1: {
    borderRadius: 15,
    width: '32%',
    height: '100%',
    backgroundColor: '#cfcfcf',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  second1Text: {
    fontSize: 15,
    marginBottom: 4,
    color: '#000',
    fontWeight: 'bold',
  },
  secondBox2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondBox2Image1: {
    height: 35, // Set the height as needed
    width: 45, // Set the width as needed
  },
  secondBox2Image2: {
    height: 35, // Set the height as needed
    width: 35, // Set the width as needed
  },

  second2: {
    flex: 1,
    borderRadius: 15,
    height: '100%',
    backgroundColor: '#cfcfcf',
    marginLeft: 5,
    padding: 10,
  },
  second2Text: {
    marginBottom: 20,
    fontSize: 20,
    color: '#000',
  },
  secondBox3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondBox3Image1: {
    height: 35,
    width: 45,
  },
  secondBox3Image2: {
    height: 35,
    width: 35,
  },

  third: {
    height: '35%', // Adjust the height as needed
    width: '100%',
    borderRadius: 15,
    flexDirection: 'row',
  },

  third1: {
    flex: 1,
    borderRadius: 15,
    height: '100%',
    backgroundColor: '#cfcfcf',
    padding: 10,
  },
  third2: {
    flex: 1,
    borderRadius: 15,
    height: '100%',
    backgroundColor: '#cfcfcf',
    marginLeft: 5,
    padding: 10,
  },
  third2Text: {
    marginBottom: 20,
    fontSize: 20,
    color: '#000',
  },
  thirdBox3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thirdBox3Image1: {
    height: 35,
    width: 45,
  },
  thirdBox3Image2: {
    height: 35,
    width: 35,
  },
});

export default RideDetails;
