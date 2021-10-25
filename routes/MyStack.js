import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Dashboard from "../Screens/Dashboard";
import Login from "../Screens/Login";
import PreLogin from "../Screens/PreLogin";
import ScanQr from "../Screens/ScanQr";
import SearchId from "../Screens/SearchId";
import Capture from "../Screens/Capture";
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
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default MyStack;
