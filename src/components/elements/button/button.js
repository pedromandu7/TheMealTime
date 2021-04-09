import React from 'react';
import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
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

const ButtonElement = ({textButton, imageUrl, containerStyle}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View
            style={{
                alignItems: 'center',
            }}>
            <TouchableHighlight
                style={[
                    styles.submit,
                    {
                        borderColor: !isDarkMode ? '#1FCC79' : '#159356',
                    },
                ]}
                // onPress={() => this.submitSuggestion(this.props)}
                underlayColor="#fff">
                <Text
                    style={[
                        styles.text,
                        {
                            color: '#ffffff',
                            backgroundColor: !isDarkMode
                                ? '#1FCC79'
                                : '#159356',
                        },
                    ]}>
                    {textButton}
                </Text>
            </TouchableHighlight>
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
        // height: '100%',
        borderRadius: 70,
        // borderWidth: 1,
        // borderColor: '#fff',
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
