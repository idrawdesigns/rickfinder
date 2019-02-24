import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Quote from './Quote'

export default function Details(route) {
  const [data, setData] = useState({ results: [] })
  const [loading, setloading] = useState(true)

  const getCharacter = async () => {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${route.id}`
    )

    setData(result.data)
    setloading(false)
  }

  useEffect(() => {
    getCharacter()
  }, [])

  return loading ? (
    <span>Loading...</span>
  ) : (
    <div className="details">
      <img src={data.image} alt={data.name} />
      <h1>{data.name}</h1>
      <div className="species">
        {data.species} <span className="status">{data.status}</span>
      </div>
      <div className="location">{data.location.name}</div>
      <Quote />
    </div>
  )
}
