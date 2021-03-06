import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import iconLoginFailed from "../../res/images/ils-gagallogin.png";

class NotifLogin extends Component {
  state = {
    myStyle: styles.visible
  };

  render() {
    return (
      <View style={this.state.myStyle}>
        <View
          style={{
            position: "relative",
            height: "92%",
            width: "100%",

          }}
        >
          <View
            style={{ backgroundColor: "#333333", opacity: 0.5, flex:1 }}
          ></View>
          <View
            style={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundColor: "#FFF",
              padding: 20,
              position: "absolute",
              bottom:0,
              left:0,
              right:0,
            }}
          >
            <TouchableOpacity
              onPress={() => this.closeNotif()}
              style={{ marginLeft: 5 }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 14,
                  lineHeight: 16,
                  color: "#333333"
                }}
              >
                X
              </Text>
            </TouchableOpacity>
            <Image source={iconLoginFailed}></Image>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 24,
                lineHeight: 36,
                color: "#6A6A6A",
                marginTop: 8
              }}
            >
              Belum Berhasil Masuk
            </Text>
            <Text
              style={{
                textAlign: "justify",
                fontSize: 12,
                lineHeight: 18,
                color: "#6A6A6A",
                marginTop: 5
              }}
            >
              Perikas lagi username dan kata sandi yang kamu masukkan dan
              pastikan kamu punya koneksi internet yang baik ya!
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#009666",
                borderRadius: 4,
                alignItems: "center",
                marginTop: 30,
                paddingVertical: 14
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: "600",
                  lineHeight: 22,
                  fontSize: 15
                }}
              >
                Oke, Coba Lagi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  closeNotif() {
    this.setState(precState => ({
      myStyle: styles.invisible
    }));
  }
}

const styles = StyleSheet.create({
  visible: {
    position: "absolute",
    width: "100%",
    height: "100%", 
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
  invisible: {
    width: "0%",
    height: "0%"
  }
});

export default NotifLogin;