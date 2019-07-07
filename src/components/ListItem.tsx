import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { OffPiste } from '../models/OffPiste';

class ListItem extends Component<OffPiste> {
  _onPress = () => {
    console.log(this.props.id);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.name}</Text>
        <Text style={styles.body}>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default ListItem;
