import React, {Component} from 'react';

export default class AgeSearch extends Component{
    
    readAge(event){
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
        //selects the value of the user's input for age
        let age = document.querySelector("#age");
         // pulls  & finds age within `database` array
        fetch(`/ages/${age.value}`)
        .then((res)=>{
            console.log(res)
            return res.json();
        })
        .then((processed)=>{
            report(processed, processed.name)
        });
        //used to reset value for age input
        age.value = "";
    }
    //Renders form to input the age
    render(){
        return(
            <div>
                <h2>Name</h2>
                <form onSubmit={this.readAge}>
                <label for="age">Age</label><br/>
                <input type="number" min="1" max="125" name="age" placeholder="Age" id="age"/>
                <button>Submit</button>
            </form>
            </div>
        );
    }
}
