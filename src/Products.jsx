// src/Products.jsx
import { useState, useEffect } from 'react'
import { supabase } from './supabase'

export function Products() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const { data: tableData, error } = await supabase
        .from('grocery_products')
        .select('*')
      
      if (error) throw error

      setData(tableData)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>Data from Supabase</h1>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            {/* Adjust according to your table columns */}
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}