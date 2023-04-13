import React, { useState } from 'react';
import { Card, Icon, PricingCard } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { Button } from "react-native-elements";

const WalletScreen = ({ navigation }) => {
  return (
    <Card>
      <PricingCard
        color="#4f9deb"
        title="Available Balance"
        price="₹100"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'Deposit', icon: 'arrow-upward' }}
      />
      <Button
        title="Withdraw"
        onPress={() => navigation.navigate('Login')}
        icon={{
          name: "arrow-downward",
          size: 15,
          color: "#fff"
        }}
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 25, marginTop: 150, backgroundColor: "#81B622" }}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 100
  },
});

export default WalletScreen;