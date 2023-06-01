import { SEARCH_SKILLS_FAILURE, SEARCH_SKILLS_REQUEST, SEARCH_SKILLS_SUCCESS, CHANGE_SEARCH_FIELD } from "./actionTypes";
import { SERVICES_REQUEST, SERVICES_FAILURE, SERVICES_SUCCESS, SERVICE_DETAIL_REQUEST, SERVICE_DETAIL_FAILURE, SERVICE_DETAIL_SUCCESS } from "./actionTypes";

// skills action creators

export const searchSkillsRequest = search => ({
    type: SEARCH_SKILLS_REQUEST, payload: {search}
});

export const searchSkillsFailure = error => ({
    type: SEARCH_SKILLS_FAILURE, payload: {error}
});

export const searchSkillsSuccess = items => ({
    type: SEARCH_SKILLS_SUCCESS, payload: {items}
});

export const changeSearchField = search => ({
    type: CHANGE_SEARCH_FIELD, payload: {search}
});

// main-details creators

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