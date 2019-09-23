import React, {useState} from "react";
import {
  Text,
  View,
  Image,
  StyleSheet, ScrollView,
  TouchableOpacity,
} from "react-native";

import iconGudang from "../../../res/images/ic_gudang.png";
import iconBorrowAset from "../../../res/images/ic-borrower.png";
import iconBorrowProfile from "../../../res/images/ic-borrowerprofile.png";
import iconLahan from "../../../res/images/ic-lahan.png";
import iconMarket from "../../../res/images/ic-market.png";
import iconPetani from "../../../res/images/ic-petani.png";
import iconSupply from "../../../res/images/ic-supply.png";

import TopBar from "../../components/TopBar";
import NotifKonfirmasiSubmitSurvey from "../../components/NotifKonfirmasiSubmitSurvey";

const DataSurveiPeminjam = () => {
    return(
        <View style={{height:'100%', position:"relative"}}>
            <TopBar></TopBar>
            <ScrollView style={{backgroundColor:'#E5E5E5', paddingTop:25, paddingBottom:40, paddingHorizontal:23, height:'100%',}}>
                <TouchableOpacity style={{flexDirection:"row",}}>
                    <Image style={{width:48,height:42}} source={iconBorrowProfile}></Image>
                    <View style={{marginLeft:20, width:'100%'}}>
                        <Text style={{fontSize:15, fontWeight:"600", lineHeight:22, color:'#333333'}}>Profil Peminjam</Text>
                        <Text style={{fontSize:15, fontWeight:"normal", lineHeight:22, color:'rgba(51, 51, 51, 0.7)'}}>70% data sudah diisi</Text>
                        <View style={{height:1, backgroundColor:'rgba(51, 51, 51, 0.1)', marginTop:20}}></View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image style={{width:48,height:42}} source={iconBorrowAset}></Image>
                    <View style={{marginLeft:20, width:'100%'}}>
                        <Text style={{fontSize:15, fontWeight:"600", lineHeight:22, color:'#333333'}}>Aset Peminjam</Text>
                        <Text style={{fontSize:15, fontWeight:"normal", lineHeight:22, color:'rgba(51, 51, 51, 0.7)'}}>0% data sudah diisi</Text>
                        <View style={{height:1, backgroundColor:'rgba(51, 51, 51, 0.1)', marginTop:20}}></View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image style={{width:48,height:42}} source={iconGudang}></Image>
                    <View style={{marginLeft:20, width:'100%'}}>
                        <Text style={{fontSize:15, fontWeight:"600", lineHeight:22, color:'#333333'}}>Usaha Tani</Text>
                        <Text style={{fontSize:15, fontWeight:"normal", lineHeight:22, color:'rgba(51, 51, 51, 0.7)'}}>0% data sudah diisi</Text>
                        <View style={{height:1, backgroundColor:'rgba(51, 51, 51, 0.1)', marginTop:20}}></View>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image style={{width:48,height:42}} source={iconPetani}></Image>
                    <View style={{marginLeft:20, width:'100%'}}>
                        <Text style={{fontSize:15, fontWeight:"600", lineHeight:22, color:'#333333'}}>Informasi Petani</Text>
                        <Text style={{fontSize:15, fontWeight:"normal", lineHeight:22, color:'rgba(51, 51, 51, 0.7)'}}>0% data sudah diisi</Text>
                        <View style={{height:1, backgroundColor:'rgba(51, 51, 51, 0.1)', marginTop:20}}></View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image style={{width:48,height:42}} source={iconLahan}></Image>
                    <View style={{marginLeft:20, width:'100%'}}>
                        <Text style={{fontSize:15, fontWeight:"600", lineHeight:22, color:'#333333'}}>Informasi Lahan</Text>
                        <Text style={{fontSize:15, fontWeight:"normal", lineHeight:22, color:'rgba(51, 51, 51, 0.7)'}}>0% data sudah diisi</Text>
                        <View style={{height:1, backgroundColor:'rgba(51, 51, 51, 0.1)', marginTop:20}}></View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image style={{width:48,height:42}} source={iconSupply}></Image>
                    <View style={{marginLeft:20, width:'100%'}}>
                        <Text style={{fontSize:15, fontWeight:"600", lineHeight:22, color:'#333333'}}>Informasi Penyuplai Saprotan</Text>
                        <Text style={{fontSize:15, fontWeight:"normal", lineHeight:22, color:'rgba(51, 51, 51, 0.7)'}}>0% data sudah diisi</Text>
                        <View style={{height:1, backgroundColor:'rgba(51, 51, 51, 0.1)', marginTop:20}}></View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:"row", }}>
                    <Image style={{width:48,height:42}} source={iconMarket}></Image>
                    <View style={{marginLeft:20, width:'100%'}}>
                        <Text style={{fontSize:15, fontWeight:"600", lineHeight:22, color:'#333333'}}>Informasi Pasar</Text>
                        <Text style={{fontSize:15, fontWeight:"normal", lineHeight:22, color:'rgba(51, 51, 51, 0.7)'}}>0% data sudah diisi</Text>
                        <View style={{height:1, backgroundColor:'rgba(51, 51, 51, 0.1)', marginTop:20}}></View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <View style={{backgroundColor:'#FFF', paddingHorizontal:20, paddingVertical:10, bottom:0}}>
                <TouchableOpacity disabled={true} style={{backgroundColor:'#9D9D9D', borderRadius:4, paddingVertical:14,}}>
                    <Text style={{color:'#FFF', fontSize:15, fontWeight:"600", textAlign:"center"}}>Kirim Data</Text>
                </TouchableOpacity>
            </View>
            <NotifKonfirmasiSubmitSurvey></NotifKonfirmasiSubmitSurvey>
        </View>
    )
}

const styles = StyleSheet.create({
    toolBar:{
        height:60,
        backgroundColor:'#29B673',
        paddingVertical:15,
        paddingHorizontal:20,
    },
})

export default DataSurveiPeminjam
