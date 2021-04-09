import React from 'react';
import {SafeAreaView, ScrollView, useColorScheme, View} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartScreen from '../screens/start/index';
import HomeScreen from '../screens/home';

const RootStack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <View style={{flex: 1}}>
                <RootStack.Navigator initialRouteName="StartScreen">
                    <RootStack.Screen
                        name="StartScreen"
                        component={StartScreen}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <RootStack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                </RootStack.Navigator>
            </View>
        </NavigationContainer>
    );
};

const styles = EStyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
});

EStyleSheet.build({
    $rem: 16,
});
export default RootNavigation;
