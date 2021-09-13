import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { getNewStoriesData, getIds } from "../../redux/action/index"

import styles from "./NewStories.style"
import Wrapper from '../../components/SharedComponents/Wrapper'
import { StoriesType } from '../../constants/enum'
import StoriesListView from '../shared/StoriesListView'
import { primaryColor } from '../../theme/styles'
import { normalizeWidth } from '../../utils/fontUtil'
 
const limit = 50;
const NewScreen: React.FC<any> = ({ getNewStoriesData, newStoriesData, getIds, newStoriesId }: { getNewStoriesData: (page: number, limit: number) => Promise<boolean>, newStoriesData: Array<{ url: string, title: string, score: number, by: string, time: number }>, getIds: (type: any) => Promise<Boolean>, newStoriesId: Array<number> }) => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getIds(StoriesType.New).then((response) => {
            let alreadyExistCount = newStoriesData.length;
            console.log(alreadyExistCount , "alreadyExistCount")
            if (alreadyExistCount > limit) {
                console.log("SETTING PAGE")
                setPage(alreadyExistCount / limit);
            }
        })

    }, [])
    useEffect(() => {
        if (page === 1) {
            getNewStories(1, limit);
        }
    }, [newStoriesId.length])
    const getNewStories = async (page: number = 1, limit: number = 50) => {
        if (!loading && newStoriesId.length > newStoriesData.length) {
            setPage(page);
            setLoading(true)
            getNewStoriesData(page, limit)
            setTimeout(() => {
                setLoading(false)
            }, 5000)
        }

    }

    return (
        <Wrapper paddingTop={0} loadMoreData={() => getNewStories(page + 1)}>
            <Text style={styles.titleTextStyle}>New Stories Screen</Text>
            {
                newStoriesData.map((eachData: any) => {
                    return (
                        <StoriesListView  url={eachData.url} title={eachData.title} score={eachData.score} by={eachData.by} time={eachData.time}></StoriesListView>
                    )
                })

            }
            {
                loading ? <ActivityIndicator size={'large'} color={primaryColor} style={{ padding: normalizeWidth(20) }} /> : <></>
            }
        </Wrapper>
    )
}
const mapStateToProps = (state: any) => {
    return {
        newStoriesData: state.serviceReducer.newStoriesData,
        newStoriesId: state.serviceReducer.newStoriesId,
    }
}
const mapDispatchToProps = {
    getNewStoriesData,
    getIds
}
export default connect(mapStateToProps, mapDispatchToProps)(NewScreen as any)

