import React, { useRef } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Detection from "./Detection";

export default function DisplayScreen({ route, navigation }) {
	console.log("Photo value is: ", route.params.photo.height);
	const dimensions = useRef(Dimensions.get("window"));
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignContent: "center",
				alignItems: "center",
				width: dimensions.current.width,
				height: 100,
			}}
		>
			<Image
				source={{ uri: route.params.photo.uri }}
				style={{ height: "100%", width: "100%" }}
			/>
		</View>
	);
}
