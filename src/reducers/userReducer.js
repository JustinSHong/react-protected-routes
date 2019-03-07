import {
    CREATE_USER,
    CREATING_USER,
    CREATE_USER_ERROR,
    LOG_IN_USER,
    LOGGING_IN_USER,
    LOG_IN_USER_ERROR,
    LOG_OUT_USER,
    LOGGING_OUT_USER,
    LOG_OUT_USER_ERROR
} from "../actions/constants";

const initialState = {
    username: "",
    pwd: "",
    type: "",
    authenticated: false,
    status: "",
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return Object.assign({}, state, {
                username: action.payload.username,
                pwd: action.payload.password,
                type: action.payload.type,
                status: action.type
            });
        case CREATING_USER:
            return Object.assign({}, state, { status: action.type });
        case CREATE_USER_ERROR:
            return Object.assign({}, state, {
                status: action.type,
                error: action.payload
            });
        case LOG_IN_USER:
            return Object.assign({}, state, {
                username: action.payload.username,
                pwd: action.payload.password,
                type: "",
                authenticated: true,
                status: action.type
            });
        case LOGGING_IN_USER:
            return Object.assign({}, state, {
                status: action.type
            });
        case LOG_IN_USER_ERROR:
            return Object.assign({}, state, {
                status: action.type,
                error: action.payload
            });
        case LOG_OUT_USER:
            return Object.assign({}, state, {
                username: action.payload.username,
                pwd: action.payload.password,
                type: action.payload.type,
                status: action.type,
                authenticated: false
            });
        case LOGGING_OUT_USER:
            return Object.assign({}, state, {
                status: action.type
            });
        case LOG_OUT_USER_ERROR:
            return Object.assign({}, state, {
                status: action.type,
                error: action.payload
            });
        default:
            return state;
    }
};

export default userReducer;
