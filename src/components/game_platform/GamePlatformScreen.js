import React, { Component, useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Image, Dimensions, Text, ActivityIndicator, TouchableHighlight, Modal, Pressable } from "react-native";
import CountdownCircle from 'react-native-countdown-circle'
import { Button } from "react-native-elements";

const ScreenWidth = Dimensions.get("window").width;

const DATA = [
  {
    id: "1",
    title: "1",
    uri: require('../../../assets/cards/2_of_clubs.png')
  },
  {
    id: "2",
    title: "2",
    uri: require('../../../assets/cards/queen_of_diamonds.png')
  },
  {
    id: "3",
    title: "3",
    uri: require('../../../assets/cards/jack_of_hearts2.png')
  },
  {
    id: "4",
    title: "4",
    uri: require('../../../assets/cards/10_of_hearts.png')
  },
  {
    id: "5",
    title: "5",
    uri: require('../../../assets/cards/6_of_clubs.png')
  },
  {
    id: "6",
    title: "6",
    uri: require('../../../assets/cards/red_joker.png')
  },
  {
    id: "7",
    title: "7",
    uri: require('../../../assets/cards/3_of_hearts.png')
  },
  {
    id: "8",
    title: "8",
    uri: require('../../../assets/cards/ace_of_spades.png')
  },
  {
    id: "9",
    title: "9",
    uri: require('../../../assets/cards/8_of_hearts.png')
  },
  {
    id: "10",
    title: "10",
    uri: require('../../../assets/cards/king_of_spades.png')
  },
  {
    id: "11",
    title: "11",
    uri: require('../../../assets/cards/queen_of_spades2.png')
  },
  {
    id: "12",
    title: "12",
    uri: require('../../../assets/cards/9_of_hearts.png')
  }
];

const EMPTY_CARDS = [
  {
    id: "1",
    title: "1",
    uri: require('../../../assets/cards/back.png')
  },
  {
    id: "2",
    title: "2",
    uri: require('../../../assets/cards/back.png')
  },
  {
    id: "3",
    title: "3",
    uri: require('../../../assets/cards/back.png')
  },
  {
    id: "4",
    title: "4",
    uri: require('../../../assets/cards/back.png')
  }
];

const GamePlatformScreen = ({ navigation }) => {
  const [isTimeEnd, setTimeEnd] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [resultText, setResultText] = useState("");
  const [questionCardArray, setQuestionCardArray] = useState([]);
  const [shuffledQuestionCardArray, setShuffledQuestionCardArray] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);
  const [findCard, setFindCard] = useState([]);
  const [isViewCards, setViewCards] = useState(false);
  const [choosCardByUser, setChoosCardByUser] = useState({});

  useEffect(() => {
    setRandomIndex(getRandomInt(4))
    console.log("randomIndex", getRandomInt(4))
    const n = 4
    var shuffled = DATA.sort(function () { return .5 - Math.random() });
    const selectedCards = shuffled.slice(0, n);
    setQuestionCardArray(selectedCards);
  }, [])

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const finalResult = (item) => {
    const choosCardByUser = shuffledQuestionCardArray[parseInt(item.id) - 1];
    setChoosCardByUser(choosCardByUser)
    if (shuffledQuestionCardArray[randomIndex].id === choosCardByUser.id) {
      setModalVisible(true)
      setResultText("YOU WON THE GAME!")
    } else {
      setModalVisible(true)
      setResultText("YOU LOOSE THE GAME!")
    }
  }

  function shuffleCards(array) {
    let shuffled = array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

    setShuffledQuestionCardArray(shuffled);
  }

  renderItems = ({ item }) => (
    <View style={styles.item}>
      <Text>{navigation.user}</Text>
      {/* <TouchableHighlight onPress={() => {
        if (isTimeEnd && !isViewCards) {
          finalResult(item)
        }
      }
      }>
        <Image
          source={item.uri}
          style={{
            flex: 1,
            width: 120,
            height: 200,
            resizeMode: 'contain',
            borderWidth: isViewCards && choosCardByUser.id === item.id ? 3 : 0,
            borderColor: isViewCards && choosCardByUser.id === item.id ? "green" : "#fff"
          }}
        />
      </TouchableHighlight> */}
    </View>
  );

  const viewCards = () => {
    setViewCards(true)
  }

  return (
    <View style={styles.container}>
      {isTimeEnd ?
        <>
          {!isViewCards ? <FlatList
            data={EMPTY_CARDS}
            renderItem={this.renderItems}
            keyExtractor={item => item.id}
            numColumns={2}
          /> :
            <FlatList
              data={shuffledQuestionCardArray}
              renderItem={this.renderItems}
              keyExtractor={item => item.id}
              numColumns={2}
            />}
          <Image
            source={shuffledQuestionCardArray[randomIndex].uri}
            style={{
              flex: 2,
              width: 200,
              height: 400,
              resizeMode: 'contain',
            }}
          />
          {!isViewCards && <Text style={{ padding: 20, color: "blue" }}>Please find given card from above cards!</Text>}
          {!isViewCards && <Text style={{ padding: 5, color: "red" }}>Notes: Above cards are shuffled!</Text>}
        </>
        :
        <>
          <FlatList
            data={questionCardArray}
            renderItem={this.renderItems}
            keyExtractor={item => item.id}
            numColumns={2}
          />

          <CountdownCircle
            seconds={10}
            radius={30}
            borderWidth={8}
            color="#7FFF00"
            bgColor="#fff"
            textStyle={{ fontSize: 20 }}
            onTimeElapsed={() => {
              shuffleCards(questionCardArray);
              console.log("timeend")
              setTimeEnd(true)
            }}
          />
          <Text style={{ padding: 20 }}>Please rememeber this 4 cards! It will be hidden in next 10 sec!</Text>
        </>}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={stylesModal.centeredView}>
          <View style={stylesModal.modalView}>
            <Text style={stylesModal.modalText}>{resultText}</Text>
            <Pressable
              style={[stylesModal.button, stylesModal.buttonClose]}
              onPress={() => {
                setModalVisible(false);
                viewCards()
              }}
            >
              <Text style={stylesModal.textStyle}>View Cards</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {isViewCards && <Button
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 25, marginTop: 25 }}
        title='Play Again'
        onPress={() => navigation.navigate('Dashboard')}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    width: (ScreenWidth - 40) / 2 - 5,
    padding: 10,
  },
});


const stylesModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 80,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default GamePlatformScreen;