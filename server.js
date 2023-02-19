import  express  from "express";
import connection from "./DB/mongo.js";
import baseroute from './routes/baseroute.js'
import  cookieParser  from 'cookie-parser';
import cors from 'cors'
const app = express()

//DB connection
connection()
const PORT = 3002

//to access json from request
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1',baseroute)

app.listen(PORT,()=>{
    console.log("server started")
})

