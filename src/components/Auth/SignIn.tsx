import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { LandingScreenProps } from '~navigation/types';

// const auth = getAuth();

export default function SignIn({ navigation }: LandingScreenProps) {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  function signInPressHandler() {
    navigation.navigate('Main');
  }

  // async function signIn() {
  //   if (value.email === "" || value.password === "") {
  //     setValue({
  //       ...value,
  //       error: "Email and password are mandatory.",
  //     });
  //     return;
  //   }

  //   try {
  //     await signInWithEmailAndPassword(auth, value.email, value.password);
  //   } catch (error) {
  //     console.log('kian');
  //   }
  // }

  return (
    <View >
      <View>
        <Text>
          Sign In
        </Text>

        <View>
          <View>
            <View>
              <Icon style={styles.icon} name="email" size={18} color="gray" />
              <TextInput
                placeholder="Email"
                value={value.email}
                onChangeText={(text) => setValue({ ...value, email: text })}
              />
            </View>

            <View>
              <Icon style={styles.icon} name="lock" size={18} color="gray" />
              <TextInput
                placeholder="Password"
                onChangeText={(text) => setValue({ ...value, password: text })}
                secureTextEntry={true}
              />
            </View>
          </View>
          <Pressable>
            <Text
              onPress={signInPressHandler}
            >
              Sign In
            </Text>
          </Pressable>
        </View>
        <Text>
          Don't Have an account?{" "}
            Sign Up
          </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
});
