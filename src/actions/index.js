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
} from "./constants";

export const createUser = (user = dispatch => {
    dispatch({ type: CREATING_USER });
    try {
        dispatch({ type: CREATE_USER, payload: user });
    } catch (error) {
        dispatch({ type: CREATE_USER_ERROR, payload: error });
    }
});

export const logInUser = (user = dispatch => {
    dispatch({ type: LOGGING_IN_USER });
    try {
        dispatch({ type: LOG_IN_USER, payload: user });
    } catch {
        dispatch({ type: LOG_IN_USER_ERROR, payload: error });
    }
});

export const logOutUser = (user = dispatch => {
    dispatch({ type: LOGGING_OUT_USER });
    try {
        dispatch({ type: LOG_OUT_USER, payload: user });
    } catch {
        dispatch({ type: LOG_OUT_USER_ERROR, payload: error });
    }
});
