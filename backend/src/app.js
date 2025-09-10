import express from 'express';
import cors from 'cors'

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true, limit:"10kb"}))
// Router
import bookRouter from './routes/book.routes.js'


const apiUrl = '/api/v1'
app.use(`${apiUrl}/books`,bookRouter)



// global erro handler use
import { globalHandlerError } from './utils/globalErrorHandler.js';
app.use(globalHandlerError)
export {app}