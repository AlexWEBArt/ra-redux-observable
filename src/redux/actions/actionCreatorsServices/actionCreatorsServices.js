import { SERVICES_REQUEST, SERVICES_FAILURE, SERVICES_SUCCESS, SERVICE_DETAIL_REQUEST, SERVICE_DETAIL_FAILURE, SERVICE_DETAIL_SUCCESS } from "../actionTypes";

export const servicesRequest = () => ({
    type: SERVICES_REQUEST,
});

export const servicesFailure = error => ({
    type: SERVICES_FAILURE, payload: {error}
});

export const servicesSuccess = items => ({
    type: SERVICES_SUCCESS, payload: {items}
});

export const serviceDetailsRequest = id => ({
    type: SERVICE_DETAIL_REQUEST, payload: {id}
});

export const serviceDetailsFailure = error => ({
    type: SERVICE_DETAIL_FAILURE, payload: {error}
});

export const serviceDetailsSuccess = items => ({
    type: SERVICE_DETAIL_SUCCESS, payload: {items}
});