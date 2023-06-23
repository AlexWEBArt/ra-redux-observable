import { ofType } from "redux-observable";
import { NEWS_REQUEST, PREVIOUS_NEWS_REQUEST } from "../actions/actionTypes";
import { map, switchMap, timer, delayWhen, retryWhen } from "rxjs";
import { ajax } from "rxjs/ajax";
import {  newsSuccess, previousNewsSuccess } from "../actions/actionCreatorsNewsFeed/actionCreatorsNewsFeed";
import arrayConverter from "../../utils/arrayConverter";

export const newsEpic = action$ => action$.pipe(
    ofType(NEWS_REQUEST),
    switchMap(() => ajax.getJSON('https://common-study-backend.onrender.com/api/news').pipe(
        retryWhen(errors =>
            errors.pipe(
                delayWhen(() => timer(3000))
            )
        ),
        map(o => newsSuccess(arrayConverter(o))),
    ))
);

export const previousNewsEpic = action$ => action$.pipe(
    ofType(PREVIOUS_NEWS_REQUEST),
    map(o => o.payload.lastSeenId),
    switchMap(id => ajax.getJSON(`https://common-study-backend.onrender.com/api/news?lastSeenId=${id}`).pipe(
        retryWhen(errors =>
            errors.pipe(
                delayWhen(() => timer(3000))
            )
        ),
        map(o => previousNewsSuccess(arrayConverter(o))),
    ))
)