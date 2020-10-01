import React, {Component} from "react";



class Dates extends Component {

    
    render(){
        return (
            
                <div className="DateContent">
                <form onSubmit={this.props.handleSubmit}>
                <div className="DateBox">
                    <h3>Filter By Date</h3>
                    <br></br>
                    <div className="Date">
                        <h5>Start Date:<input type="date" id="start" onChange={this.props.handleChange}></input></h5>    
                        <br></br>
                        <h5>End Date:<input type="date" id="end" onChange={this.props.handleChange}></input></h5>
                    </div>
                    <br></br>
                    <input type="submit" value="Submit" className="button"></input>
                </div>
                </form>                
                </div>

            )
    }
}


export default Dates;