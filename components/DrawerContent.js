// DrawerContent.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const DrawerContent = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text>Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Discount Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Earn As Driver Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Info Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;
