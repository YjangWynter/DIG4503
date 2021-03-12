import Express from "express";
const App = Express();
const port  = 45030;

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.get('/people/:person', (req,res)=>{
    let name = req.params.person;
    (names.includes(name))  
    ?   res.json({"Name": name}) 
    :   res.json({"Name": "not found"})
});

App.get('/search/:name', (req,res)=>{
    const result = names.filter((str)=>
    str.includes(req.params.name));
    
    (result !== 0 )
    ?   res.json({"search": result})
    :   res.json({"search": 'not found'})
});
App.listen(port,()=>{});
//App.use('/', (req,res)=>res.send('Hello World'))
