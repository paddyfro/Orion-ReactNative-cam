import React from "react";
import { StyleSheet, Text, View,Dimensions,Screen } from "react-native";
import Camera from "react-native-camera";
import CameraExample from './src/CameraExample';

export default function App() {
	return (

    <CameraExample />

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
