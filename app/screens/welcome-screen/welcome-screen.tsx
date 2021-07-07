import React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, FlatList, ScrollView, TouchableHighlight } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import { isEmpty } from "validate.js"
const sun = require("./sun.png")
const clouds = require('./clouds.png')
const listIcon = require('./list-clouds.png')
const items = [
  { id: '1', img: listIcon, date: 'Tommorow', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' },
  { id: '2', img: listIcon, date: 'Tommorow', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' },
  { id: '3', img: listIcon, date: 'Tommorow', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' },
  { id: '4', img: listIcon, date: 'Tommorow', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' },
  { id: '5', img: listIcon, date: 'Tommorow', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' },
  { id: '6', img: listIcon, date: 'Tommorow', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' },
  { id: '7', img: listIcon, date: 'Tommorow', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' },
  { id: '8', img: listIcon, date: 'Tommorow', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' },
  { id: '9', img: listIcon, date: 'Tommorow', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' },
  { id: '10', img: listIcon, date: 'Tommorow', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' },
  { id: '11', img: listIcon, date: 'Yesterday', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' },
  { id: '12', img: listIcon, date: 'Yesterday', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' },
  { id: '13', img: listIcon, date: 'Yesterday', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' },
  { id: '14', img: listIcon, date: 'Yesterday', weather: 'rain', highTemp: '31\u00b0', lowTemp: '24\u00b0' }



]
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: ViewStyle = {

  height: 30,
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
  fontSize: 25,
  fontFamily: "",
  marginLeft: 8,
  letterSpacing: 1.5,
}
const SECTION_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 25,
  marginLeft: 8,
  letterSpacing: 1.5,

}
const HEADER_SECTION: ViewStyle = {

  flexDirection: 'row',
  height: 250,
  backgroundColor: '#034f84',
  paddingVertical: 30,
  paddingHorizontal: 4,
  justifyContent: 'space-around'


}

const SUN: ImageStyle = {


  maxWidth: "100%",
}

const CLOUDS: ImageStyle = {


  maxWidth: "100%",
  marginTop: 32

}
const COUNTRY: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 25,
}
const DATE: TextStyle = {
  ...TEXT,
  fontSize: 15,
}
const HIGH: TextStyle = {
  ...BOLD,
  ...TEXT,
  fontSize: 65,
}
const UPPERTEXT: TextStyle = {

  color: 'grey',
  fontSize: 28,



}
const LOWERTEXT: TextStyle = {

  color: 'grey',
  fontSize: 20


}
const FLATCONTAINER: ViewStyle = {

  backgroundColor: 'white',
  // flex: 1,
  flexDirection: 'row',
  justifyContent: "space-evenly"

}
const separatorLine: ViewStyle = {
  height: 1,
  backgroundColor: 'plum',
  paddingTop: 2,
}
export const WelcomeScreen = observer(function WelcomeScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("demo")
  const SeparatorComponent = () => {
    return <View style={separatorLine} />
  }


  const _renderList = ({ item, index }) => {
    return (
      <TouchableHighlight style  = {{backgroundColor: '#034f84'}} onPress={() => navigation.navigate("demo")}>
        <View style={FLATCONTAINER}>

          <Image style={{ alignSelf: "center" }} source={item.img}></Image>
          <View>
            <Text style={UPPERTEXT}>
              {item.date}

            </Text>
            <Text style={LOWERTEXT}>
              {item.weather}

            </Text>
          </View>
          <View>
            <Text style={UPPERTEXT}>
              {item.highTemp}

            </Text>
            <Text style={LOWERTEXT}>
              {item.lowTemp}

            </Text>
          </View>


        </View>

      </TouchableHighlight>

    )
  }
  return (



    <View style={ROOT}>
      <View style={HEADER}>
        <Image source={sun} style={SUN} />
        <View>

          <Text style={HEADER_TITLE}>Sunshine</Text>
        </View>
      </View>

      <View style={FLATLISTCONTAINER}>


        <FlatList

          data={items}
          renderItem={_renderList}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={SeparatorComponent}
          contentContainerStyle={{ height: 'auto', }}
          ListHeaderComponent={() =>


            <View style={HEADER_SECTION}>

              <View>

                <Text style={COUNTRY}>Country</Text>
                <Text style={DATE}>Today,Jul 06</Text>
                <Text style={HIGH}>31{'\u00b0'} </Text>
                <Text style={HEADER_TITLE}>24{'\u00b0'}</Text>



              </View>
              <View>
                <Image source={clouds} style={CLOUDS} />
                <Text style={HEADER_TITLE}>clouds</Text>
              </View>

            </View>
          }
        />
      </View>


    </View>

  )
})

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: 'grey'
}

const FLATLISTCONTAINER: ViewStyle = {
  flex: 1,

}