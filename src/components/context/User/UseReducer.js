import { GET_USERS, GET_PROFILE } from '../types';

export default function (state, action) {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload }
        case GET_PROFILE:
            return { ...state, selectedUser: action.payload }
        default:
            return state;
    }
}