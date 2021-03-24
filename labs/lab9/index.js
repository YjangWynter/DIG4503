import Express from 'express';
import fs from 'fs';

const App = Express();
const port = 3003;

let fileContents = fs.readFileSync("database.json");

let database = JSON.parse(fileContents);

App.get("/employees/:name", (req,res) => {
    let result = {"error": "not found"};

    database.forEach((value)=>{
        if(req.params.name === value.name){
            result = value;
        }
    });
    
    res.json(result);
});

App.use("/", Express.static("public"));
 
App.get("/ages/:number", (req,res) => {
    let result = {"error": "not found"};
    database.forEach((value)=>{
        if(parseInt(req.params.number) === value.age){
            result = value;
        }
    });
    
    res.json(result);
});
App.post("/employees/add/:name/:age",(req,res)=>{
    let result = {
    "name":req.params.name,
    "age":parseInt(req.params.age)
    };
    database.push(result);

    fs.writeFileSync("database.json", JSON.stringify(database), null,'\t');
    res.JSON(result);
}); 

App.listen(port, () => {
    console.log('Server running');
});