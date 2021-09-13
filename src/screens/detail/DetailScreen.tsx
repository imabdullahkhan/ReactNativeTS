import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, Linking } from "react-native";
import { fontFamily, fontH2, fontH3, greyedSchemeColor } from "../../theme/styles";
import { normalizeWidth } from "../../utils/fontUtil";
// import * as NavigationService from "react-navigation-helpers";
/**
 * ? Local Imports
 */
// import colors from "@colors";
import styles from "./DetailScreen.style";
// import Text from "@shared-components/text-wrapper/TextWrapper";

// export default class DetailScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text h1>Detail Screen</Text>
//         <TouchableOpacity
//           style={styles.buttonStyle}
//           onPress={() => NavigationService.goBack()}
//         >
//           <Text color={colors.light.white}>Go back to Home</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
const DetailScreen = ({ by, id, score, time, title, type, url, kids }: { by: string, id: number, score: number, time: number, title: string, type: string, url: string, kids: Array<number> }) => {
  // let data = [
  //   {
  //     "id": 0,
  //     "heading": "Fortran Web Framework",
  //     "points": 20,
  //     "by": "freddier",
  //     "date": "1 hour ago",
  //     "comments": 28
  //   },
  //   {
  //     "id": 1,
  //     "heading": "Fortran Web Framework",
  //     "points": 20,
  //     "by": "freddier",
  //     "date": "1 hour ago",
  //     "comments": 28
  //   },
  //   {
  //     "id": 2,
  //     "heading": "Fortran Web Framework",
  //     "points": 20,
  //     "by": "freddier",
  //     "date": "1 hour ago",
  //     "comments": 28
  //   }
  // ]
  // const renderItem = ({ item }: { item: any }) => {
  //   return (
  //     <View style={{ padding: normalizeWidth(5), borderColor: 'white', elevation: 1, marginBottom: normalizeWidth(10) }}>
  //       <Text style={{ fontSize: fontH2, fontFamily: fontFamily.Primary.Bold }}>{item?.heading}</Text>
  //       <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
  //         <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{`${item?.points} Points`}</Text>
  //         <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{`by ${item?.by}`}</Text>
  //         <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{item?.date}</Text>
  //         <Text style={{ color: greyedSchemeColor, fontSize: fontH3, textDecorationLine: 'underline' }}>{`${item?.comments} Share`}</Text>
  //       </View>
  //     </View>
  //   )
  // }
  const loadInBrowser = (url:string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white', padding: normalizeWidth(10) }}>
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
        /> */}
        <TouchableOpacity onPress={() => loadInBrowser(url)}>
          <View style={{ padding: normalizeWidth(5), borderColor: 'white', elevation: 1, marginBottom: normalizeWidth(10) }}>
            <Text style={{ fontSize: fontH2, fontFamily: fontFamily.Primary.Bold }}>{title}</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
              <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{`${score} Points`}</Text>
              <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{`by ${by}`}</Text>
              <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{new Date(time).toString()}</Text>
              <Text style={{ color: greyedSchemeColor, fontSize: fontH3, textDecorationLine: 'underline' }}>{`${kids?.length} Share`}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}
export default DetailScreen
