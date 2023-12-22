import express from "express";
import cors from 'cors'
import {userRoute} from './router/user_routes'
import { brandRoute } from "./router/Brand_router";
import {questionRoute} from './router/question_routes'
import { productRoute } from "./router/product_routes";
import { postRoute } from "./router/post_routes";
import { basketRoute } from "./router/basket_routes";
import { followRoute } from "./router/followers_routes";
import { favoriteRoute } from "./router/favorite_routes";


const app = express()
const PORT = 4000
app.use(cors())
app.use(express.json())
app.use('/api',questionRoute)

app.use('/api',followRoute)
app.use('/api',favoriteRoute)

app.use('/api/user',userRoute)
app.use('/brand',brandRoute)
app.use('/api',productRoute)

app.use('/api/',basketRoute)
app.use('/api',postRoute)







app.listen(PORT,()=>{
    console.log( `server listening on http://localhost:${PORT}`);
    
})