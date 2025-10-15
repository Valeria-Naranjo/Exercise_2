import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
{
     name: {type: String, required: true, trim:true},
     link:{},
     description:{},
},
{
     timestamps: true, //fecha de creacion y actualizacion
}
);

export const Card = mongoose.model("Card", cardSchema);