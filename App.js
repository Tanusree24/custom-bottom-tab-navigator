import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";


var iconHeight = 28;
var iconWidth = 28;

export default class App extends React.Component {
  state = {
    screenText: "Click the button!",
  };

  changeText = (text) => {
    console.log(text + "has been clicked!");
    this.setState({
      screenText: text,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 35, color: "yellow" }}>
            {this.state.screenText}
          </Text>
          <StatusBar style="Dark" />
        </View>

        <View style={styles.NavContainer}>
          <View style={styles.NavBar}>
            <Pressable
              onPress={() => this.changeText("Special")}
              style={styles.IconBehave}
              android_ripple={{ borderless: true, radius: 60 }}
            >
            <Image
            source={require("./assets/Icons/home.png")}
            style={{ width: 30, height: 30, tintColor:'#ff7f50' }}
           />
            </Pressable>

            <Pressable
              onPress={() => this.changeText("It's time to get up")}
              style={styles.IconBehave}
              android_ripple={{ borderless: true, radius: 60 }}
            >
            <Image
            source={require("./assets/Icons/alarm.png")}
            style={{ width: 30, height: 30, tintColor:'#0000ff' }}
          />
            </Pressable>

            <Pressable
              onPress={() => this.changeText("Car settings")}
              style={styles.IconBehave}
              android_ripple={{ borderless: true, radius: 60 }}
            >
            <Image
            source={require("./assets/Icons/car.png")}
            style={{ width: 30, height: 30, tintColor:'#ff8c00' }}
          />
            </Pressable>

            <Pressable
              onPress={() => this.changeText("You have a new message")}
              style={styles.IconBehave}
              android_ripple={{ borderless: true, radius: 60 }}
            >
            <Image
            source={require("./assets/Icons/whatsapp.png")}
            style={{ width: 30, height: 30, tintColor:'#7fff00' }}
          />
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dc143c",
    alignItems: "center",
    justifyContent: "center",
  },

  NavContainer: {
    // position: 'bottom',

    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
  },

  NavBar: {
    flexDirection: "row",
    backgroundColor: "#fffaf0",
    width: "80%",
    justifyContent: "space-evenly",
    borderRadius: 50,
  },

  IconBehave: {
    padding: 18,
  },
});
