import * as React from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import { NameListType, nameList } from './components/data/names';
import TextHighlight from './components/TextHighlight/TextHighlight';

export interface AppProps {

}

const App: React.FC<AppProps> = () => {
  const filteredTextInitialState: Array<NameListType> = [];
  const [search, setSearch] = React.useState('');
  const [filteredText, setFilteredText] = React.useState(filteredTextInitialState);

  React.useEffect(() => {
    const filtered: Array<NameListType> = nameList.filter(el => el.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
    setFilteredText(filtered);
  }, [search])

  return (
    <SafeAreaView>
      <View>
        <TextInput placeholder='Ingrese búsqueda' style={styles.textInput} value={search} onChangeText={setSearch} />
        <FlatList
          data={search.length > 0 ? filteredText : nameList}
          renderItem={({ item }) => <TextHighlight key={item.key} text={item.name} search={search} />}
          keyExtractor={item => item.key}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,

  }
});

export default App;