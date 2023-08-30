import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

export const UserView = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(fetchUsers())
  },[])

  return (
    <div>
        <h2>List of users</h2>
        {user.loading && <div className="loadi">Loading ....</div> }
        {!user.loading && user.error ? <div className="error">Error : user.error</div> : null}
        {!user.loading && user.users.length ? (
            <ul>
              {user.users.map((user) =>(
                <li key={user.id}>user.name</li>
              ))}
            </ul>
        ): null}

    </div>
  )
}
