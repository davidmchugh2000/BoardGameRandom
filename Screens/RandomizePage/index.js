import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert } from 'react-native';
import styles from './styles';

const Separator = () => <View style={styles.separator} />;

const RandomizePage = ({ navigation }) => {

  const GamesListPagePressed = () => {
    navigation.navigate('Games List');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
        Do you have too many board games to keep track of or even figure out which to play?
          This will allow you to keep track of all your board games and select a random one to play.
        </Text>
        <Button
          title="View Games"
          color="#f194ff"
          onPress={() => GamesListPagePressed()}
        />
        <Button
          title="Randomize"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button title="Left button" onPress={() => Alert.alert('Left button pressed')} />
          <Button title="Right button" onPress={() => Alert.alert('Right button pressed')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RandomizePage;
