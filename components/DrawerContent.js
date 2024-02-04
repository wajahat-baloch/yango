// DrawerContent.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

const DrawerContent = () => {
  const goToScreen = screenName => {
    Navigation.mergeOptions('sideMenu', {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    });

    Navigation.push('CENTER_STACK_ID', {
      component: {
        name: screenName,
      },
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={() => goToScreen('HomeScreen')}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen('DiscountScreen')}>
        <Text>Discount Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen('EarnAsDriverScreen')}>
        <Text>Earn As Driver Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen('InfoScreen')}>
        <Text>Info Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;
