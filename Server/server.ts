import express from "express";
import cors from 'cors'
import {userRoute} from './router/user_routes'
import { brandRoute } from "./router/Brand_router";

const app = express()
const PORT = 4000
app.use(cors())
app.use(express.json())
app.use('/api',userRoute)

app.use('/brand',brandRoute)








app.listen(PORT,()=>{
    console.log( `server listening on http://localhost:${PORT}`);
    
})