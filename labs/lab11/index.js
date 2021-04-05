import MongoCLient from 'mongodb';

const url = "mongodb+srv://ywynter:{enter_password}.oewwc.mongodb.net/test"

let result = await MongoCLient.connect(url,{useUnifiedTopology:true})
.then(connection =>{
    let database  = connection.db('sample_airbnb');

    let collection = database.collection("listingsAndReviews");

    let cursor = collection.find({
        "review_scores.review_scores_rating": {$gte:9}, 
        beds:{$gte: 5},
        price:{$lte: 200.00}
    
    });
    let count = 0;
    cursor.forEach(document=>{
        console.log(` #${count+=1}: ${document.name}\n
        \t Rating: ${document.review_scores.review_scores_rating}/100\n
        \t Beds: ${document.beds}\n
        \t Price: ${document.price}$\n
        \t Learn more: ${document.listing_url}\n`)

    }, ()=>connection.close());


})
.catch(error=>`Error: ${error}`);

console.log(result)