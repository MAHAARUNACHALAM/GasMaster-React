import React from "react";
import { View, Text, Image } from "react-native";

export default function Bottom() {
	return (
		<View
			style={{
				flex: 1,
				marginTop: 0,
				backgroundColor: "#FFFFFF",
				alignItems: "center",
				justifyContent: "flex-end",
			}}
		>
			<Image
				source={require("../assets/Atsuya.png")}
				style={{ width: 150, height: 50 }}
			/>
		</View>
	);
}
