import mongoose from "mongoose"
import colors from 'colors'
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
      console.log('<<<<<<< MongoDB Connected! >>>>>>>'.cyan.bold.underline)
    } catch (error) {
        console.log('Mongodb err:'.red.underline ,error)
    }
}

export default connectDB