import React, { Component } from 'react'
import './components.css';
import axios from 'axios';

export default class Result extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            // baseurl:'localhost:8081/getData',
            link:' '
        }
    };
    componentDidMount()
    {
        axios.get("http://localhost:8081/getData")
        .then(res=>{
            
            this.setState({items:res.data.results})
            this.sort();
            
    })
}
findMovie()
{
// let{baseurl,link}=this.state;
// let newurl=baseurl+link;
axios.get('http://localhost:8081/getData')
        .then(res=>{        
            this.setState({items:res.data.results})
            this.sort();
           
})
}
sort(){
let arr = this.state.items;
arr.sort(function(a,b){return b.popularity-a.popularity})
            this.setState({results:arr});
}

handleChange(event)
{
    this.setState({[event.target.name]:event.target.value})


}

display()
{
    let{items}=this.state;
    let pic='http://image.tmdb.org/t/p/w185/'
    return(
        
        <div className="container-fluid" id='bgcolor'>
            <div className='row'>
            {items.map((item)=>{
                var img=pic+item.poster_path;
                return(
                    <div className='col-md-3'>
                        <div id='set1'>
                            <img src={img} alt=''/>
                            <p id='set2'>
                            {item.title}   
                            </p>
                            <p>{item.popularity}</p>
                        </div>
                    </div>
                )    
                })}
            </div>
        </div>

        )
}
    render() {
        return (
            <div>
            <div>
               Search a movie:<input type='text' onChange={(event)=>this.handleChange(event)} value={this.state.link} name="link"></input>
               
               <button type='button' onClick={this.findMovie()}>Search</button>
                </div>
            <p>  </p>
                {this.display()}
            
                    </div>
                
            
        )
    }
}
