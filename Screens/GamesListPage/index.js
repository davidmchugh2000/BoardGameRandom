import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import styles from './styles';
import { DataTable, Button } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Separator = () => <View style={styles.separator} />;

const GamesListPage = ({ navigation }) => {

  const swipeoutBtns = [
    {
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    }
  ]
  const [gamesList, setGamesList] = useState(
    [
      {
        name: 'Add Games',
        type: 'To Delete',
        expansion: false,
      },
    ]);

  const storeData = async (storageKey, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(storageKey, jsonValue)
    } catch (e) {
      alert(e);
    }
  }

  const getData = async (storageKey) => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      alert(e);
      return null;
    }
  }

  const deleteData = async (storageKey) => {
    try {
      const jsonValue = await AsyncStorage.removeItem(storageKey)
    } catch (e) {
      alert(e);
    }
  }

  const AddToListPressed = () => {
    navigation.navigate('Add To List');
  };

  const DeleteGamePressed = (index) => {
    console.log("Delete index " + index)
    deleteData('games');
    //navigation.navigate('Delete From List');
  };

  const setGameList = async () => {
    const x = await getData('games');
    console.log("Data gathered: " + JSON.stringify(x));
    if (x != null) {
      setGamesList(x);
    }
  };

  useEffect(() => {
    setGameList();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Type</DataTable.Title>
              <DataTable.Title >Expansion</DataTable.Title>
            </DataTable.Header>
            {gamesList.map((game, index) => (
              <Swipeout right={swipeoutBtns} onPress={() => DeleteGamePressed(index)}>
                <View>
                  <DataTable.Row>
                    <DataTable.Cell>{game.name}</DataTable.Cell>
                    <DataTable.Cell>{game.type}</DataTable.Cell>
                    <DataTable.Cell >{(game.expansion) === true ? <Button icon="check-circle"
                      labelStyle={styles.checkIcon}>
                    </Button> : <Button icon="block-helper" labelStyle={styles.noIcon}>
                    </Button>}</DataTable.Cell>
                  </DataTable.Row>
                </View>
              </Swipeout>
            ))}
          </DataTable>
          <Separator />
          <View>
            <Button mode="Text" color="#f194ff"
              onPress={() => AddToListPressed()}>
              Add to list
            </Button>
            <Button mode="Text" color="#f194ff"
              onPress={() => deleteData('games')}>
              Delete the list
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GamesListPage;
