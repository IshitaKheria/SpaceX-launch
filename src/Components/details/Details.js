import React, { Component } from 'react';
import axios from 'axios'; 
export default class Details extends Component {
  state = {
    data : {}
  }

  //fetching the info using axios 
  componentDidMount(){
    this.info()
    console.log(this.state)
  }

 info = async (start = null, end = null) => {
    try {
        const resp =  await axios.get(`https://api.spacexdata.com/v3/launches/${this.props.match.params.flight_number}`);
        this.setState(
            {
              data: {
                mission_name: resp.data.mission_name,
                launch_year: resp.data.launch_year,
                image: resp.data.links.mission_patch_small,
                launch_date: resp.data.launch_date_utc,
                details: resp.data.details,
                wiki: resp.data.links.wikipedia,
                video: resp.data.links.video_link
              }
            }
        )
        console.log(this.state)
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  }

  render(){
    const flight=this.state.data;
    return (
        <div className='cardComponentDetails' >
        <br/>
          <h1 className={"detailHead"}>All About <span>{flight.mission_name}</span></h1>
          <center>
            <div>
            <img src={ flight.image } alt = {"Mission"}></img>
            </div>
          <table >
            <tr>
              <th >Launch Year</th>
              <td >{flight.launch_year}</td>
            </tr>
            <tr>
              <th >Launch Date</th>
              <td >{flight.launch_date}</td>
            </tr>
            <tr>
              <th >Details</th>
              <td >{flight.details}</td>
            </tr>
            <tr>
              <th >Wikipedia</th>
              <td ><a href={flight.wiki}>Click Here to visit...</a></td>
            </tr>
            <tr>
              <th >Video</th>
              <td ><a href={flight.video}>Click Here to watch video...</a></td>
            </tr>
          </table>
          </center>
          <br/><br/>
        </div>
    )
}
}


