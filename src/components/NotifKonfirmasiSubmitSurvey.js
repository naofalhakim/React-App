import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import iconHandShake from "../../res/images/ils-handshake.png";


const NotifKonfirmasiSubmitSurvey =()=> {

  const [notifStyle, setNotifStyle] = useState(styles.visible)

    return (
      <View style={notifStyle}>
        <View
          style={{
            position: "relative",
            height: "100%",
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
              onPress={() => setNotifStyle(styles.invisible)}
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
            <Image source={iconHandShake}></Image>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 24,
                lineHeight: 36,
                color: "#6A6A6A",
                marginTop: 8
              }}
            >
              Kirim Data Survey?
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
              Satu langkah lagi! Pastikan data survei telah kamu masukkan dengan benar dan tepat karena kamu tidak bisa mengubah data lagi setelah ini.
            </Text>
            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
            <TouchableOpacity
              style={{
                borderColor: "#009666",
                borderWidth:1,
                backgroundColor:"#FFF",
                borderRadius: 4,
                alignItems: "center",
                marginTop: 30,
                flex:1,
                marginHorizontal:5,
                paddingVertical: 14
              }}
            >
              <Text
                style={{
                  color: "#009666",
                  fontWeight: "600",
                  lineHeight: 22,
                  fontSize: 15
                }}
              >
                Periksa Lagi
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#009666",
                borderRadius: 4,
                alignItems: "center",
                marginTop: 30,
                flex:1,
                marginHorizontal:5,
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
                Kirim Data
              </Text>
            </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </View>
    );

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
    position:'absolute',
    width: 0,
    height: 0
  }
});

export default NotifKonfirmasiSubmitSurvey;
