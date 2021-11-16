import React, { Component } from "react";
import {
	StyleSheet,
	Button,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
} from "react-native";

import Login from "./Login";
import App from "../App";
import Bottom from "../components/Bottom";

export default function PreLogin({ navigation }) {
	return (
		<View style={styles.container}>
			<Image style={styles.imagelogo} source={require("../assets/icon.png")} />

			<Text style={styles.logo}>LPG Gas Meter</Text>

			<TouchableOpacity
				style={styles.loginBtn}
				onPress={() => navigation.navigate("Login")}
			>
				<Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.loginBtn}>
				<Text style={styles.loginText}>SignUp</Text>
			</TouchableOpacity>

			<Bottom />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "center",
	},
	imagelogo: {
		marginTop: 100,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "center",
	},
	atsuya: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		alignItems: "flex-end",
		justifyContent: "flex-end",
	},
	logo: {
		fontWeight: "bold",
		fontSize: 35,
		color: "#000000",
		alignItems: "center",
		marginTop: 10,
		marginBottom: 40,
	},
	inputView: {
		width: "80%",
		borderColor: "#3E4EE3",
		borderRadius: 25,
		borderWidth: 2,
		height: 50,
		marginBottom: 20,
		justifyContent: "center",
		padding: 20,
	},
	inputText: {
		height: 50,
		color: "#000000",
	},
	forgot: {
		color: "white",
		fontSize: 11,
	},
	loginBtn: {
		width: "80%",
		backgroundColor: "#3E4EE3",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
		marginBottom: 2,
	},
	loginText: {
		color: "white",
	},
});
