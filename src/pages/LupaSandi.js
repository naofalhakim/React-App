import React, { Component } from "react";
import { Text, View, TextInput, Image, TouchableOpacity} from "react-native";

import NotifLupaSandiBerhasil from "../components/NotifLupaSandiBerhasil";
import NotifLupaSandiFail from "../components/NotifLupaSandiFail";

import iconBack from "../../res/images/back.png";

class LupaSandi extends Component {
    state={
      email:'',
      emailValidity:false,
      isShowing:false,
      active: false
    }
  
    render() {
      return (
        <View style={{ backgroundColor: "#FFF" }}>
          {/* Main Kontent */}
          <View style={{ position: "relative", height: "100%" }}>
            <View style={{ padding: 20, marginTop: 5 }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ width: 17, height: 11, }}>
                <Image source={iconBack} style={{width:'100%', height:'100%'}}></Image>
              </TouchableOpacity>
              <Text
                onPress={()=> this.props.navigation.navigate('UbahSandi')}
                style={{
                  fontWeight: "600",
                  fontSize: 16,
                  lineHeight: 24,
                  color: "#6A6A6A",
                  paddingLeft: 2,
                  marginTop: 25
                }}
              >
                Lupa Kata Sandi?
              </Text>
              <Text
                style={{
                  fontWeight: "200",
                  marginTop: 10,
                  fontSize: 12,
                  lineHeight: 24,
                  color: "#6A6A6A",
                  paddingLeft: 2
                }}
              >
                Pastikan alamat email yang kamu masukkan telah terdaftar di
                Tanijoy
              </Text>
  
              <View style={{ marginTop: 30 }}>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 14,
                    lineHeight: 21,
                    color: "#6A6A6A",
                    marginBottom: 10
                  }}
                >
                  Username
                </Text>
                <View
                >
                  <TextInput
                    placeholder="Masukkan email"
                    placeholderTextColor="#CACCCF"
                    keyboardType="email-address"
                    onFocus={()=> this.setState(precState=>({
                      active: !precState.active}) 
                      )}
                    onBlur={()=> this.setState(precState=>({
                      active: !precState.active}) 
                      )}
                    style={[{
                      backgroundColor: "#FFF",
                      fontSize: 14,
                      fontWeight: "200",
                      lineHeight: 12,
                      borderWidth: 1,
                      borderRadius: 4,
                      paddingVertical: 14,
                      paddingHorizontal: 20
  
                    }, {borderColor: (this.state.active) ? "#009666": "#9D9D9D",}]}
                  onChangeText={email=> this.setState({email})}></TextInput>
                </View>
              </View>
  
              <TouchableOpacity
                disabled = {(this.state.email == '') }
                style={{
                  backgroundColor: (this.state.email !='') ? "#009666":"#9D9D9D",
                  borderRadius: 4,
                  alignItems: "center",
                  marginTop: 30,
                  paddingVertical: 14,
                }}
              onPress={()=> this.emailCheking()} >
                <Text
                  style={{
                    color: "#FFF",
                    fontWeight: "600",
                    lineHeight: 22,
                    fontSize: 15
                  }}
                >
                  Kirim
                </Text>
              </TouchableOpacity>
            </View>
            {/* Notif notif club */}
            {this._renderNotifEmail()}
          </View>
        </View>
      );
    }
  
    _renderNotifEmail() {
      if(this.state.isShowing){
        if(this.state.emailValidity){
          return <NotifLupaSandiBerhasil></NotifLupaSandiBerhasil>;
        }else{
          return <NotifLupaSandiFail></NotifLupaSandiFail>
        }
      }
      
    }
  
    emailCheking(){
      this.setState(precState=>({
        isShowing: true,
        emailValidity: (this.state.email != '') ? true:false
      }))
    }
  }
  
  export default LupaSandi;
  