/* eslint-disable no-empty */
import { useMemo, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunc(number)
  }, [number])

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
    borderRadius: 10
  }

  return (
    <>
      <div className="container w-25 p-3 d-flex flex-column gap-3 shadow rounded-3 bg-dark-subtle">
        <legend className=''>useMemo Hook Example</legend>
        <input
          type="number"
          className='form-control'
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button
          onClick={() => setDark((prevDark) => !prevDark)}
          className='btn btn-sm btn-info text-white fw-bolder'
        >
          Change Theme
        </button>
        <div style={theme}>{doubleNumber}</div>
      </div>
    </>
  )
}

const slowFunc = (num) => {
  console.log("Function called")
  for (let i = 0; i <= 1000000000; i++) { }
  return num * 2
}

export default App
