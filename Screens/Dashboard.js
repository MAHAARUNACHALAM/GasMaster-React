import React, { Component } from "react";

import { AppRegistry, Alert, Platform } from "react-native";

import { Fragment } from "react";
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
	FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { QrImg } from "../assets/QR.png";

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			GridViewItems: [
				// { key: "5 Kcal/kg", key1: require("./D1.png") },
				{ key: "Generate Bill", key1: require("./QR.png") },
				// { key: "View History", key1: require("./History.png") },
				// { key: "Gas Usage", key1: require("./Usage.png") },
			],
		};
	}

	GetGridViewItem(item) {
		Alert.alert(item);
	}

	render() {
		return (
			<Fragment>
				<View style={{ alignItems: "center", justifyContent: "center" }}>
					<Image style={styles.dashtop} source={require("./DashTop.png")} />
					<View style={{ position: "absolute", alignItems: "center" }}>
						<Image
							style={{ alignItems: "center" }}
							source={require("./iconw.png")}
						/>
						<Text style={styles.namedash}>LPG Gas Meter</Text>
						<Text style={styles.namedash}>Ramesh</Text>
					</View>
				</View>
				<View>
					<FlatList
						data={this.state.GridViewItems}
						renderItem={({ item }) => (
							<TouchableOpacity onPress={console.log("Hi+Pressed")}>
								<View
									style={{
										position: "relative",
										flex: 1,
										justifyContent: "space-evenly",
									}}
								>
									<View>
										<Image style={styles.flatlis__Image} source={item.key1} />
										<Text style={styles.inputText}> {item.key} </Text>
									</View>
								</View>
							</TouchableOpacity>
						)}
						numColumns={2}
					/>
				</View>
				<View style={styles.atsuya}>
					<Image
						source={require("./Atsuya.png")}
						style={{ width: 150, height: 50 }}
					/>
				</View>
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
	dashtop: {
		alignItems: "center",
		marginTop: 0,
		// height: "70%",
		width: "100%",
		borderBottomRightRadius: 35,
		borderBottomLeftRadius: 35,
	},
	buttonAllign: {
		flex: 0,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
	imagelogo: {
		position: "absolute",
		flex: 0,
		marginTop: 10,

		alignItems: "center",
		justifyContent: "center",
	},
	dashimage: {
		marginTop: 0,
		backgroundColor: "#FFFFFF",
	},
	atsuya: {
		flex: 1,
		marginTop: 0,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	logo: {
		flex: 0,
		position: "absolute",
		fontWeight: "bold",
		fontSize: 35,
		color: "white",
		alignItems: "flex-end",
		marginTop: 135,
		marginBottom: 5,
	},
	namedash: {
		fontWeight: "bold",
		fontSize: 25,
		color: "white",
		alignItems: "flex-start",
		// marginTop: 185,
		// marginBottom: 5,
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
	MainContainer: {
		backgroundColor: "#FFFFFF",
		justifyContent: "center",
		justifyContent: "space-evenly",
		flex: 1,
		// margin: 10,
		// paddingTop: (Platform.OS) === 'ios' ? 20 : 0
	},

	GridViewBlockStyle: {
		marginTop: 10,
		backgroundColor: "#FFFFFF",
		display: "flex",
		justifyContent: "center",
		flex: 1,
		alignItems: "center",
		height: 150,
		margin: 1,
		backgroundColor: "#00BCD4",
	},
	flatlis__Image: {
		// display: "flex",
		justifyContent: "center",
		height: 100,
		width: 100,
		padding: 10,
	},
	GridViewInsideTextItemStyle: {
		color: "#fff",
		padding: 10,
		fontSize: 18,
		// justifyContent: "flex-end",
	},
});
