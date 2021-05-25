import React from 'react';
import {
    TouchableOpacity,
    TouchableHighlight,
    Text,
    useColorScheme,
    View,
    StyleSheet,
} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import Icon from 'react-native-vector-icons/FontAwesome';

interface ButtonProps {
    textButton: string;
    variant: string;
    // containerStyle: string;
    onPress: () => void;
};

const ButtonElement = ({
    textButton,
    variant,
    // containerStyle,
    onPress
}: ButtonProps) => {
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
                // underlayColor="#fff"
                onPress={() => onPress()}>
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

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        textAlign: 'center',
    },
    text: {
        paddingVertical: 15,
        width: '100%',
        height: 50,
        borderRadius: 70,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '700',
    },
    submit: {
        width: '100%',
        margin: 10,
        borderRadius: 70,
        borderWidth: 1,
        // textAlign: 'center',
        fontWeight: '700',
    },
});

export default ButtonElement;
