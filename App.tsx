import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as data from './src/assets/off-pistes.json';
import { OffPiste } from './src/models/OffPiste.js';

interface Props {}
export default class App extends Component<Props> {
  render() {
    const json = JSON.stringify(data);
    const posts = JSON.parse(json) as [OffPiste];

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{posts.toString}</Text>
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

const logPost = (id: number) => {
  console.log(`
    Id: ${id}
  `);
};
