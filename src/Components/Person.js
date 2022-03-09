import React from "react";
import './Person.css';

const Person = (props) =>{
    return(
        <div className="Persons">
            <h3>Hi this is import testing</h3>
            {/* <h2>Hi my name is rahul and i'm {Math.floor(Math.random()*10)} years old</h2> */}
            <p onClick={props.click}>Hi my name is   {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
           <input type='text' onChange={props.chg} value={props.name}/>


        </div>
    );
}

export default Person;