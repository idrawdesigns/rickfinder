import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from '@reach/router'

export default function Quote() {
  const [data, setData] = useState({ results: [] })
  const [loading, setLoading] = useState(true)

  //API call to fetch all characters

  const getQuote = async () => {
    const result = await axios(
      `http://loremricksum.com/api/?paragraphs=1&quotes=1`
    )

    setData(result.data)
    setLoading(false)
  }

  useEffect(() => {
    getQuote()
  }, [])

  return loading ? (
    <span>Loading...</span>
  ) : (
    <div className="quote">{data.data}</div>
  )
}
