import React, {Component} from 'react';

export default class NameSearch extends Component{
    
    readName(event){
        
        event.preventDefault();
        /* Expects obj and its age as arguments
        Prints to the page inside the reportingArea 
        either an error message or the age

        */
        let report = (obj, prop) => {
            let reporting = document.querySelector("#reportingArea");
            console.log(obj)
                if (obj.error){
                    reporting.innerHTML = obj.error;
                } else{
                    reporting.innerHTML = prop;
            }
        }
        //selects the value of the user's input for name
        let name = document.querySelector("#name");
        // pulls  & finds name within `database` array
        fetch(`/employees/${name.value}`)
        .then((res)=>{
            return res.json();
        })
        .then((processed)=>{
           report(processed, processed.age)
        });
        //used to reset value for name input
        name.value = ""
        
    }
    //Renders form to input the name
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