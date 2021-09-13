import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { getTopStoriesData, getIds } from "../../redux/action/index"

import styles from "./TopStories.style"
import Wrapper from '../../components/SharedComponents/Wrapper'
import { StoriesType } from '../../constants/enum'
import StoriesListView from '../shared/StoriesListView'
import { primaryColor } from '../../theme/styles'
import { normalizeWidth } from '../../utils/fontUtil'

const limit = 50;
const TopStoriesScreen: React.FC<any> = ({ topStoriesLoading, getTopStoriesData, topStoriesData, getIds, topStoriesId }: { getTopStoriesData: (page: number, limit: number) => Promise<boolean>, topStoriesData: Array<{ url: string, title: string, score: number, by: string, time: number }>, getIds: (type: any) => Promise<Boolean>, topStoriesId: Array<number>, topStoriesLoading: boolean }) => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getIds(StoriesType.Top).then((response) => {
            let alreadyExistCount = topStoriesData.length;
            if (alreadyExistCount > limit) {
                setPage(alreadyExistCount / limit);
            }
            setLoading(false);
        })

    }, [])
    useEffect(() => {
        if (page === 1) {
            getTopStories(1, limit);
        }
    }, [topStoriesId.length])
    const getTopStories = async (page: number = 1, limit: number = 50) => {
        if (!topStoriesLoading && topStoriesId.length > topStoriesData.length) {
            setPage(page);
            getTopStoriesData(page, limit)
            setLoading(false)
        }

    }

    return (
        <Wrapper paddingTop={5} loadMoreData={() => getTopStories(page + 1)}>
            <Text style={styles.titleTextStyle}>Top Stories Screen</Text>
            {
                topStoriesData.map((eachData: any) => {
                    return (
                        <StoriesListView url={eachData?.url} title={eachData?.title} score={eachData?.score} by={eachData?.by} time={eachData?.time}></StoriesListView>
                    )
                })

            }
            {
                topStoriesLoading || loading ? <ActivityIndicator size={'large'} color={primaryColor} style={{ padding: normalizeWidth(20) }} /> : <></>
            }
        </Wrapper>
    )
}
const mapStateToProps = (state: any) => {
    return {
        topStoriesData: state.serviceReducer.topStoriesData,
        topStoriesId: state.serviceReducer.topStoriesId,
        topStoriesLoading: state.serviceReducer.topStoriesLoading,
    }
}
const mapDispatchToProps = {
    getTopStoriesData,
    getIds
}
export default connect(mapStateToProps, mapDispatchToProps)(TopStoriesScreen as any)

