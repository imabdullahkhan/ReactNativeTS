import React, { useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    NativeScrollEvent,
    ViewStyle
} from 'react-native';
import { screenMainContainer } from "../../theme/styles"
import { normalizeHeight, normalizeWidth } from "../../utils/fontUtil";
import { useScrollToTop } from '@react-navigation/native';
interface WrapperInterface {
    marginBottom?: number,
    marginTop?: number,
    paddingTop?: number,
    padding?: number,
    marginHorizontal?: number,
    showVerticalScrollBar?: boolean,
    loadMoreData?: () => void,
    scrollRef?: any,
    children: React.ReactNode
}
const Wrapper = ({ marginBottom = normalizeHeight(0), marginTop = normalizeHeight(0), paddingTop = normalizeHeight(20), padding = normalizeWidth(15), marginHorizontal = normalizeHeight(0), loadMoreData, showVerticalScrollBar = true, scrollRef, ...props }: WrapperInterface) => {
    // const scrollRef = useRef(null)
    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }: NativeScrollEvent) => {
        let paddingToBottom = 20
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom
    }
    return (
        <ScrollView
            ref={scrollRef}
            showsVerticalScrollIndicator={showVerticalScrollBar}
            scrollEventThrottle={16}
            onMomentumScrollEnd={({ nativeEvent }) => {
                if (loadMoreData) {
                    if (isCloseToBottom(nativeEvent)) {
                        loadMoreData()
                    }
                }
            }}
        >
            <View style={{ marginBottom: marginBottom, marginTop: marginTop, ...screenMainContainer, paddingTop, padding: padding, marginHorizontal: marginHorizontal }}>
                {props.children}
            </View>

        </ScrollView>
    )
}
export default Wrapper;