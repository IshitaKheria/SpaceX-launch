import React, { Component } from 'react'


export default class Card extends Component{

//card body
    //card header:- mission_name, launch_date_unix converted 
    //card image:- links.mission_patch_small 
    //link card to the details page
render(){
    return (
        <div className = {"cardComponent"}>
            <a href={`/${this.props.fn}`}> 
            <div>
            <div className = {"cardHeader"}>
                <h2>Flight {this.props.fn}</h2>
                <h1 >Mission: {this.props.mission}</h1>
                <h2>Launch Date: {this.props.launchDate}</h2>    
            </div>
            </div>
            
            <div>
                <div className = {"cardImage"}>
                <img src={ this.props.img } alt = {"Mission"}></img>
                </div> 
            </div>  
            </a>    
        </div>
        
    )
}

}
