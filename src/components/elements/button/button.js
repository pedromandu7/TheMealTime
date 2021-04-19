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


const ButtonElement = ({
    textButton,
    variant,
    containerStyle,
    onButtonPress
}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    let colors = ['#1FCC79',  '#159356'];

    if (variant == 'danger') {
        colors = ['#FF5842',  '#FF5842'];
    }

    return (
        <View
            style={{
                alignItems: 'center',
            }}>
            <TouchableOpacity
                style={[
                    styles.submit,
                    {
                        borderColor: !isDarkMode ? colors[0] : colors[1],
                    },
                ]}
                underlayColor="#fff"
                onPress={() => onButtonPress()}>
                <Text
                    style={[
                        styles.text,
                        {
                            color: '#ffffff',
                            backgroundColor: !isDarkMode
                                ? colors[0] : colors[1],
                        },
                    ]}>
                    {textButton}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        paddingHorizontal: '2rem',
        textAlign: 'center',
    },
    text: {
        paddingVertical: 15,
        width: '100%',
        borderRadius: 70,
        textAlign: 'center',
        fontWeight: '700',
    },
    submit: {
        width: '20rem',
        margin: 10,
        borderRadius: 70,
        borderWidth: 1,
        // textAlign: 'center',
        fontWeight: '700',
    },
});

export default ButtonElement;
