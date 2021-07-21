import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Button} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  {
    return (
      <View style={styles.container}>
        <View style={styles.V2}>
          <Text
            style={{
              fontSize: 45,
              fontWeight: 'bold',
              paddingHorizontal: 140,
              paddingVertical: 60,
              color: '#8a2be2',
            }}>
            MMS
          </Text>

          <TextInput
            placeholder="Email..."
            required
            autoCompleteType="email"
            maxLength={30}
            style={styles.Input}
          />

          <TextInput
            placeholder="Password..."
            required
            secureTextEntry={true}
            keyboardType="numeric"
            style={styles.Input}
          />

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Home')}
            style={styles.Btn}>
            <Text style={{color: 'white', justifyContent: 'center', top: 10}}>
              Login
            </Text>
          </TouchableOpacity>
          <Text style={{marginHorizontal: 120, top: 10}}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            style={{marginHorizontal: 155, top: 10}}
            onPress={() => navigation.navigate('Register')}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
  },
  V2: {
    // backgroundColor: 'grey',
    paddingVertical: 10,
    marginVertical: 0,
    width: '100%',
    height: 400,
    // alignItems: 'center',
    justifyContent: 'center',
  },

  Input: {
    fontSize: 15,
    backgroundColor: 'white',
    // borderColor: 'black',
    //borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 50,
    borderRadius: 30,
  },
  Btn: {
    height: 40,
    width: '40%',
    alignItems: 'center',
    backgroundColor: 'blue',
    top: 10,
    marginHorizontal: 115,
    borderRadius: 30,
  },
});
export default LoginScreen;
