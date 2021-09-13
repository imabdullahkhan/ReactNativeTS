import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
import styles from "./BestStories.style"
import { getBestStoriesData, getIds } from "../../redux/action/index"
import Wrapper from '../../components/SharedComponents/Wrapper'
import { StoriesType } from '../../constants/enum'
import StoriesListView from '../shared/StoriesListView'
import { primaryColor } from '../../theme/styles'
import { normalizeWidth } from '../../utils/fontUtil'

const limit = 50;
const BestStoriesScreen = ({ getBestStoriesData, bestStoriesData, getIds, bestStoriesId, bestStoriesLoading }: { getBestStoriesData: (page: number, limit: number) => Promise<boolean>, bestStoriesData: Array<{ url: string, title: string, score: number, by: string, time: number }>, getIds: (type: any) => Promise<Boolean>, bestStoriesId: Array<number>, bestStoriesLoading: boolean }) => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        getIds(StoriesType.Best).then((response) => {
            let alreadyExistCount = bestStoriesData.length;
            if (alreadyExistCount > limit) {
                setPage(alreadyExistCount / limit);
            }
            setLoading(false);
        })

    }, [])
    useEffect(() => {
        if (page === 1) {
            getBestStories(1, limit);
        }
    }, [bestStoriesId.length])
    const getBestStories = async (page: number = 1, limit: number = 50) => {
        if (!bestStoriesLoading && bestStoriesId.length > bestStoriesData.length) {
            setPage(page);
            getBestStoriesData(page, limit)
            setTimeout(() => {
                setLoading(false)
            }, 5000)
        }

    }

    return (
        <Wrapper paddingTop={5} loadMoreData={() => getBestStories(page + 1)}>
            <Text style={styles.titleTextStyle}>Best Stories Screen</Text>
            {
                bestStoriesData.map((eachData: any) => {
                    return (
                        <StoriesListView key={eachData?.id} url={eachData?.url} title={eachData?.title} score={eachData?.score} by={eachData?.by} time={eachData?.time}></StoriesListView>
                    )
                })

            }
            {
                loading || bestStoriesLoading ? <ActivityIndicator size={'large'} color={primaryColor} style={{ padding: normalizeWidth(20) }} /> : <></>
            }
        </Wrapper>
    )
}
const mapStateToProps = (state: any) => {
    return {
        bestStoriesData: state.serviceReducer.bestStoriesData,
        bestStoriesId: state.serviceReducer.bestStoriesId,
        bestStoriesLoading: state.serviceReducer.bestStoriesLoading,
    }
}
const mapDispatchToProps = {
    getBestStoriesData,
    getIds
}
export default connect(mapStateToProps, mapDispatchToProps)(BestStoriesScreen as any)

