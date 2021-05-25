import React from 'react';
import {Text, useColorScheme, View, StyleSheet} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from 'react-native-reanimated';

interface TextProps {
  text: string;
  variant: string;
  // fontWeight: string;
  textAlign: string;
  // fontSize: number;
  // colorText: string;
  // opacity: number;
}

var varianting = '';
var opacityTitle = 0.5;
var Weight = '300';
let Align = 'center';

const TextElement = ({text, variant, textAlign}: TextProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const colorText = isDarkMode ? Colors.light : Colors.dark;

  return (
    <Text
      style={[
        styles.text,
          {
            fontWeight: variant === "title" ? '700' : '300',
            opacity: variant === "title" ? 1 : 0.5,
          }
      ]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    width: '100%',
    height: 55,
    marginTop: 8,
    fontWeight: '500',
    // opacity: opacityTitle,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default TextElement;
