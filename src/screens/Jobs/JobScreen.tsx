import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { getJobStoriesData, getIds } from "../../redux/action/index"

import styles from "./Jobs.style"
import Wrapper from '../../components/SharedComponents/Wrapper'
import { StoriesType } from '../../constants/enum'
import StoriesListView from '../shared/StoriesListView'
import { primaryColor } from '../../theme/styles'
import { normalizeWidth } from '../../utils/fontUtil'

const limit = 50;
const JobScreen: React.FC<any> = ({ getJobStoriesData, jobStoriesData, getIds, jobStoriesId, jobStoriesLoading }: { getJobStoriesData: (page: number, limit: number) => Promise<boolean>, jobStoriesData: Array<{ url: string, title: string, score: number, by: string, time: number }>, getIds: (type: any) => Promise<Boolean>, jobStoriesId: Array<number>, jobStoriesLoading: boolean }) => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        getIds(StoriesType.Job).then((response) => {
            let alreadyExistCount = jobStoriesData.length;
            if (alreadyExistCount > limit) {
                setPage(alreadyExistCount / limit);
            }
            setLoading(false);
        })

    }, [])
    useEffect(() => {
        if (page === 1) {
            getJobStories(1, limit);
        }
    }, [jobStoriesId.length])
    const getJobStories = async (page: number = 1, limit: number = 50) => {
        if (!jobStoriesLoading && jobStoriesId.length > jobStoriesData.length) {
            setPage(page);
            getJobStoriesData(page, limit)
            setLoading(false)
        }

    }

    return (
        <Wrapper paddingTop={5} loadMoreData={() => getJobStories(page + 1)}>
            <Text style={styles.titleTextStyle}>Job Stories Screen</Text>
            {
                jobStoriesData.map((eachData: any) => {
                    return (
                        <StoriesListView url={eachData?.url} title={eachData?.title} score={eachData?.score} by={eachData?.by} time={eachData?.time}></StoriesListView>
                    )
                })

            }
            {
                loading || jobStoriesLoading ? <ActivityIndicator size={'large'} color={primaryColor} style={{ padding: normalizeWidth(20) }} /> : <></>
            }
        </Wrapper>
    )
}
const mapStateToProps = (state: any) => {
    return {
        jobStoriesData: state.serviceReducer.jobStoriesData,
        jobStoriesId: state.serviceReducer.jobStoriesId,
        jobStoriesLoading: state.serviceReducer.jobStoriesLoading,
    }
}
const mapDispatchToProps = {
    getJobStoriesData,
    getIds
}
export default connect(mapStateToProps, mapDispatchToProps)(JobScreen as any)

