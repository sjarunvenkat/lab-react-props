import React, {Component} from 'react'
import './App.css'
import DataComponent from './components/DataComponent'

export default class AppClass extends Component{
    render(){
        const imageData = DataComponent()
        return(
            <>
            <div className="heading">
                <h1>Kalvium Gallary - Class</h1>
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
}