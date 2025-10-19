import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
{
     name: {type: String, required: true, trim:true},
     link:{type: String},
     description:{type: String},
},
{
     timestamps: true, //fecha de creacion y actualizacion
}
);

export const Card = mongoose.model("Card", cardSchema);