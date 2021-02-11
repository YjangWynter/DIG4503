import { render } from '@testing-library/react';
import React, {Component} from 'react';
import MarketItem from './MarketItem'

class Market extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    //code goes here

    render(){
        return(
            <div>
                <MarketItem count={this.state.count}/>
                <button onClick={()=>this.setState({count: this.state.count +=1})}>Add +1</button>
            </div>
        );
    }
}
export default Market