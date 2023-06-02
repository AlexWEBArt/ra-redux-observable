import { NEWS_FAILURE, NEWS_REQUEST, NEWS_SUCCESS, PREVIOUS_NEWS_FAILURE, PREVIOUS_NEWS_REQUEST, PREVIOUS_NEWS_SUCCESS } from "../actionTypes";

export const newsRequest = () => ({
    type: NEWS_REQUEST,
});

export const newsFailure = error => ({
    type: NEWS_FAILURE, payload: {error},
});

export const newsSuccess = news => ({
    type: NEWS_SUCCESS, payload: {news},
});

export const previousNewsRequest = lastSeenId => ({
    type: PREVIOUS_NEWS_REQUEST, payload: {lastSeenId},
});

export const previousNewsFailure = error => ({
    type: PREVIOUS_NEWS_FAILURE, payload: {error},
});

export const previousNewsSuccess = prevNews => ({
    type: PREVIOUS_NEWS_SUCCESS, payload: {prevNews},
});