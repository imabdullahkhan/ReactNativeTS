import { FETCH_BEST_STORIES_IDS, FETCH_JOB_STORIES_IDS, FETCH_NEW_STORIES_IDS, FETCH_TOP_STORIES_IDS } from "../redux/action";

export const StoriesType = {
    "Top": { name: 'Top', url: `/topstories.json`, actionType: FETCH_TOP_STORIES_IDS },
    "New": { name: 'New', url: `/newstories.json`, actionType: FETCH_NEW_STORIES_IDS },
    "Job": { name: 'Job', url: `/jobstories.json`, actionType: FETCH_JOB_STORIES_IDS },
    "Best": { name: 'Best', url: `/beststories.json`, actionType: FETCH_BEST_STORIES_IDS },
}