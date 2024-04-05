const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
let bookCollections;
const { MongoClient, ObjectId } = require('mongodb');


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

const uri = 'mongodb+srv://juimandal31:8x2qdmFHxsDL8Jv7@cluster0.l7fz9gf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    bookCollections = client.db("BookInventory").collection("books");
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } catch(error){
    console.log("error", error);
  }finally {
       
  }
}
   
   app.post("/upload-book", async (req, res) => {
    try {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

 

app.get("/all-book", async (req, res) => {
  const books = bookCollections.find();
  const result = await books.toArray();
  res.send(result)
})

app.delete("/book/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const filter = { _id: new ObjectId(id) };
    const result = await bookCollections.deleteOne(filter);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});



app.get("all-book", async(req,res)=>{
   let query = {};
   if(req.query?.category){
    query ={category : req.query.category}
   }
   const result = await bookCollections.find(query).toArray();
   res.send(result);
})

app.get("/books/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id : id };
  try {
    const result = await bookCollections.findOne(filter);
    if (!result) {
      res.status(404).json({ error: "Book not found" });
      return;
    }
    res.send(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.patch("/book/:id", async (req, res) => {
  const id = req.params.id;
  const upateBookData = req.body;

   
  console.log("hiii");
  try {
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };
    const updateDoc = {
      $set: { ...upateBookData }
    };
    
    const result = await bookCollections.updateOne(filter, updateDoc, options);
    console.log(result);

    
    res.json({ msg: "changed data" });
  } catch (error) {
        
    res.status(500).json({ error: "Internal server error" });
  }
});


run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

















































































































































































































