import React, {Component} from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 3000);
  return (
    <View style={{flex: 1, backgroundColor: '#ffa500'}}>
      <Text
        style={{
          top: 80,
          fontSize: 65,
          fontWeight: 'bold',
          paddingLeft: 130,
          paddingVertical: 60,
          color: '#8a2be2',
        }}>
        MMS
      </Text>
      <Image
        style={{
          //flex: 1,
          width: '40%',
          height: '40%',
          //justifyContent: 'center',
          //alignItems: 'center',
          marginHorizontal: 120,
          top: 300,
          position: 'absolute',
        }}
        source={require('../assets/mart.png')}
      />
    </View>
  );
};

export default SplashScreen;
