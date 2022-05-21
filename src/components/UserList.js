import React, { useEffect, useContext } from 'react'
import UserContext from './context/User/UserContext'

const UserList = () => {

    const { getUsers, users, getProfile } = useContext(UserContext)

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className='list-group h-100'>
            {
                users.map(user => (
                    <a className='list-group-item list-group-item-action d-flex flex-row justify-content-start align-items-center' href='#' key={user.id} onClick={() => getProfile(user.id)}>
                        <img src={user.avatar} className="img-fluid rounded-circle" width='70' alt={user.first_name} style={{marginRight: 15}}/>
                        <p>
                            {`${user.first_name} ${user.last_name}`}
                        </p>
                    </a>
                ))
            }
        </div>
    )
}

export default UserList