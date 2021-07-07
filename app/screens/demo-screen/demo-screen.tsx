import React from "react"
import { Image, ImageStyle, Platform, TextStyle, View, ViewStyle,TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { BulletItem, Button, Header, Text, Screen, Wallpaper, Icon } from "../../components"
import { color, spacing, typography } from "../../theme"
import { Api } from "../../services/api"
import { save } from "../../utils/storage"

const backImg = require('./back.png')


export const DemoScreen = observer(function DemoScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  return (

    <View style={HEADER}>

        <TouchableOpacity style = {{width: 30}} onPress={() => navigation.goBack()}>
        <Image style ={{alignSelf:"center"}} source={backImg} />
          </TouchableOpacity>      
       
    
      <View>
        <Text style={HEADER_TITLE}>Details</Text>
      </View>
    </View>



  )


})
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: ViewStyle = {

  height: 25,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingVertical: 30,
  paddingHorizontal: 4,
  backgroundColor: '#034f84',

}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  fontFamily: "",

  alignSelf:'center',
  letterSpacing: 1.5
 
}