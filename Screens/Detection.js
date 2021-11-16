import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import Svg, { Rect } from "react-native-svg";
import * as tf from "@tensorflow/tfjs";
import { fetch, bundleResourceIO } from "@tensorflow/tfjs-react-native";
import * as blazeface from "@tensorflow-models/blazeface";
import * as jpeg from "jpeg-js";
export default function Detection() {
	const [imageLink, setImageLink] = useState(
		// 8"https://firebasestorage.googleapis.com/v0/b/lpggasmaster1.appspot.com/o/1.jpg?alt=media&token=4b50341c-8e52-4960-ab20-93714f0ee6f9.jpg"
		// "https://firebasestorage.googleapis.com/v0/b/lpggasmaster1.appspot.com/o/7694.jpg?alt=media&token=340346ff-df70-494d-afc5-72f7bd54a5b8"
		// 5
		// "https://firebasestorage.googleapis.com/v0/b/lpggasmaster1.appspot.com/o/7582.jpg?alt=media&token=c5758d20-b9ad-4738-8c9f-a994572ce710"
		// 9
		"https://firebasestorage.googleapis.com/v0/b/lpggasmaster1.appspot.com/o/7213.jpg?alt=media&token=edd008d3-a26e-4a8e-9f64-4b443348540f"
		// 2
		// "https://firebasestorage.googleapis.com/v0/b/lpggasmaster1.appspot.com/o/7286.jpg?alt=media&token=0787bd6a-74ce-449a-bae7-c1380ff833bd"
		// 3 8
		// "https://firebasestorage.googleapis.com/v0/b/lpggasmaster1.appspot.com/o/7310.jpg?alt=media&token=a5719a1e-61d5-402e-8932-4dc6db95a0fa"
		// 4
		// "https://firebasestorage.googleapis.com/v0/b/lpggasmaster1.appspot.com/o/7470.jpg?alt=media&token=0bceb108-38a4-488a-bbfe-557811fefe40"
		// 1
		// "https://firebasestorage.googleapis.com/v0/b/lpggasmaster1.appspot.com/o/7471.jpg?alt=media&token=ebfd0d2e-05f3-4c37-9596-2b82d3762fc7"
		// 7 8
		// "https://firebasestorage.googleapis.com/v0/b/lpggasmaster1.appspot.com/o/7543.jpg?alt=media&token=2585b5d0-42d4-42f8-a64b-234257bfdbed"
		// 7 8
		// "https://firebasestorage.googleapis.com/v0/b/lpggasmaster1.appspot.com/o/7854.jpg?alt=media&token=2167461c-735d-4967-828e-4df458deb923"
		// 7
		// "https://firebasestorage.googleapis.com/v0/b/lpggasmaster1.appspot.com/o/7870.jpg?alt=media&token=53a781c0-fc67-48e9-8649-6ec2ec431d6e"
	);
	const [isEnabled, setIsEnabled] = useState(true);
	const [faces, setFaces] = useState([]);
	const [faceDetector, setFaceDetector] = useState("");
	const [maskDetector, setMaskDetector] = useState("");
	useEffect(() => {
		async function loadModel() {
			console.log("[+] Application started");
			//Wait for tensorflow module to be ready
			const tfReady = await tf.ready();
			console.log("[+] Loading custom mask detection model");
			//Replce model.json and group1-shard.bin with your own custom model
			try {
				const modelJson = await require("../assets/model/model.json");
				const modelWeight = await require("../assets/model/group1-shard.bin");
				const maskDetector = await tf.loadGraphModel(
					bundleResourceIO(modelJson, modelWeight)
				);
				setMaskDetector(maskDetector);
				console.log("[+] Model Loaded");
			} catch (error) {
				console.log("[+] Loading pre-trained face detection model", error);
			}

			//Blazeface is a face detection model provided by Google
			// const faceDetector = await blazeface.load();
			//Assign model to variable

			// setFaceDetector(faceDetector);
			// console.log("[+] Model Loaded");
		}
		loadModel();
	}, []);
	function imageToTensor(rawImageData) {
		//Function to convert jpeg image to tensors
		const TO_UINT8ARRAY = true;
		const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);
		// Drop the alpha channel info for mobilenet
		const buffer = new Uint8Array(width * height * 3);
		let offset = 0; // offset into original data
		for (let i = 0; i < buffer.length; i += 3) {
			buffer[i] = data[offset];
			buffer[i + 1] = data[offset + 1];
			buffer[i + 2] = data[offset + 2];
			offset += 4;
		}
		return tf.tensor3d(buffer, [height, width, 3]);
	}
	// const getFaces = async () => {
	// 	try {
	// 		console.log("[+] Retrieving image from link :" + imageLink);
	// 		const response = await fetch(imageLink, {}, { isBinary: true });
	// 		const rawImageData = await response.arrayBuffer();
	// 		const imageTensor = imageToTensor(rawImageData).resizeBilinear([
	// 			224, 224,
	// 		]);
	// 		const faces = await faceDetector.estimateFaces(imageTensor, false);
	// 		var tempArray = [];
	// 		//Loop through the available faces, check if the person is wearing a mask.
	// 		for (let i = 0; i < faces.length; i++) {
	// 			let color = "red";
	// 			let width = parseInt(faces[i].bottomRight[1] - faces[i].topLeft[1]);
	// 			let height = parseInt(faces[i].bottomRight[0] - faces[i].topLeft[0]);
	// 			let faceTensor = imageTensor.slice(
	// 				[parseInt(faces[i].topLeft[1]), parseInt(faces[i].topLeft[0]), 0],
	// 				[width, height, 3]
	// 			);
	// 			faceTensor = faceTensor
	// 				.resizeBilinear([224, 224])
	// 				.reshape([1, 224, 224, 3]);
	// 			let result = await maskDetector.predict(faceTensor).data();
	// 			//if result[0]>result[1], the person is wearing a mask
	// 			if (result[0] > result[1]) {
	// 				color = "green";
	// 			}
	// 			tempArray.push({
	// 				id: i,
	// 				location: faces[i],
	// 				color: color,
	// 			});
	// 		}
	// 		setFaces(tempArray);
	// 		console.log("[+] Prediction Completed");
	// 	} catch (e) {
	// 		console.log("[-] Unable to load image", e);
	// 	}
	// };
	return (
		<View style={styles.container}>
			<Input
				placeholder="image link"
				onChangeText={(inputText) => {
					console.log(inputText);
					setImageLink(inputText);
					const elements = inputText.split(".");
					if (
						elements.slice(-1)[0] == "jpg" ||
						elements.slice(-1)[0] == "jpeg"
					) {
						setIsEnabled(true);
					} else {
						setIsEnabled(false);
					}
				}}
				value={imageLink}
				containerStyle={{ height: 40, fontSize: 10, margin: 15 }}
				inputContainerStyle={{
					borderRadius: 10,
					borderWidth: 1,
					paddingHorizontal: 5,
				}}
				inputStyle={{ fontSize: 15 }}
			/>
			<View style={{ marginBottom: 20 }}>
				<Image
					style={{
						width: 224,
						height: 224,
						borderWidth: 2,
						borderColor: "black",
						resizeMode: "contain",
					}}
					source={{
						uri: imageLink,
					}}
					PlaceholderContent={<View>No Image Found</View>}
				/>
				<Svg height="224" width="224" style={{ marginTop: -224 }}>
					{faces.map((face) => {
						return (
							<Rect
								key={face.id}
								x={face.location.topLeft[0]}
								y={face.location.topLeft[1]}
								width={face.location.bottomRight[0] - face.location.topLeft[0]}
								height={face.location.bottomRight[1] - face.location.topLeft[1]}
								stroke={face.color}
								strokeWidth="3"
								fill=""
							/>
						);
					})}
				</Svg>
			</View>
			<Button
				title="Predict"
				onPress={async () => {
					// getFaces();
					console.log("[+] Retrieving image from link :" + imageLink);
					const response = await fetch(imageLink, {}, { isBinary: true });
					const rawImageData = await response.arrayBuffer();
					var imageTensor = imageToTensor(rawImageData).resizeBilinear([
						224, 224,
					]);
					imageTensor = imageTensor.reshape([1, 224, 224, 3]).toInt();
					// const output1 = await maskDetector.executeAsync(imageTensor).data();
					const output = await maskDetector.executeAsync(imageTensor);
					const boxes = output[0].dataSync();
					const scores = output[4].arraySync();
					const classes = output[1].arraySync();
					console.log(scores[0][0] - 1);
					// let result = await maskDetector.predict(imageTensor).data();
					// console.log(output);
				}}
				disabled={!isEnabled}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

// import * as tf from "@tensorflow/tfjs";
// import * as mobilenet from "@tensorflow-models/mobilenet";
// import {
// 	fetch,
// 	decodeJpeg,
// 	bundleResourceIO,
// } from "@tensorflow/tfjs-react-native";

// import React from "react";
// import { View, Text } from "react-native";

// export default function Detection() {
// 	const modelJson = require("../assets/model/model.json");
// 	const modelWeights = require("../assets/model/group1-shard.bin");

// 	// Use the bundleResorceIO IOHandler to load the model
// 	const model = tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights));

// 	// Load an image from the web
// 	// const uri = "http://example.com/food.jpg";
// 	const uri =
// 		"https://firebasestorage.googleapis.com/v0/b/lpggasmaster1.appspot.com/o/1.jpg?alt=media&token=4b50341c-8e52-4960-ab20-93714f0ee6f9.jpg";
// 	const response = fetch(uri, {}, { isBinary: true });
// 	const imageData = response.arrayBuffer();
// 	const imageTensor = decodeJpeg(imageData);

// 	const prediction = model.predict(imageTensor)[0];
// 	console.log("Predicted", prediction);
// 	setState({
// 		prediction,
// 	});

// 	return <Text style={{ fontSize: 20, fontWeight: "500" }}>{prediction}</Text>;
// }

// // Get reference to bundled model assets

// // Use prediction in app
