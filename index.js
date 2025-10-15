import express from "express";
import { connectDB } from "./db.js";
import { Card } from "./models/Card.js";
import dotenv from "dotenv";
dotenv.config();
const app = express()
connectDB();
app.use(express.json());  




app.post("/createCard", async (req, res)=>{
    try{
        const card = await Card.create(req.body);
        console.log(card);
        res.status(201).json(card);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Failed to create card' });
    }
});


//get all the cards  (SELECT * FROM cards)
app.get("/getAllCards", async (req, res)=>{
    try{
        const cards = await Card.find();
        res.status(200).json(cards);
    }catch{
        res.status(400).send(Error);
        console.error(Error);
    }
});

// get card by id
app.get("/getAllCards/:id", async (req, res)=>{
    try{
        const { id } = req.params;
        const card = await Card.findById(id);
        if (!card) return res.status(404).json({ message: 'Card not found' });
        res.status(200).json(card);
    }catch(error){
        console.error(error);
        res.status(400).json({ error: 'Invalid id or request' });
    }
});

// delete card by id
//CREAR UN DELETE AAAAAA
app.delete('/cards/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Card.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: 'Card not found' });
        return res.status(200).json({ message: 'Card deleted', card: deleted });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: 'Invalid id or request' });
    }
});


app.get("/hola",(req,res)=>{
     res.status(200).send("Hola MundoHello world from my Server cute");
})

app.post("/send", (req, res)=>{
    const {user, email}= req.body;
    //let's assume we save this data to a database
    res.status(200).send("Data received successfully" + user + " " + email );
})

app.listen(3000,()=>{
    console.log("Server started on http://localhost:3000");
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server started on http://localhost: ${PORT}`);
});