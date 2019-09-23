import React, {useState} from 'react'
import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native'

import MyInputText from "../components/MyInputText";
import ConditionalButton from "../components/ConditionalButton";
import MyInputPassword from "../components/MyInputPassword";
import TopBar from "../components/TopBar";
import NotifLogin from "../components/NotifLogin";

const NewLogin =(props)=>{
    const [isFilled1, setIsFilled1] = useState(false)
    const [isFilled2, setIsFilled2] = useState(false)
    const [isShowed, setIsShowed] = useState(false)

    return(
        <View style={styles.container}>
            <View style={{ position: "relative", height:'100%' }}>
                  <StatusBar
                  barStyle="light-content"
                  // dark-content, light-content and default
                  hidden={false}
                  //To hide statusBar
                  backgroundColor="#009666"
                  //Background color of statusBar
                  translucent={false}
                  //allowing light, but not detailed shapes
                  networkActivityIndicatorVisible={true}
                />

                <View style={{ padding: 20, marginTop: 72,  }}>
                    <Text
                style={{
                    fontWeight: "600",
                    fontSize: 16,
                    lineHeight: 24,
                    color: "#6A6A6A",
                    paddingLeft: 2,
                    marginTop: 25
                }}
                onPress={()=> props.navigation.navigate('TabNavigator')}
                >
                Hallo, Selamat Datang!
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
              Sudah siap untuk melakukan survei hari ini?
            </Text>

                    <MyInputText isValid={true} onChecking={
                  (curStatus)=>setIsFilled1(curStatus)
                  } placeholderVal="Masukkan username"></MyInputText>

                    <MyInputPassword isValid={true} onChecking={
                  (curStatus)=>setIsFilled2(curStatus)
                  } placeholderVal="Masukkan kata sandi"></MyInputPassword>

                    <ConditionalButton onShowNotif={()=>
                      setIsShowed(!isShowed)} title="Masuk" isActive={(isFilled1 && isFilled2)}>
            </ConditionalButton>
                    <TouchableOpacity
                            onPress={() => props.navigation.navigate("Lupa Sandi")}
                            style={{ marginTop: 20, alignSelf: "center" }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  lineHeight: 22,
                  color: "#2BB673"
                }}
              >
                Lupa kata sandi?
              </Text>
            </TouchableOpacity>

            </View>
            
            {/* masukkin notif disini, masih bingung cara manggilnya gimana  */}
            {isShowed ? <NotifLogin></NotifLogin> : <View></View>}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    }
})

export default NewLogin