import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { SERVICES_REQUEST, SERVICE_DETAIL_REQUEST } from '../actions/actionTypes';
import { servicesSuccess, servicesFailure, serviceDetailsSuccess, serviceDetailsFailure } from '../actions/actionCreatorsServices/actionCreatorsServices';
import { of } from 'rxjs';


export const servicesEpic = action$ => action$.pipe(
    ofType(SERVICES_REQUEST),
    switchMap(o => ajax.getJSON(`https://common-study-backend.onrender.com/api/services`).pipe(
        map(o => servicesSuccess(o)),
        catchError(e => of(servicesFailure(e))),
    )),
);

export const serviceDetailsEpic = action$ => action$.pipe(
    ofType(SERVICE_DETAIL_REQUEST),
    map(o => o.payload.id),
    switchMap(id => ajax.getJSON(`https://common-study-backend.onrender.com/api/services/${id}`).pipe(
        map(o => serviceDetailsSuccess(o)),
        catchError(e => of(serviceDetailsFailure(e))),
    )),
);