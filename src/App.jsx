import { useState } from 'react'
import { Routes, Route, useSearchParams } from "react-router-dom";
import './App.css'
import { Articles } from './components/Articles';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Navbar /> */}
        <div id="main-content">
        <Routes>
          <Route path="/" element={<Articles />} />
        </Routes>
        </div>
    </>
  )
}

export default App
