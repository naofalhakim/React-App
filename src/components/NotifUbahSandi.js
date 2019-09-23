import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

class NotifUbahSandi extends React.Component {
  constructor(props){
    super(props);
    
    if(props.isSucceed){
      this.state ={
        title :'Kata Sandi Berhasil Diubah!',
        content : 'Kata sandimu berhasil dirubah sekarang kamu sudah punya kata sandi baru untuk masuk ke akun Tanijoy',
        buttonText : 'Masuk Sekarang',
        notifStyle: styles.visible,
      }    
    }else{
      this.state={
        title :'Kata Sandi Gagal Diubah',
        content : 'Pastikan kata sandi barumu tidak sama dengan kata sandi yang lama dan kamu punya koneksi internet yang baik ya!',
        buttonText : 'Masukkan Ulang Kata Sandi',
        notifStyle: styles.visible,
      }
    }
  }

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
                <TouchableOpacity style={{ marginLeft: 5 }} onPress={()=> this.closeNotif()}>
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

                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 24,
                    lineHeight: 36,
                    color: "#6A6A6A",
                    marginTop: 8
                  }} 
                >
                  {this.state.title}
                </Text>
                <Text
                  style={{
                    textAlign: "justify",
                    fontSize: 12,
                    lineHeight: 18,
                    color: "#6A6A6A",
                    marginTop: 5
                  }}
                > {this.state.content}
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
                  > {this.state.buttonText}
                    
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
    width: "0%",
    height: "0%"
  }
});

export default NotifUbahSandi;
