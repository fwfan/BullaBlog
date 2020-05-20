import {SET_USER_MOOD_VALUE, GET_USER_MOOD_VALUE} from '../actionTypes.js';


const initializeState = {
    textareaValue : [{'mood':'', 'time':'1'}]
}

export default function userMoodReducer(state = initializeState, action) {
    switch (action.type) {
        case SET_USER_MOOD_VALUE : 
            return { state, ...{ textareaValue : action.value }}
        case GET_USER_MOOD_VALUE:
            return { state, ...{ textareaValue : action.value }}
        default :
            return state;
    }
}
