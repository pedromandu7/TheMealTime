import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    useColorScheme,
    View,
    StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import StartScreen from './screens/home';
import RootNavigation from './router/RootNavigation';

const Tab = createBottomTabNavigator();
const App = () => {
    return (
        <SafeAreaProvider >
            <RootNavigation />
        </SafeAreaProvider>
    );
};

EStyleSheet.build({
    $rem: 16,
});

export default App;
