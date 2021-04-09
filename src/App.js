import React from 'react';
import {SafeAreaView, ScrollView, useColorScheme, View} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import EStyleSheet from 'react-native-extended-stylesheet';

import StartScreen from './screens/home';
import RootNavigation from './router/RootNavigation'


const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView style={backgroundStyle}>
                {/* <StartScreen />
                 */}
                 <RootNavigation/>
            </ScrollView>
        </SafeAreaView>
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
export default App;
