import React from 'react';
import {View, StyleSheet} from 'react-native';
import { SearchBar, Text, Icon } from 'react-native-elements';
// import { Searchbar } from 'react-native-paper';
// import {color} from 'react-native-reanimated';
// import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBarComponent = () => {
  const [searchState, setSearchState] = React.useState('');

  //   const onChangeSearch = ({search}: any) => setSearchState(search);
  return (
    <View style={styles.container}>
      <Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>

      <Text style={styles.text}> arroz</Text>
      {/* <SearchBar
        // round
        platform="default"
        searchIcon={{size: 20}}
        placeholder="Search"
        placeholderTextColor="#9FA5C0"
        onChangeText={setSearchState}
        value={searchState}
        style={styles.searchBar}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    color: 'blue',
    width: '100%',
    // height: '100%'
    borderRadius: 70,
    
  },
  searchBar: {
    backgroundColor: '#F4F5F7',
    // marginTop: 50,
    borderRadius: 50,

  },
  text: {
    backgroundColor: 'green',
    color: 'black',
    borderRadius: 70,

    // height: '100%'
  },
});
export default SearchBarComponent;
