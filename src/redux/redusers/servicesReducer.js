import { SERVICES_REQUEST, SERVICES_FAILURE, SERVICES_SUCCESS, SERVICE_DETAIL_REQUEST, SERVICE_DETAIL_FAILURE, SERVICE_DETAIL_SUCCESS } from "../actions/actionTypes";

const initialState = {
    items: [],
    details: null,
    loading: false,
    error: null,
};

export default function servicesReduser(state = initialState, action) {
    switch (action.type) {
        case SERVICES_REQUEST:
            return {
                ...state,
                items: [],
                loading: true,
                error: null,
            };
        case SERVICES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            };
        case SERVICES_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                loading: false,
                error: null
            };
        case SERVICE_DETAIL_REQUEST:
            return {
                ...state,
                details: null,
                loading: true,
                error: null,
            };
        case SERVICE_DETAIL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            };
        case SERVICE_DETAIL_SUCCESS:
            return {
                ...state,
                details: action.payload,
                loading: false,
                error: null
            };
        default:
            return state;
    }
}