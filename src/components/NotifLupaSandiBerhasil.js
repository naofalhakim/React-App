import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import iconSuccesSendEmail from "../../res/images/ils-successsendemail.png";


class NotifLupaSandiBerhasil extends React.Component {
  state = {
    notifStyle: styles.visible
  };

  render() {
    return (
      <View style={this.state.notifStyle}>
        <View style={{ position: "relative", flex: 1, flexWrap: "wrap" }}>
          <View
            style={{ backgroundColor: "#333333", opacity: 0.5, flex: 1 }}
          ></View>

          <View
            style={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundColor: "#FFF",
              padding: 20,
              position: "absolute",
              bottom: 45,
              left: 0,
              right: 0
            }}
          >
            <TouchableOpacity
              onPress={()=>this.closeNotif()}
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
            {/* <Image source={iconSuccesSendEmail}></Image> */}
            <Image source={iconSuccesSendEmail}></Image>

            <Text
              style={{
                fontWeight: "600",
                fontSize: 24,
                lineHeight: 36,
                color: "#6A6A6A",
                marginTop: 8
              }}
            >
              Email Berhasil Dikirim!
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
              Kami Sudah mengirimkan tautan agar kamu bisa mengubah kata sandi sesuai langkah-langkah yang ada di email.
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#FFF",
                borderRadius: 4,
                borderColor:'#009666',
                borderWidth:1,
                alignItems: "center",
                marginTop: 30,
                paddingVertical: 14
              }}
            onPress={()=> this.props.navigation.navigate('UbahSandi')}>
              <Text
                style={{
                  color: "#009666",
                  fontWeight: "600",
                  lineHeight: 22,
                  fontSize: 15
                }}
              >
                Oke
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  closeNotif() {
    this.setState(precState => ({
        notifStyle: styles.invisible
    }));
  }
}

const styles = StyleSheet.create({
  visible: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  invisible: {
    width: 0,
    height: 0
  }
});

export default NotifLupaSandiBerhasil;
