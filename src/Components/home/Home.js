import React, { Component } from 'react';
import Dates from './Dates';
import axios from 'axios';
import Card from './Card.js';

class Home extends Component {

  state = {
    info: [],
    filter: false,
    start: null,
    end: null
    
  }

//route-1 
//this maintains the state of the home page 
//and has all the functions needed
//in the render method it passes the needed props to the components 


componentDidMount(){
    this.info()
    console.log(this.state)
}

componentDidUpdate(){
  if(this.state.filter === true)
  {this.info()}
}

//fetching the info using axios 
 info = async (start = null, end = null) => {
    try {
        const resp = this.state.filter ? 
        await axios.get(`https://api.spacexdata.com/v3/launches?start=${this.state.start}&end=${this.state.end}&limit=15`) : 
        await axios.get('https://api.spacexdata.com/v3/launches?limit=15');
        this.setState(
            {
                info: resp.data

            }
        )
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
 
};


  handleChange = (event) => {
    event.preventDefault()  
  }

  handleSubmit = (event) => {
      event.preventDefault()
      this.setState({            
            info:[],
            start: document.getElementById("start").value,
            end : document.getElementById("end").value,
            filter: true
      
    });
      this.info()
      console.log(this.state)
      
  }

  render(){ 

    function convertTimestamptoDate(unixTimestamp) { 
      let dateObj = new Date(unixTimestamp * 1000).toLocaleString('en-US');  
       const date= dateObj.split(',')[0]; 
       return date 
   }    

    return ( 
    <div>
      <div>
        <h1 className={"header"}>SPACEX</h1>
      </div>     
      <Dates handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> 
      <div className="homeDisplay">{this.state.info.map(flight => <Card key={flight.flight_number} fn={flight.flight_number} mission={flight.mission_name} launchDate ={convertTimestamptoDate(flight.launch_date_unix)} img = {flight.links.mission_patch_small}/>)}</div>
      <div className={"footer"}>
        <h4>Made with REACT</h4>
        <p>Copyright © 2020 Ishita. All rights reserved</p>
      </div>
    </div>
      
    )
  }  
}

export default Home;