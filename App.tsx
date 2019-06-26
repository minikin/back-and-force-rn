import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as data from './src/assets/off-pistes.json';

interface Props {}
export default class App extends Component<Props> {
	render() {
		console.log(data);
		const json = JSON.stringify(data);
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>{json}</Text>
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
