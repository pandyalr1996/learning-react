import React,{Component} from 'react';
import './App.css';
import Person from './Components/Person';

class App extends Component{

  state = {
    info:[
      {name:"Pratik", age:26},
      {name:"Rahul" ,age:28}
    ]
  }

  switchHandler = (nam) =>{
    this.setState({
      info:[
        {name:nam, age:25},
        {name:"Rahul Asendiya" ,age:38}
      ]
    })

  }
  changed=(event)=>{
    this.setState({
      info:[
        {name:"pratik", age:25},
        {name:event.target.value ,age:38}
      ]
    })
  }

  render(){
    return (
      <div className="App">
        
  
        <button onClick={()=> this.switchHandler("BABA JI 420")}>Switch</button>
        <Person   
        
        click={this.switchHandler.bind(this,"..PANDYA SAHAB")}
        name={this.state.info[0].name} age={this.state.info[0].age}>
        </Person>
        <Person  
        name={this.state.info[1].name} age={this.state.info[1].age} 
        chg={this.changed}>
        Hi I'm propssss childerssss 
        </Person>  

      </div>
    );
  }
}

export default App;
