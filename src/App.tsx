import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as data from './assets/off-pistes.json';
import { OffPiste } from './models/OffPiste.js';

export default class App extends Component {
  render() {
    const json = JSON.stringify(data);
    const posts = JSON.parse(json) as [OffPiste];
    console.log(posts);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>TTTT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

const logPost = (id: number) => {
  console.log(`
    Id: ${id}
  `);
};
