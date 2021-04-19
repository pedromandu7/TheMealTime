import React from 'react';
import {
    TouchableOpacity,
    TouchableHighlight,
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
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from 'react-native-reanimated';

const TextElement = ({
    text,
    variant,
    fontWeight,
    textAlign,
    fontSize,
    colorText,
    opacity,
}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    colorText = colorText
        ? colorText
        : isDarkMode
        ? Colors.lighter
        : Colors.dark;

    if (variant == 'title') {
        fontWeight = '700';
        textAlign = 'center';
        fontSize = 17;
        colorText = isDarkMode ? '#fff' : Colors.black;
        opacity = opacity ? opacity : 1;
    } else {
        fontWeight = fontWeight ? fontWeight : '500';
        opacity = opacity ? opacity : 0.5;
        textAlign = textAlign ? textAlign : 'justify';
        fontSize = fontSize ? fontSize : 15;
        colorText = colorText;
    }

    console.log(colorText);

    return (
        <Text
            style={[
                styles.text,
                {
                    fontWeight: fontWeight ? fontWeight : '500',
                    opacity: opacity ? opacity : 0.5,
                    textAlign: textAlign ? textAlign : 'justify',
                    fontSize: fontSize ? fontSize : 15,
                    color: colorText,
                },
            ]}>
            {text}
        </Text>
    );
};

const styles = EStyleSheet.create({
    container: {
        paddingHorizontal: '2rem',
        textAlign: 'center',
    },
    text: {
        width: '14.06rem',
        height: '3.36rem',
        marginTop: '.5rem',
    },
});

export default TextElement;
