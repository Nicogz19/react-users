import { useReducer } from 'react'
import Reducer from './UseReducer'
import UserContext from './UserContext'
import axios from 'axios'
import { GET_USERS, GET_PROFILE } from '../types';

const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(Reducer, initialState)

    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users')
        dispatch({type: GET_USERS, payload: res.data.data})
    }

    const getProfile = async (id) => {
        const res = await axios.get('https://reqres.in/api/users/' + id)
        dispatch({type: GET_PROFILE, payload: res.data.data})
    }

    return(
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState