import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from 'expo-checkbox';

const Separator = () => <View style={styles.separator} />;
const BlankSeparator = () => <View style={styles.blankSeparator} />;


const HomePage = ({ navigation }) => {

  const [gameName, setGameName] = React.useState("");
  const [gameType, setGameType] = React.useState("");
  const [isChecked, setChecked] = useState(false);



  const SaveGamePressed = async () => {
    if (gameName !== "" || gameType !== "") {


      let storedArray = await getData('games');
      if (storedArray == null) {
        let newArr = new Array();
        newArr.push({ "name": gameName, "type": gameType, "expansion": isChecked });
        await storeData('games', JSON.stringify(newArr));
      }
      else {
        storedArray.push({ "name": gameName, "type": gameType, "expansion": isChecked });

        await storeData('games', JSON.stringify(storedArray));
      }
    }
    else {
      alert("Game or type is blank");
    }
  };

  const getData = async (storageKey) => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      alert(e);
      return null;
    }
  }

  const storeData = async (storageKey, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(storageKey, value)
    } catch (e) {
      alert(e);
      console.log(e);
    }
    finally {
      setGameName("");
      setGameType("");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View>
          <Text style={styles.title}>
            Input all needed information to add a new game
          </Text>
          <Separator />
          <TextInput
            label="Game Name"
            value={gameName}
            selectionColor="#f194ff"
            underlineColor='#f194ff'
            activeUnderlineColor='#f194ff'
            onChangeText={gameName => setGameName(gameName)}
          />
          <BlankSeparator />
          <TextInput
            label="Game Type"
            value={gameType}
            selectionColor="#f194ff"
            underlineColor='#f194ff'
            activeUnderlineColor='#f194ff'
            onChangeText={gameType => setGameType(gameType)}
          />

          <BlankSeparator />
          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#f194ff' : undefined}
            />
            <Text style={styles.paragraph}>Game is an expansion</Text>
          </View>
          <Separator />
          <Button
            title="Save Game"
            color="#f194ff"
            onPress={() => SaveGamePressed()}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomePage;
