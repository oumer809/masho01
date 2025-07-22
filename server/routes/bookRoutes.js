import express from "express"
import Book from "../models/Book.js"

const router = express.Router() 

// get all
router.get('/', async (req,res) => {
    try {
        const books = await Book.find({}).sort({createdAt: -1})
        if(!books){
            res.status(404).json({msg:'books not found!'})
        }
        res.status(201).json(books)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Server error'})
    }
})
// get one
router.get('/:id', async (req,res) => {
    try {
        const book = await Book.findById(req.params.id)
        if(!book){
            res.status(404).json({msg:'book not found!'})
        }
        res.status(201).json(book)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Server error'})
    }
})
// post book
router.post('/', async (req,res) => {
    const {title,price, description, image,author}=req.body;
    try {
        const newBook = new Book({price: parseFloat(price),title,description,image,author})
        await newBook.save();
        res.status(201).json(newBook)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Server error'})
    }
});

// update
router.put('/:id', async (req,res) => {
  const {title,price, description, image,author}=req.body;
    try {
        const book = await Book.findById(req.params.id)
        if(!book){
            res.status(404).json({msg:'book not found!'})
        }
        book.title = title || book.title;
        book.price = price || book.price;
        book.image = image || book.image;
        book.author = author || book.author;
        book.description = description || book.description;
        const updatedBook = await book.save()
        res.status(201).json(updatedBook)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Server error'})
    }
})

// delete 
router.delete('/:id', async (req,res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if(!book){
            res.status(404).json({msg:'book not found!'})
        }
        res.status(201).json({msg:' Book deleted!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Server error'})
    }
})
export default router