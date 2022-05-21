import React, { useContext } from 'react'
import UserContext from './context/User/UserContext'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Profile = () => {

  const {selectedUser} = useContext(UserContext)

  return (
    <div>
      {selectedUser ? 
        <div className='card card-body text-center'>
          <img src={selectedUser.avatar} className='card-img-top rounded-circle m-auto img-fluid' style={{width: 180}} alt={selectedUser.first_name} />
          <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
          <h3>email: {selectedUser.email}</h3>
        </div>
      : 
        <div className='card card-body text-center'>
          <Skeleton circle width={180} height={180} />
          <div className='mt-3 mb-3'>
            <Skeleton width={150} />
          </div>
          <Skeleton width={280} />
        </div>
      }
    </div>
  )
}

export default Profile