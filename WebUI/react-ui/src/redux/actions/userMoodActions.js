import { GET_USER_MOOD_VALUE, SET_USER_MOOD_VALUE }from '../actionTypes';

export function getUserMood (){
    return (dispatch)=> {
        const url = '/Index/Index/userMood';
        fetch(url).then(res => res.json()).then(
            (data) => {
                dispatch({
                    type: GET_USER_MOOD_VALUE,
                    value: data['result']
                });
            }
        )
    }
}

export function setUserMood (value, time){
    return {
        type: SET_USER_MOOD_VALUE,
        value : [{"mood":value, "submitTime":time}]
    }
}