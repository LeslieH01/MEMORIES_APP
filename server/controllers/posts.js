import postMessage from "../models/postMessage.js";

// handlers de la route router.get
/** nous allons rendre notre fonction asynchrone */
export const getPosts = async (req, res) => {
    try {
        /** sucessfull : essayons alors d'extraire les postes de la bd*/
        const postMessages = await postMessage.find();
        // si c'est okey, nous allons retourner le tableau de messages
        res.status(200).json(postMessages);
    } catch (error) {
        /** si errer */
        res.status(404).json({ message: error.message });
    }
}

// handlers de la route router.post
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new postMessage(post);
    try {
        /*** nous avons ici une action asynchrone d'où await et async(au dessus)*/
        await newPost.save();
        // si l'enregistrement a réussi 201


        res.status(201).json(newPost);
    } catch (error) {
        // en cas d'errer 409
        res.status(409).json({ message: error.message });
    }
}