import React from 'react';

class Customer extends React.Component{
    render(){
        return  <div>
                    <h1> My name is {this.props.firstName}</h1>
                    <h2> My last name is {this.props.lastName}</h2>
                </div>;

    }
}
export default Customer;