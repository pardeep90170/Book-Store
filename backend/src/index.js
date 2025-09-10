import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';


dotenv.config({
    path: './.env'
});


const port = process.env.PORT || 3000
connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`⚙️ Server is running at http://localhost:${port}`)
    })
})
.catch((error)=>{
    console.log('Mongodb connection Failed !!!',error)
})

app.get('/',(req,res)=>{
    res.send("welcome to pardeep server")
})