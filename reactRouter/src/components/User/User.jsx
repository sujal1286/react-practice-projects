import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
  return (
    <div className='bg-gray-600 text-amber-100 p-4 rounded-lg'>
      User:{userid}
      <p>This is the user page</p>
    </div>
  )
}

export default User
