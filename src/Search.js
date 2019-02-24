import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from '@reach/router'
import './App.css'

export default function Search() {
  const [data, setData] = useState({ results: [] })
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  const handleSubmit = e => {
    e.preventDefault()
    setSearch(query)
  }

  //API call to fetch all characters
  async function searchCharacters() {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/?name=${query}`
    )

    setData(result.data)
    setLoading(false)
  }

  useEffect(() => {
    searchCharacters()
  }, [search])

  return loading ? (
    <span>Loading...</span>
  ) : (
    <div className="results-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="results">
        <ul>
          {data.results.map(item => (
            <li key={item.id}>
              <Link to={`/details/${item.id}`}>
                <img src={item.image} alt={item.image} />
                <span className="name">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
