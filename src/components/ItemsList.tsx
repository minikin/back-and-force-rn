import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { OffPiste } from '../models/OffPiste';
import ListItem from './ListItem';

class ItemsList extends Component<OffPiste[]> {
  _renderItem = ({ item }: { item: OffPiste }) => <ListItem {...item} />;
  _keyExtractor = ({ item }: { item: OffPiste }) => item.id;

  render() {
    return <FlatList data={this.props} renderItem={this._renderItem} />;
  }
}

export default ItemsList;
