import Express from 'express';
const App = Express();
const port = 3005;

const watching = [
    'Cowboy_Bebop',
    'Hataruku_Saibou_Black',
    'Serial_Experiments_Lain'
];
const completed = [
    'Aggressive_Retsuko',
    'Hataruku_Saibou',
    'Jojo_no_Kimyou_na_Bouken_Part_5:_Ougon_no_Kaze',  
];

const  planned = [
    'Steins;Gate_0',
    'Hataruku_Saibou!!',
    'Jujutsu_Kaisen',  
];
const shows = [
   ...watching,
   ...completed,
   ...planned
]

//dynamic route 1: watching
App.get('/watching/:anime',(req,res)=>{
    let anime = req.params.anime;

    (watching.includes(anime))  
    ?   res.json({"Anime": anime}) 
    :   res.send("Anime not found");
});

//dynamic route 2: completed
App.get('completed/:anime',(req,res)=>{
    let anime = req.params.anime;

    (completed.includes(anime))  
    ?   res.json({"Anime": anime}) 
    :   res.send("Anime not found");
});


//dynamic route 3: planned
App.get('/planned/:anime',(req,res)=>{
    let anime = req.params.anime;

    (planned.includes(anime))  
    ?   res.json({"Anime": anime}) 
    :   res.send("Anime not found");
});


//search route
App.get('/search/:anime',(req,res)=>{
    const result = shows.filter((str)=>
    str.includes(req.params.anime));
    
    (result !== 0 )
    ?   res.json({"Search": result})
    :   res.send("Anime not found");
});


//App listening on port 3005
App.listen(port, ()=>{});