import React, { useState, useEffect, useRef } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { Camera } from "expo-camera";
// import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";
import * as ImageManipulator from "expo-image-manipulator";

export default function Capture({ navigation }) {
	const [hasPermission, setHasPermission] = useState(null);
	const dimensions = useRef(Dimensions.get("window"));
	const screenWidth = dimensions.current.width;
	const screenHeight = dimensions.current.height;
	const height = Math.round((screenWidth * 16) / 9);
	const ref = React.createRef();

	const takePicture = async (evt) => {
		// const options = { quality: 0.5, base64: true };
		// const data = await ref.current.takePictureAsync(options);
		// cropData = {
		// 	offset: { x: 0, y: evt },
		// 	size: { width: 480, height: 100 },
		// 	// displaySize: { width: 480, height: 100 },
		// 	// resizeMode: 'contain/cover/stretch'
		// };

		// console.log("dataURi is: ", data.uri);

		// ImageEditor.cropImage(data.uri, cropData)
		// 	.then((url) => {
		// 		console.log("Cropped image uri", url);
		// 	})
		// 	.catch((error) => {
		// 		console.log("Error is: ", error);
		// 	});

		// let resizedUri = await new Promise((resolve, reject) => {
		// 	ImageEditor.cropImage(
		// 		data.uri,
		// 		{
		// 			offset: { x: 0, y: evt },
		// 			size: { width: 480, height: 100 },
		// 			// displaySize: { width: 480, height: 100 },
		// 			// resizeMode: 'contain/cover/stretch'
		// 		},
		// 		(uri) => resolve(uri),
		// 		() => reject()
		// 	);
		// });

		if (ref.current) {
			const options = { quality: 0.5, base64: true };
			const data = await ref.current.takePictureAsync(options);
			console.log("screen width", screenWidth);
			console.log("screen Height", screenHeight);
			console.log("width", data.width);
			console.log("height", data.height);
			const crop1 = await ImageManipulator.manipulateAsync(data.uri, [
				{
					crop: {
						originX: 0,
						originY: evt * 5,
						width: data.width,
						height: 100,
					},
				},
			]);
			console.log("croped", crop1.width);

			console.log(data.uri);
			console.log(`x coord = ${evt}`);

			navigation.navigate("Display", { photo: crop1 });
		}
	};
	// const [type, setType] = useState(Camera.Constants.Type.back);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.container}>
			<Camera
				style={{ flex: 1, height: height, width: screenWidth }}
				type={Camera.Constants.Type.back}
				ratio="16:9"
				ref={ref}
				// ref={(ref) => {
				// 	this.camera = ref;
				// }}
			>
				<TouchableOpacity
					style={{
						flex: 1,
						justifyContent: "flex-end",
						alignContent: "center",
						alignItems: "center",
					}}
					onPress={(evt) => {
						takePicture(evt.nativeEvent.locationY);
					}}
				>
					<View
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							backgroundColor: "rgba(0.2, 0.2, 0.2, 0.2)",
							alignItems: "center",
							justifyContent: "space-around",
							flex: 0,
						}}
					></View>
				</TouchableOpacity>
			</Camera>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	buttonContainer: {
		flex: 1,
		backgroundColor: "transparent",
		flexDirection: "row",
		margin: 20,
	},
	button: {
		flex: 0.1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		color: "white",
	},
});
