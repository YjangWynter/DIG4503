import React, {Component} from 'react';

export default class AgeSearch extends Component{
    
    readAge(event){
       
        event.preventDefault();
        let report = (obj, prop) => {
            let reporting  = document.querySelector("#reportingArea");
            console.log(obj)
                if (obj.error){
                    reporting.innerHTML = obj.error;
                } else{
                    reporting.innerHTML = prop;
            }
        }
        let age = document.querySelector("#age");
        fetch(`/ages/${age.value}`)
        .then((res)=>{
            console.log(res)
            return res.json();
        })
        .then((processed)=>{
            report(processed, processed.name)
        });
        age.value = "";
    }
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
