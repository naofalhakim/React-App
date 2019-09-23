import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image} from "react-native"
import TopBar from '../../components/TopBar'
import iconJanjiSukses from "../../../res/images/ils-buatjanjisukses.png";

const DataBerhasilSubmit = () =>{
    return(
        <View>
            <TopBar></TopBar>
            <View
            style={{
              backgroundColor: "#FFF",
              alignItems:"center",
              marginVertical:'25%',
              padding:30,

            }}
          >
            <Image source={iconJanjiSukses}></Image>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 24,
                lineHeight: 36,
                color: "#6A6A6A",
                marginTop: 8,
                textAlign:"center"
              }}
            >
              Data Survei Sudah Terkirim
            </Text>
            <Text
              style={{
                textAlign: "justify",
                fontSize: 12,
                lineHeight: 18,
                color: "#6A6A6A",
                marginTop: 5,
                textAlign:"center",
              }}
            >
              Selamat kamu sudah berhasil menyelesaikan tugas survei ini. Semua data yang telah kamu masukkan berhasil disimpan dan sedang kami verifikasi.
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#009666",
                borderRadius: 4,
                alignItems: "center",
                marginTop: 30,
                marginHorizontal:5,
                paddingVertical: 14,
                alignSelf:"stretch",
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
                Lihat Tugas Survei Lainnya
              </Text>
            </TouchableOpacity>
            
          </View>

        </View>
        
    )
}

export default  DataBerhasilSubmit