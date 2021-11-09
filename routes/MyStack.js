import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Dashboard from "../Screens/Dashboard";
import Login from "../Screens/Login";
import PreLogin from "../Screens/PreLogin";
import ScanQr from "../Screens/ScanQr";
import SearchId from "../Screens/SearchId";
import Capture from "../Screens/Capture";
import DisplayScreen from "../Screens/DisplayScreen";
import Detection from "../Screens/Detection";
const Stack = createStackNavigator();
const MyStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="PreLogin"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="PreLogin" component={PreLogin} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SearchId" component={SearchId} />
				<Stack.Screen name="ScanQr" component={ScanQr} />
				<Stack.Screen name="Dashboard" component={Dashboard} />
				<Stack.Screen name="Camera" component={Capture} />
				<Stack.Screen name="Display" component={DisplayScreen} />
				<Stack.Screen name="Detection" component={Detection} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default MyStack;

// import React, { useState, useEffect, useRef } from "react";
// import {
// 	StyleSheet,
// 	Text,
// 	View,
// 	TouchableOpacity,
// 	Dimensions,
// } from "react-native";
// import { Camera } from "expo-camera";

// export default function Capture() {
// 	const [hasPermission, setHasPermission] = useState(null);
// 	const dimensions = useRef(Dimensions.get("window"));
// 	const screenWidth = dimensions.current.width;
// 	const height = Math.round((screenWidth * 16) / 9);
// 	const ref = React.createRef();

// 	// takePicture = async function () {
// 	// 	if (this.camera) {
// 	// 		this.camera.takePicture().then((data) => {
// 	// 			FileSystem.moveAsync({
// 	// 				from: data,
// 	// 				to: `${FileSystem.documentDirectory}photos/Photo_${this.state.photoId}.jpg`,
// 	// 			}).then(() => {
// 	// 				this.setState({
// 	// 					photoId: this.state.photoId + 1,
// 	// 				});
// 	// 				Vibration.vibrate();
// 	// 			});
// 	// 		});
// 	// 	}
// 	// };
// 	const takePicture = async () => {
// 		if (ref.current) {
// 			const options = { quality: 0.5, base64: true };
// 			const data = await ref.current.takePictureAsync(options);

// 			console.log(data.uri);
// 		}
// 	};
// 	// const [type, setType] = useState(Camera.Constants.Type.back);

// 	useEffect(() => {
// 		(async () => {
// 			const { status } = await Camera.requestPermissionsAsync();
// 			setHasPermission(status === "granted");
// 		})();
// 	}, []);

// 	if (hasPermission === null) {
// 		return <View />;
// 	}
// 	if (hasPermission === false) {
// 		return <Text>No access to camera</Text>;
// 	}

// 	return (
// 		<View style={styles.container}>
// 			<Camera
// 				style={{ flex: 1, height: height, width: "100%" }}
// 				type={Camera.Constants.Type.back}
// 				ratio="16:9"
// 				ref={ref}
// 				// ref={(ref) => {
// 				// 	this.camera = ref;
// 				// }}
// 			>
// 				<View style={styles.buttonContainer}>
// 					<TouchableOpacity
// 						style={{
// 							flex: 0,
// 							justifyContent: "flex-end",
// 							alignContent: "center",
// 							alignItems: "center",
// 						}}
// 						// onPress={async () => {
// 						// 	let photo = await this.camera.takePictureAsync({
// 						// 		quality: 0.5,
// 						// 		base64: true,
// 						// 		skipProcessing: true,
// 						// 		ratio: "16:9",
// 						// 	});
// 						// 	const source = photo;
// 						// 	console.log(source);
// 						// 	// this.camera.current.pausePreview();
// 						// 	// await handleSave(source);
// 						// 	// this.camera.current.resumePreview();
// 						// }}
// 						onPress={takePicture}
// 					>
// 						<Text style={{ fontSize: 25, color: "white", marginLeft: 110 }}>
// 							{" "}
// 							Snap{" "}
// 						</Text>
// 					</TouchableOpacity>
// 				</View>
// 			</Camera>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},

// 	buttonContainer: {
// 		flex: 1,
// 		backgroundColor: "transparent",
// 		flexDirection: "row",
// 		margin: 20,
// 	},
// 	button: {
// 		flex: 0.1,
// 		justifyContent: "flex-end",
// 		alignItems: "center",
// 	},
// 	text: {
// 		fontSize: 18,
// 		color: "white",
// 	},
// });
