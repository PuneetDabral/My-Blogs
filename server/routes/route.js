import express  from "express";
import { createPost,getAllposts } from "../controller/post-controller.js";

const router = express.Router();

router.post('/create',createPost);

router.get('/posts',getAllposts);


export default router;

