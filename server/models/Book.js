import { default as mongoose } from "mongoose";


const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        default: 0.0,
    },
},
{ timestamps: true,})

const Book = mongoose.model('Book', bookSchema)
export default Book