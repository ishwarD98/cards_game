import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import dashboardGames from '../../dummyData/dashboardData.json'

const GameDashboardScreen = ({ navigation }) => {
  return (
    <ScrollView>
      {dashboardGames.dashboardGames.map(item => {
        return (
          <Card key={item.id}>
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider />
            <Card.Image source={require('../../../assets/cardlogo.png')} />
            <Text style={{ marginBottom: 10 }}>
              {item.description}
            </Text>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
              Game Price: {item.gamePrice}
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Winning Price: {item.winningPrice}
            </Text>
            <Card.Divider />
            <Button
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='PLAY'
              onPress={() => navigation.navigate('Platform', { user: 'Lucy' })}
            />
          </Card>
        )
      })}
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GameDashboardScreen;