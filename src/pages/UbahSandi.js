import React, { Component } from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import iconPassVisible from "../../res/images/visible_pass.png";
import iconBack from "../../res/images/back.png";
import NotifUbahSandi from "../components/NotifUbahSandi";

class UbahSandi extends Component {
  state = {
    activePass: true,
    activePass2: true,
    iconTemp: iconPassVisible,
    isShowing:false,
    isSuceed:false,
    passVal:'',
   
   
    rePassVal:'',
    passwordValidity:'',
    brColor:"#9D9D9D",
    brColor2:"#9D9D9D",
  }

  render() {
    return (
      <View style={{ backgroundColor: "#FFF" }}>

        <View style={{ position: "relative", height: "100%" }}>
          {/* Main Kontent */}
          <View style={{ padding: 20, marginTop: 5 }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ width: 17, height: 11 }}>
              <Image source={iconBack} style={{width:'100%', height:'100%'}}></Image>
            </TouchableOpacity>

            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                lineHeight: 24,
                color: "#6A6A6A",
                paddingLeft: 2,
                marginTop: 25
              }}
            >
              Ubah Kata Sandi?
            </Text>
            <Text
              style={{
                fontWeight: "200",
                fontSize: 12,
                lineHeight: 24,
                color: "#6A6A6A",
                paddingLeft: 2
              }}
            >
              Masukkan kata sandi baru yang akan digunakan untuk masuk ke akun
              surveyormu
            </Text>

            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 14,
                  lineHeight: 21,
                  color: "#6A6A6A",
                  marginBottom: 10
                }}
              >
                Kata Sandi Baru
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TextInput
                  placeholder="Masukkan kata sandi baru"
                  placeholderTextColor="#CACCCF"
                  secureTextEntry={this.state.activePass}
                  onFocus={()=> this.setState(precState=>({
                    brColor: "#009666"}) 
                    )}
                  onBlur={()=> this.setState(precState=>({
                    brColor: "#9D9D9D"}) 
                    )}
                  style={{
                    backgroundColor: "#FFF",
                    fontSize: 14,
                    fontWeight: "200",
                    lineHeight: 12,
                    borderWidth: 1,
                    borderRadius: 4,
                    paddingVertical: 14,
                    paddingLeft: 20,
                    width:'100%',
                    borderColor: this.state.brColor
                  }}
                onChangeText={passVal=>this.setState({passVal})}></TextInput>
                <TouchableOpacity
                  onPress={() => this._activingPass()}
                  style={{ position:"absolute", alignItems:"flex-end", right:20 }}
                >
                  <Image source={this.state.iconTemp}></Image>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 14,
                  lineHeight: 21,
                  color: "#6A6A6A",
                  marginBottom: 10
                }}
              >
                Konfirmasi Kata Sandi
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TextInput
                  placeholder="Konfirmasi kata sandi"
                  placeholderTextColor="#CACCCF"
                  secureTextEntry={this.state.activePass2}
                  onFocus={()=> this.setState(precState=>({
                    brColor2: "#009666"}) 
                    )}
                  onBlur={()=> this.setState(precState=>({
                    brColor2: "#9D9D9D"}) 
                    )}
                  style={{
                    backgroundColor: "#FFF",
                    fontSize: 14,
                    fontWeight: "200",
                    lineHeight: 12,
                    borderWidth: 1,
                    borderRadius: 4,
                    paddingVertical: 14,
                    paddingLeft: 20,
                    width:'100%',
                    borderColor: this.state.brColor2
                  }}
                  onChangeText={rePassVal=>this.setState({rePassVal})}></TextInput>
                <TouchableOpacity
                  onPress={() => this._activingPass2()}
                  style={{ position: "absolute", right: 22 }}
                >
                  <Image source={this.state.iconTemp}></Image>
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={{
                color: "#DC3F4D",
                fontWeight: "600",
                fontSize: 12,
                lineHeight: 18,
                marginTop: 10
              }}
            >
              {this.state.passwordValidity}
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: ((this.state.passVal != '') && (this.state.rePassVal != '')) ? "#009666":"#9D9D9D",
                borderRadius: 4,
                alignItems: "center",
                marginTop: 30,
                paddingVertical: 14
              }}
            onPress={()=> this.checkingPasswrod()}>
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: "600",
                  lineHeight: 22,
                  fontSize: 15
                }}
              >
                Ubah Kata Sandi
              </Text>
            </TouchableOpacity>
          </View>

          {/* Notif notif club */}
          {this._renderNotif()}
          </View>
      </View>
    );
  }

  _activingPass() {
    this.setState(precState => ({
      iconTemp: precState.iconTemp ? iconPassVisible : iconSplash,
      activePass: !precState.activePass
    }));
  }

  _activingPass2() {
    this.setState(precState => ({
      iconTemp: precState.iconTemp ? iconPassVisible : iconSplash,
      activePass2: !precState.activePass2
    }));
  }

  checkingPasswrod(){
    this.setState({
      isShowing:true,
      isSuceed: (this.state.passVal == this.state.rePassVal) ? true:false,
      passwordValidity: this.state.isSuceed ? 'Konfirmasi kata sandi tidak sesuai':'Sesuai'
    })
    
  }

  changeIsShowStatus(){
    this.setState({isShowing:false})
  }

  _renderNotif(){
    // if(this.state.isShowing){
    if(this.state.isShowing){
      return(
        <View style={{ position: "absolute", width: "100%", height: "100%" }}>
          <NotifUbahSandi isSucceed={this.state.isSuceed}></NotifUbahSandi>
        </View>
      );
    }
  }

}

export default UbahSandi;
