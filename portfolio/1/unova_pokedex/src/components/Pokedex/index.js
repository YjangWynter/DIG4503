import React,{Component, useState} from 'react';
import Pokemon from './pokemon'

export default class PokeDex extends Component{
    constructor(props){
        super(props)
        this.state = {
            response: null,
            error: null
        }
    }
    render(){
        /*
        if (Pokemon.state === 'fulfilled'){
            return <div>{Pokemon}</div>
        }
        */
          
    }
}