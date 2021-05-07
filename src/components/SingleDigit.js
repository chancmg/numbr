import React from 'react';
import {Text, View} from 'react-native';

const SingleDigit = ({digit}) => {
  return (
    <View
      style={{
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 20}}>{digit}</Text>
    </View>
  );
};

export default SingleDigit;
