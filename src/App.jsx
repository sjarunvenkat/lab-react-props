import React from 'react'
import './App.css'
import DataComponent from './components/DataComponent'

function App(){
  const imageData = DataComponent()

  return(
    <>
    <div className="heading">
      <h1>Kalvium Gallary - Function</h1>
    </div>
    <div className="App">
      {
        imageData.map((img)=>(
          <div key={img.id}>
            <img src={img.img} alt="elephant" />
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App