import express from "express";
import cors from 'cors'
import {userRoute} from './router/user_routes'
import {questionRoute} from './router/question_routes'

const app = express()
const PORT = 4000
app.use(cors())
app.use(express.json())

// user
app.use('/user',userRoute)

// question 
app.use('/question',questionRoute)








app.listen(PORT,()=>{
    console.log( `server listening on http://localhost:${PORT}`);
    
})