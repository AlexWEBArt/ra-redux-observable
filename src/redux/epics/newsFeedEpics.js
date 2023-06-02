import { ofType } from "redux-observable";
import { NEWS_REQUEST, PREVIOUS_NEWS_REQUEST } from "../actions/actionTypes";
import { catchError, map, of, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { newsFailure, newsSuccess, previousNewsFailure, previousNewsSuccess } from "../actions/actionCreatorsNewsFeed/actionCreatorsNewsFeed";
import arrayConverter from "../../utils/arrayConverter";

export const newsEpic = action$ => action$.pipe(
    ofType(NEWS_REQUEST),
    switchMap(o => ajax.getJSON('https://ra-redux-observable-news-feed-backend.onrender.com/api/news').pipe(
        map(o => newsSuccess(arrayConverter(o))),
        catchError(o => of(newsFailure(o)))
    ))
);

export const previousNewsEpic = action$ => action$.pipe(
    ofType(PREVIOUS_NEWS_REQUEST),
    map(o => o.payload.lastSeenId),
    switchMap(id => ajax.getJSON(`https://ra-redux-observable-news-feed-backend.onrender.com/api/news?lastSeenId=${id}`).pipe(
        map(o => previousNewsSuccess(arrayConverter(o))),
        catchError(o => of(previousNewsFailure(o)))
    ))
)