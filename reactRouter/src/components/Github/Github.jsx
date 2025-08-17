import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/sujal1286')
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
  },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl flex'>
    <div className='w-1/3 flex-shrink-0'>
      <img src={data.avatar_url} alt="git Picture" width={300} />
      </div>
      <div className='w-2/3 flex-shrink-0'>
        <h1 className='text-4xl font-bold text-black'>Github Followers :{data.followers}</h1>
        <h1 className='text-4xl font-bold'>{data.name}</h1>
        <p className='text-lg'>Location: {data.location}</p>
        <p className='text-lg'>Public Repos: {data.public_repos}</p>
      </div>
    </div>
  )
}

export default Github
