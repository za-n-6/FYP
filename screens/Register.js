import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      username: '',
    };
  }
  submit() {
    console.warn(this.state);
  }
  validate = (value) => {
    console.log(value);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(value) === false) {
      console.log('Email is Not Correct');
      this.setState({email: value});
      return false;
    } else {
      this.setState({email: value});
      console.log('Email is Correct');
    }
  };

  render() {
    return (
      <View style={styles.container}>
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
          label="Name"
          value={this.state.name}
          onChangeText={this.setState.name}
          required
          mode="outlined"
          style={styles.Input}
        />
        <TextInput
          label="Username"
          value={this.state.username}
          onChangeText={this.setState.username}
          required
          mode="outlined"
          style={styles.Input}
        />

        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={this.setState.email}
          required
          mode="outlined"
          style={styles.Input}
        />
        <TextInput
          label="Password"
          value={this.state.password}
          onChangeText={this.setState.password}
          required
          secureTextEntry={true}
          mode="outlined"
          style={styles.Input}
        />
        <Button
          style={styles.Btn}
          mode="contained"
          onPress={() => this.props.navigation.navigate('Login')}>
          Register
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
  },
  Input: {
    top: 10,
    width: '90%',
    paddingLeft: 10,
    paddingBottom: 8,
  },
  Btn: {
    top: 20,
    //width: '70%',

    marginHorizontal: 80,
  },
});
