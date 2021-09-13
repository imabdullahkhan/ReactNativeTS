import React, { Component, useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, Linking } from "react-native";
import { fontFamily, fontH2, fontH3, greyedSchemeColor } from "../../theme/styles";
import { normalizeWidth } from "../../utils/fontUtil";
const StoriesListView = ({ url, title, score, by,time }: { url: string, title: string, score: number, by: string,time : number }) => {
    const loadInBrowser = (url: string) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };
    return (
        <TouchableOpacity onPress={() => loadInBrowser(url)}>
            <View style={{ padding: normalizeWidth(5), borderColor: 'white', elevation: 1, marginBottom: normalizeWidth(10) }}>
                <Text style={{ fontSize: fontH2, fontFamily: fontFamily.Primary.Bold }}>{title}</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{`${score} Points`}</Text>
                    <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{`by ${by}`}</Text>
                    <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{new Date(time).toString()}</Text>
                    {/* <Text style={{ color: greyedSchemeColor, fontSize: fontH3, textDecorationLine: 'underline' }}>{`${item?.kids?.length} Share`}</Text> */}
                </View>
            </View>
        </TouchableOpacity>

    )
}
export default StoriesListView;