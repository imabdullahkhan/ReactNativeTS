import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, Linking } from "react-native";
import { fontFamily, fontH2, fontH3, greyedSchemeColor } from "../../theme/styles";
import { normalizeWidth } from "../../utils/fontUtil";
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
const DetailScreen = ({ data }: { data: Array<any> }) => {
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
  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity onPress={() => loadInBrowser(item?.url)}>
        <View style={{ padding: normalizeWidth(5), borderColor: 'white', elevation: 1, marginBottom: normalizeWidth(10) }}>
          <Text style={{ fontSize: fontH2, fontFamily: fontFamily.Primary.Bold }}>{item?.title}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
            <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{`${item?.score} Points`}</Text>
            <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{`by ${item?.by}`}</Text>
            <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{new Date(item?.time).toString()}</Text>
            <Text style={{ color: greyedSchemeColor, fontSize: fontH3, textDecorationLine: 'underline' }}>{`${item?.kids?.length} Share`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  const loadInBrowser = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white', padding: normalizeWidth(10) }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
        // renderItem={(by:string, id:number, score:number, time:number, title:string, type:string, url:string, kids:Array<number>) =>renderItem(by, id, score, time, title, type, url, kids)}
        />

      </View>
    </>
  )
}
export default DetailScreen
