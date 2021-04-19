import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Dimensions,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import logo_react from '../../assets/Onboarding.png';
import EStyleSheet from 'react-native-extended-stylesheet';
import ButtonElement from '../../components/elements/button/button';

const GeneralLayout = ({layout}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'darker-content'}
            />
            <ScrollView style={backgroundStyle}>
            {layout}
            </ScrollView>
        </SafeAreaView>
    );
};

export default GeneralLayout;
