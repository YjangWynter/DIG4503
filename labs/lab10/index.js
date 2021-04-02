import Express from 'express';
import fs from 'fs';
import cors  from "cors";
const App = Express();
//found on localhost:3003
const port = 3003;
App.use(cors());

//reads the contents of database and parses
//into an array
let fileContents = fs.readFileSync("database.json");
let database = JSON.parse(fileContents);

//uses data from build of create-react-app project in client
App.use("/", Express.static("client/build"));

App.get("/employees/:name", (req,res) => {
    let result = {"error": "not found"};

    database.forEach((value)=>{
        if(req.params.name === value.name){
            result = value;
        }
    });
    
    res.json(result);
});

 
App.get("/ages/:number", (req,res) => {
    let result = {"error": "not found"};
    database.forEach((value)=>{
        if(parseInt(req.params.number) === value.age){
            result = value;
        }
    });
    
    res.json(result);
});
//don;t know why this is not working right now
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