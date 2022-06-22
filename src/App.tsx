import React from 'react'
import './App.css'
// import FunctionalComponent from './components/FunctionalComponent'
// import ClassComponent from './components/ClassComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapComponent from './components/BootstrapComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassComponent mainTitle="Hello TS World!" subTitle="Another prop!" />
        <ClassComponent mainTitle="Hello TS World!" /> */}
        {/* <FunctionalComponent
          mainTitle="Hello TS World!"
          subTitle="Another title"
        /> */}
        <BootstrapComponent />
      </header>
    </div>
  )
}

export default App
