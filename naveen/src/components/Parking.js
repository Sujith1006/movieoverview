import React, { Component } from 'react'

export default class Parking extends Component {
    constructor(props){
        super(props);
        this.state={
            obj:[]
        }
    }
     addspace()
     {
    
        let parkobj=
        {
            cars:0,Bike:0
        }
        let {obj}=this.state;
        obj.push(parkobj);
        this.setState({obj});
        console.log(this.state.obj);
    
     }

     
addButton()
{ return(
    {this.state.parkobj.map((Object,Index)=>{
        return(
    <button>car</button>
    <button>Bike</button>
     )
    }
  )

}   
    render() {
        return (
            <div >
                
                <button  onClick={()=> this.addspace()}>ParkVehicle</button>
         
            </div>
        )
    }

}