import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

/** Ajout des routes */

/** 1ere routes  */
// localhost:5000/posts
//** nous avons simplifier la creation de notre route en creant son handler dans le controllers/posts.js */

router.get('/', getPosts);
router.post('/', createPost);

/** exporter notre route */
export default router;