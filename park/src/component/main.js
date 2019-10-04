import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Title from './Title';

export default class main extends Component {
    constructor(props){
        super(props);
        this.state={
            slot:[2,2,2,2,2,2,2,2,2,2],
            car_but_state: [0,0,0,0,0,0,0,0,0,0],
            bike_but_state: [0,0,0,0,0,0,0,0,0,0]
        };
    }
    parkSlot(ind,val)
    {
        let i=ind;
        let {slot}= this.state;
        let{car_but_state}=this.state;
        let{bike_but_state}=this.state;
        if(slot[ind]!==0){
            slot[ind] = slot[ind]-val;
            this.setState({slot});
            if(val===1){
                car_but_state[ind]=true;
                this.setState({car_but_state});
            }
            if(slot===0)
                alert("No more parking space");
            else if(slot[ind]===1)
                alert('Parking Slot '+ ++i +' is not full');
            if(slot[ind]===0){
                bike_but_state[ind]=true;
                car_but_state[ind]=true;
                this.setState({bike_but_state});
                this.setState({car_but_state});
                alert('Parking Slot '+ ++ind +' is Full.');
            }
        }
        else{
            bike_but_state[ind]=true;
            car_but_state[ind]=true;
            this.setState({bike_but_state});
            this.setState({car_but_state});
        }
        
    }



    render() {
        return (
            <div>
                <Title/>
                <Container>
                    <Row >
                        <Col >
                        <button onClick={()=>this.parkSlot(0,1)}disabled={this.state.bike_but_state[0]}>
                            bike
                        </button>
                        <button onClick={()=>this.parkSlot(0,2)} disabled={this.state.car_but_state[0]}>
                            car
                        </button>
                        </Col>
                        <Col>
                        <button onClick={()=>this.parkSlot(1,1)}disabled={this.state.bike_but_state[1]}>
                            bike
                        </button>
                        <button onClick={()=>this.parkSlot(1,2)} disabled={this.state.car_but_state[1]}>car</button> 
                        </Col>
                        <Col>
                        <button onClick={()=>this.parkSlot(2,1)}disabled={this.state.bike_but_state[2]}>bike</button>
                        <button onClick={()=>this.parkSlot(2,2)} disabled={this.state.car_but_state[2]}>car</button>
                        </Col>
                        <Col>
                        <button onClick={()=>this.parkSlot(3,1)}disabled={this.state.bike_but_state[3]}>bike</button>
                        <button onClick={()=>this.parkSlot(3,2)} disabled={this.state.car_but_state[3]}>car</button>
                        </Col>
                        <Col>
                        <button onClick={()=>this.parkSlot(4,1)}disabled={this.state.bike_but_state[4]}>bike</button>
                        <button onClick={()=>this.parkSlot(4,2)} disabled={this.state.car_but_state[4]}>car</button>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                        <button onClick={()=>this.parkSlot(5,1)}disabled={this.state.bike_but_state[5]}>bike</button>
                        <button onClick={()=>this.parkSlot(5,2)} disabled={this.state.car_but_state[5]}>car</button>
                        </Col>
                        <Col>
                        <button onClick={()=>this.parkSlot(6,1)}disabled={this.state.bike_but_state[6]}>bike</button>
                        <button onClick={()=>this.parkSlot(6,2)} disabled={this.state.car_but_state[6]}>car</button>
                        </Col>
                        <Col>
                        <button onClick={()=>this.parkSlot(7,1)}disabled={this.state.bike_but_state[7]}>bike</button>
                        <button onClick={()=>this.parkSlot(7,2)} disabled={this.state.car_but_state[7]}>car</button>
                        </Col>
                        <Col>
                        <button onClick={()=>this.parkSlot(8,1)}disabled={this.state.bike_but_state[8]}>bike</button>
                        <button onClick={()=>this.parkSlot(8,2)} disabled={this.state.car_but_state[8]}>car</button>
                        </Col>
                        <Col>
                        <button onClick={()=>this.parkSlot(9,1)}disabled={this.state.bike_but_state[9]}>bike</button>
                        <button onClick={()=>this.parkSlot(9,2)} disabled={this.state.car_but_state[9]}>car</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
