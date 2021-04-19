import React from 'react';
// import { Searchbar } from 'react-native-paper';
import {SearchBar} from 'react-native-elements';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View } from 'react-native';

const SearchBarComponent = () => {
    const [searchState, setSearchState] = React.useState('');

    const onChangeSearch = search => setSearchState(search);
    return (
        <View style={styles.container}>
            <SearchBar
                round
                searchIcon={{size: 20}}
                placeholder="Search"
                placeholderTextColor="gray"
                onChangeText={onChangeSearch}
                value={searchState}
                color="white"
                style={styles.searchBar}
            />
        </View>
    );
};
const styles = EStyleSheet.create({
    container: {
        color: 'white'
    },
    searchBar: {
        color: 'white',
        borderRadius: 150,
    },
});
export default SearchBarComponent;
