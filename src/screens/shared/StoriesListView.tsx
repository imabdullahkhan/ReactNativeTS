import React, { Component, useState } from "react";
import { Share, View, TouchableOpacity, ScrollView, Text, FlatList, Linking, } from "react-native";
import { fontFamily, fontH2, fontH3, greyedSchemeColor, primaryColor } from "../../theme/styles";
import { normalizeHeight, normalizeWidth } from "../../utils/fontUtil";

const StoriesListView = React.memo(({ url, title, score, by, time }: { url: string, title: string, score: number, by: string, time: number }) => {
    const loadInBrowser = (url: string) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };
    const handleShare = async () => {
        await Share.share({
            message: url
        });
    }
    return (
        <View>
            <TouchableOpacity onPress={() => loadInBrowser(url)}>
                <View style={{ padding: normalizeWidth(5), borderColor: 'white', elevation: 1, marginBottom: normalizeWidth(10) }}>
                    <Text style={{ fontSize: fontH2, fontFamily: fontFamily.Primary.Bold }}>{title}</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{`${score} Points`}</Text>
                        <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{`by ${by}`}</Text>
                        <Text style={{ color: greyedSchemeColor, fontSize: fontH3, marginRight: normalizeWidth(2) }}>{new Date(time).toString()}</Text>
                    </View>
                    <TouchableOpacity onPress={handleShare} style={{ padding: normalizeWidth(10), backgroundColor: primaryColor, borderRadius: normalizeWidth(10), width: normalizeWidth(80), marginTop: normalizeHeight(10), marginBottom: normalizeHeight(10) }}>
                        <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>Share</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

        </View>
    )
})
export default StoriesListView;