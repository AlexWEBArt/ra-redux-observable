import { NEWS_FAILURE, NEWS_REQUEST, NEWS_SUCCESS, PREVIOUS_NEWS_REQUEST, PREVIOUS_NEWS_FAILURE, PREVIOUS_NEWS_SUCCESS } from "../actions/actionTypes";

const initialState = {
    newsItem: [],
    loading: false,
    error: null,
};

export default function newsFeedReducer(state = initialState, action) {
    switch(action.type) {
        case NEWS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            }
        case NEWS_SUCCESS:
            return {
                ...state,
                newsItem: action.payload.news,
                loading: false,
            }
        case PREVIOUS_NEWS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PREVIOUS_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            }
        case PREVIOUS_NEWS_SUCCESS:
            action.payload.prevNews.forEach(item => state.newsItem.push(item))
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}