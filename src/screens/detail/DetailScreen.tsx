import React, { Component, useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, Linking } from "react-native";
import { connect } from "react-redux";
import Wrapper from "../../components/SharedComponents/Wrapper";
import { fontFamily, fontH2, fontH3, greyedSchemeColor } from "../../theme/styles";
import { normalizeWidth } from "../../utils/fontUtil";
const DetailScreen = ({ data }: { data: Array<any> }) => {
  console.log(Object.keys(data)[0]);
  console.log(Object.values(data)[0]);
  const [page, setPage] = useState(1)
  const getAllDetails = (page = 1) => {
    // if (data.length < totalCount || page === 1) {
    console.log("GETTING Detail DATA****************************************************")
    // setPage(page);
    // getDriver(page);
    // }
  }
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
      <Wrapper paddingTop={0} loadMoreData={() => getAllDetails(page + 1)}>
        {/* {

          !data.length ?
            <Text>Not Found</Text> : <View style={{ flex: 1, backgroundColor: 'white', padding: normalizeWidth(10) }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={Object.values(data)}
                renderItem={renderItem}
              // renderItem={(by:string, id:number, score:number, time:number, title:string, type:string, url:string, kids:Array<number>) =>renderItem(by, id, score, time, title, type, url, kids)}
              />
            </View>
        } */}
      </Wrapper>
    </>
  )
}


const mapStateToProps = (state: any) => {
  return {
    data: state.detail.data
  }
}

export default DetailScreen
