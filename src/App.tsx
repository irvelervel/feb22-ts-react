import React from 'react'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapComponent from './components/BootstrapComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchComponent from './components/FetchComponent'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                <FunctionalComponent
                  mainTitle="Hello TS World!"
                  subTitle="Another title"
                />
              }
            />
            <Route
              path="/class"
              element={<ClassComponent mainTitle="Hello TS World!" />}
            />
            <Route path="/form" element={<BootstrapComponent />} />
            <Route path="/fetch" element={<FetchComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
