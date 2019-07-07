import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import data from './assets/off-pistes.json';
import { OffPiste } from './models/OffPiste.js';
import ListItem from './components/ListItem.js';

class App extends Component {
  render() {
    const json = JSON.stringify(data);
    const lines = JSON.parse(json) as OffPiste[];
    const item = lines[4];

    return (
      <View style={styles.container}>
        {/* <ListItem {...item} /> */}
        <Text style={styles.title}>{lines[23].name}</Text>
        <Text style={styles.body}>{lines[23].description}</Text>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10
  },
  body: {
    fontSize: 14,
    textAlign: 'left',
    margin: 10
  }
});
