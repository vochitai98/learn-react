import React, { Component } from 'react';
// new way
const Person = (prop) => {
    return (
    <div>
        <p>This is a {prop.name}. I'm {prop.age} year old</p>
        <p>{prop.children}</p>
    </div>
    );
};
//old way
// class Person extends Component{
//     render(){
//         return(
//             <p>This is a person.I'm { Math.floor(Math.random()*30)} year old</p>
//         );
//     }
// }

export default Person;