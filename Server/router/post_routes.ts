import express from "express";
export const postRoute = express.Router();

import {
  getAllPosts,
  updatePost,
  createPost,
  deletePost,
} from "../controller/post_controller";

postRoute.get("/get/post", getAllPosts);
postRoute.post("/post/post/create", createPost);
postRoute.put("/put/post/update", updatePost);
postRoute.delete("/delete/post/delete", deletePost);
