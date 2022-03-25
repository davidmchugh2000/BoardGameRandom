import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import { DataTable, Button } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';

const Separator = () => <View style={styles.separator} />;

const GamesListPage = ({ navigation }) => {

const swipeoutBtns = [
  {
  text: 'Delete',
  backgroundColor: 'red',
  underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
  }
]

  const gamesList = [
    {
      name: 'Catan',
      type: 'Strategy',
      expansion: false,
    },
    {
      name: '7 Wonders',
      type: 'Strategy',
      expansion: true,
    },
  ];

  const AddToListPressed = () => {
    navigation.navigate('Add To List');
  };

  const DeleteGamePressed = (index) => {
    console.log("Delete index " + index)
    //navigation.navigate('Delete From List');
  };

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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GamesListPage;
