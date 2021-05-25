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
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import logo_react from '../assets/Onboarding.png';
import ButtonElement from '../components/elements/button/button';
import GeneralLayout from '../components/GeneralLayout/index';
import TextElement from '../components/elements/text/index';

const StartScreen = ({navigation}: any) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <GeneralLayout
            layout={
                <View style={styles.container}>
                    <View
                        style={[
                            styles.imageView,
                            {
                                backgroundColor: isDarkMode
                                    ? Colors.darker //? Colors.black
                                    : Colors.lighter, // : Colors.white,
                            },
                        ]}>
                        <Image style={styles.logo} source={require('../assets/Onboarding.png')} />
                    </View>
                    <View style={styles.content}>
                        <TextElement 
                            text=" Start Cooking"  
                            textAlign="center"
                            variant="title" 
                        />
                        <TextElement
                            text="Let’s join our community to cook better food!"
                            textAlign="center"
                            variant="text"
                        />
                        <View style={styles.button}>
                            <ButtonElement
                                variant="default"
                                textButton="Get Started!"
                                onPress={() =>
                                    navigation.navigate('HomeScreen')
                                }
                            />
                        </View>
                    </View>
                </View>
            }
        />
    );
};

let dimensions = Dimensions.get('window');
const styles = StyleSheet.create({
    // $height: dimensions['height'], //variável do EStyle
    // $width: dimensions['width'],

    container: {
        minHeight: dimensions['height'],
    },
    imageView: {
        alignItems: 'center',
    },
    content: {
        paddingHorizontal: 32,
        alignItems: 'center',
        textAlign: 'center',
    },
    logo: {
        alignItems: 'center',
    },
    button: {
        width: dimensions['width'],
        marginTop: 20,
        paddingHorizontal: 20,
    },
});

export default StartScreen;
