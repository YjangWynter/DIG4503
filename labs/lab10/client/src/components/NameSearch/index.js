import React, {Component} from 'react';

export default class NameSearch extends Component{
    
    readName(event){
        
        event.preventDefault();
        let report = (obj, prop) => {
            let reporting = document.querySelector("#reportingArea");
            console.log(obj)
                if (obj.error){
                    reporting.innerHTML = obj.error;
                } else{
                    reporting.innerHTML = prop;
            }
        }

        let name = document.querySelector("#name");
        fetch(`/employees/${name.value}`)
        .then((res)=>{
            return res.json();
        })
        .then((processed)=>{
           report(processed, processed.age)
        });
        name.value = ""
        
    }
    render(){
        return(
            <div>
                <h2>Name</h2>
                <form onSubmit={this.readName}>
                    <label for="name">Name</label><br/>
                    <input type="text" name="name" placeholder="Name" id="name"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}