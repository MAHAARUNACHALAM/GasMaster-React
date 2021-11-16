import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
} from "react-native";
import Bottom from "../components/Bottom";
import firebase from "../firebase";
// import { EmailAuthProvider } from "firebase/auth";

export default class Login extends React.Component {
	state = {
		email: "",
		password: "",
		errorMessage: null,
	};
	handleLogin = () => {
		const { email, password, errorMessage } = this.state;
		console.log(email, password);
		// const credential = EmailAuthProvider.credential(email, password);
		// console.log(credential);
		try {
			console.log("login");
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(() => {
					this.props.navigation.navigate("SearchId");
					console.log("Login Success");
				});
			// .catch((error) => this.setState({ errorMessage: error.message }));
		} catch (error) {
			console.log(error);
		}
	};
	render() {
		return (
			<View style={styles.container}>
				<Image
					style={styles.imagelogo}
					source={require("../assets/icon.png")}
				/>

				<Text style={styles.logo}>LPG Gas Meter</Text>

				<View style={styles.inputView}>
					<TextInput
						style={styles.inputText}
						placeholder="Email..."
						placeholderTextColor="#003f5c"
						onChangeText={(text) => this.setState({ email: text })}
					/>
				</View>
				<View style={styles.inputView}>
					<TextInput
						secureTextEntry
						style={styles.inputText}
						placeholder="Password..."
						placeholderTextColor="#003f5c"
						onChangeText={(text) => this.setState({ password: text })}
					/>
				</View>
				<TouchableOpacity
					style={styles.loginBtn}
					onPress={() => this.handleLogin()}
				>
					<Text style={styles.loginText}>LOGIN</Text>
				</TouchableOpacity>

				<Bottom />
			</View>
		);
	}
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
		marginBottom: 10,
	},
	loginText: {
		color: "white",
	},
});
