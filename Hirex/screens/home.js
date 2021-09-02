import React from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#F5F5F5", height: "100%" }}>
      <View style={styles.h_layout}>
        <View style={styles.h_text}>
          <Text style={styles.h_heading}>
            Hire<Text style={styles.h_blue}>x</Text>
          </Text>
          <Text style={styles.h_stext}>Simplified Work Finding.</Text>
        </View>
        <Image
          source={require("../assets/remote-team.png")}
          style={styles.h_image}
        />
        <View style={styles.h_buttons}>
          <Pressable style={styles.h_login}>
            <Text style={{ color: "#FFFF", fontSize: "15" }}>Login</Text>
          </Pressable>
          <Pressable style={styles.h_signup}>
            <Text style={{ color: "#000000", fontSize: "15" }}>
              Create a new account
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  h_layout: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  h_blue: {
    color: "#0679FF",
  },

  h_heading: {
    fontSize: 55,
    fontWeight: "bold",
  },
  h_text: {
    marginHorizontal: 25,
    marginVertical: 50,
  },
  h_stext: {
    fontSize: 20,
    marginHorizontal: 3,
    marginVertical: 10,
  },
  h_buttons: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 60,
  },
  h_login: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0679FF",
    paddingVertical: 22,
    paddingHorizontal: 165,
    borderRadius: 40,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  h_signup: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEEEEE",
    paddingVertical: 22,
    paddingHorizontal: 110,
    borderRadius: 40,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  h_image: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },
});

export default Home;
