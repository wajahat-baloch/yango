import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const RideDetails = () => {
  return (
    <View style={styles.container}>
      {/* first */}
      <View style={styles.first}>
        {/* <Image />
        <Text>Where to?</Text>
        <View>→</View> */}
      </View>

      {/* second */}
      <View style={styles.second}>
        <View>
          {/* <View>
            <Text>Expo Center</Text>
          </View>
          <View>
            <Image />
            <Image />
          </View> */}
        </View>

        <View>
          {/* <Text>Dolmen Mall</Text>
          <View>
            <Image />
            <Image />
          </View> */}
        </View>
      </View>

      {/* third */}
      <View style={styles.third}>
        {/* <View>
          <View>
            <Text>Expo Center</Text>
          </View>
          <View>
            <Image />
            <Image />
          </View>
        </View> */}

        {/* <View>
          <Text>Dolmen Mall</Text>
          <View>
            <Image />
            <Image />
          </View>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '40%',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'wheat',
    padding: 20,
  },

  first: {
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  second: {
    backgroundColor: 'grey',
  },
  third: {
    backgroundColor: 'grey',
  },
});

export default RideDetails;
