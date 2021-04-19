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
import GeneralLayout from '../../components/GeneralLayout/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextElement from '../../components/elements/text/index';

const StartScreen = ({navigation}) => {
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
                        <Image style={styles.logo} source={logo_react} />
                    </View>
                    <View style={styles.content}>
                        <TextElement variant="title" text=" Start Cooking" />
                        <TextElement
                            // colorText= 'blue'
                            textAlign="center"
                            text="Let’s join our community to cook better food!"
                        />
                        <View style={styles.button}>
                            <ButtonElement
                                // variant="danger"
                                textButton="Get Started!"
                                onButtonPress={() =>
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
const styles = EStyleSheet.create({
    $height: dimensions['height'], //variável do EStyle
    $width: dimensions['width'],

    container: {
        minHeight: '$height',
    },
    containers: {
        minHeight: '$height',
    },
    imageView: {
        alignItems: 'center',
    },
    content: {
        paddingHorizontal: '2rem',
        alignItems: 'center',
        textAlign: 'center',
    },
    logo: {
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
    },
});

export default StartScreen;
