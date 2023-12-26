import express from 'express';
import {makeReply,getQReplies} from '../controller/replies_controller'
export const Route = express.Router();

Route.post('/create',makeReply)
Route.get('/:questionId',getQReplies)
