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
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ButtonElement from '../components/elements/button/button';
import GeneralLayout from '../components/GeneralLayout';
import SearchBarComponent from '../components/SearchBar';

// import {SearchBar} from 'react-native-elements';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [searchState, setSearchState] = useState<string>();
  // const onChangeSearch = ({search}: any) => setSearchState(search);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GeneralLayout
      layout={
        <View style={styles.container}>
          <SearchBarComponent />

          {/* <SearchBar
            platform = "default"
            placeholder = "Search"
            inputStyle = {styles.search}
            // searchIcon = {false}
            // showLoading = {true} 
            onChangeText = { setSearchState }
            leftIconContainerStyle= {styles.searchIcon}
            value = { searchState }
          /> */}
          {/* <TouchableHighlight activeOpacity={0.5}> */}
          {/* <Image source={require('../assets/grandamather.jpg')} /> */}
          {/* </TouchableHighlight> */}
        </View>
      }
    />
  );
};

let dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    minHeight: dimensions['height'],
    // backgroundColor: 'purple',
  },
  imageView: {
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 32,
    alignItems: 'center',
    // textAlign: 'center',
  },
  logo: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'inter',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: '-0.3rem',
    // marginTop: '3rem',
  },
  text: {
    width: 225,//'14.06rem',
    height: 54,//'3.36rem',
    fontSize: 17,//'1.06rem',
    textAlign: 'center',
    marginTop: 80,//'.5rem',
    // marginTop: '1rem',
    fontWeight: '500',
    opacity: 0.5,
  },
  button: {
    marginTop: 20,
    // marginTop: 72
  },
  textTest: {
    fontSize: 48,//'3rem',
  },
  search: {
    // backgroundColor: 'red',
    color: 'red',
  },
  searchIcon: {
    // backgroundColor: 'red'
    color: 'red',
  },
});

export default HomeScreen;
