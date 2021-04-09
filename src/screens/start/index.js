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

const StartScreen = () => {
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
                        <Image style={styles.logo} source={logo_react} />
                    </View>
                    <View style={styles.content}>
                        <Text
                            style={[
                                styles.title,
                                {
                                    color: isDarkMode
                                        ? Colors.light
                                        : Colors.dark,
                                },
                            ]}>
                            Start Cooking
                        </Text>
                        <Text
                            style={[
                                styles.text,
                                {
                                    color: isDarkMode
                                        ? Colors.light
                                        : Colors.dark,
                                },
                            ]}>
                            Let’s join our community to cook better food!
                        </Text>
                        <View style={styles.button}>
                            <ButtonElement textButton="Get Started!" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

let height = Dimensions.get('window');
// console.log(height['height'])
const styles = EStyleSheet.create({
    $height: height['height'],
    $width: height['width'],
    container: {
        minHeight: '$height',
        // width: 350,
    },
    imageView: {
        // margin: 10,
        // width: 300,
        alignItems: 'center',
    },
    content: {
        paddingHorizontal: '2rem',
        alignItems: 'center',
        textAlign: 'center',
    },
    logo: {
        // marginLeft: '1rem',
        // marginBottom: '1.2rem',
        // width: 406,
        // height: '25.37rem',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    title: {

        fontSize: '1.3rem',
        fontFamily: 'inter',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: '3rem',
    },
    text: {
        width: '14.06rem',
        height: '3.36rem',
        fontSize: '1.06rem',
        textAlign: 'center',
        marginBottom: '2rem',
        marginTop: '1rem',
        fontWeight: '500',
        // position: absolute;
        // width: 209,
        // height: '4.7rem',
        // marginLeft: 83,
        // marginTop: 558,
    },
    button: {
        // position: absolute,
        // paddingHorizontal: 50,
        marginTop: 72}
});

export default StartScreen;
