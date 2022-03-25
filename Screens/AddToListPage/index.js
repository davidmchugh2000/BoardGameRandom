import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-paper';

const Separator = () => <View style={styles.separator} />;
const BlankSeparator = () => <View style={styles.blankSeparator} />;


const HomePage = ({ navigation }) => {

  const [gameName, setGameName] = React.useState("");
  const [gameType, setGameType] = React.useState("");


  const SaveGamePressed = () => {
    //TODO: SAVE GAME
  };

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
