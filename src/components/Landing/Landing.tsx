import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from '@rneui/themed';
import landingLottie from './landing-lottie.json';

export default function Landing() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);
  return (
    <View style={styles.appContainer}>
      <View>
        <Text h1 style={{ padding: 10 }}>
          Spend
          <Text h1 style={styles.logoNoText}>
            No
          </Text>
        </Text>
      </View>
      <View>
        <LottieView
          autoPlay
          source={landingLottie}
          ref={animation}
          style={styles.lottie}
        />
      </View>
      <View>
        <Text h3 style={{ paddingLeft: 10 }}>
          Save Money
        </Text>
        <Text h3 style={{ paddingLeft: 10 }}>
          Track Money
        </Text>
        <View style={styles.buttonGroup}>
          <Button
            title="Sign In"
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            titleStyle={{ fontWeight: 'bold' }}
          />
          <Button
            title="Sign Up"
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            titleStyle={{ fontWeight: 'bold' }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoText: {
    fontWeight: '700',
  },
  logoNoText: {
    color: '#1d3557',
  },
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  buttonGroup: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
  },
  buttonContainer: {
    width: 150,
    marginVertical: 10,
  },
  lottie: {
    marginLeft: 20,
    width: 500,
    height: 450,
  },
});
