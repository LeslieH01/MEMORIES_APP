import React from "react";

/** notre composants Posts utilise le composant Post */
import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
    const classes = useStyles();
    return (
        <>
            <h1 className={classes.mainContainer}> Postes</h1>
            <Post />
            <Post />
        </>

    );
}

export default Posts;