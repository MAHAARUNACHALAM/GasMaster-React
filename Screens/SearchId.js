import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ImageComponent,
	Image,
	Button,
	Pressable,
} from "react-native";
import { Fragment } from "react";
import Bottom from "../components/Bottom";

export default class SearchId extends React.Component {
	state = {
		ConsumerNo: "",
	};
	render() {
		return (
			<Fragment>
				<View style={styles.container}>
					<Image
						style={styles.imagelogo}
						source={require("../assets/icon.png")}
					/>

					<Text style={styles.logo}>LPG Gas Meter</Text>

					<View style={styles.inputView}>
						<TextInput
							style={styles.inputText}
							placeholder="Consumer No..."
							placeholderTextColor="#003f5c"
							onChangeText={(text) => this.setState({ ConsumerNo: text })}
						/>
					</View>
				</View>
				<View style={styles.buttonAllign}>
					<Pressable
						style={styles.loginBtn}
						onPress={() => this.props.navigation.navigate("Detection")}
					>
						<Text style={styles.loginText}>ScanQr</Text>
					</Pressable>
					<Pressable
						style={styles.loginBtn}
						onPress={() => this.props.navigation.navigate("Dashboard")}
					>
						<Text style={styles.loginText}>Next</Text>
					</Pressable>
				</View>
				<Bottom />
			</Fragment>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	buttonAllign: {
		flex: 0,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
	imagelogo: {
		marginTop: 30,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "center",
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
		width: "30%",
		zIndex: 0.5,
		backgroundColor: "#3E4EE3",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 10,
	},
	loginText: {
		color: "white",
	},
});
