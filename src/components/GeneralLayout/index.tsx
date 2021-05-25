import React, {useState} from 'react';
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
// import logo_react from '../../assets/Onboarding.png';
import ButtonElement from '../elements/button/button';

const GeneralLayout = ({layout}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
      {/* <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      /> */}
      <ScrollView style={backgroundStyle}>{layout}</ScrollView>
    </SafeAreaView>
  );
};

export default GeneralLayout;
