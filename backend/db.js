const mongoose=require('mongoose')
mongoose.set('strictQuery', true)
const mongoURI="mongodb://localhost:27017/inotebook"
const connecttomongoose=async()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('Connect to mongo sucessfully');
        
    })
}
module.exports=connecttomongoose