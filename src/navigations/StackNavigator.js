import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MovieList from '../screens/MovieList'
import MovieDetails from "../screens/MovieDetails";


const Stack = createStackNavigator();
const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: '#fff',
            headerTitleStyle: {
                alignItems: 'center',
                headerBackTitleVisible: false,
            },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerShown: true,
        }}>
            <Stack.Screen name="MovieList" component={MovieList} options={{ headerStyle: { backgroundColor: '#fff' } }} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} options={{ headerStyle: { backgroundColor: '#35baf6' } }} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator };