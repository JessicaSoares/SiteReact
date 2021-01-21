import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../Components/PostCard';

const useStyles = makeStyles((theme) => ({
    root:{
      
    },
 

}));

const posts = [
    {
        id:1,
        author:{name: 'jess soares',
       username: 'fodase',
    avatar:"/images/avatars/avatar1.jpg"},
    title:"talta",
    date: "seila",
    description: "fora bolsonaro",
    hashtags:"seila",
    image:"/images/posts/post1.png"},


{
    id:2,
   author:{name: 'meus dois centavos',
   username: 'fodase',
avatar:"/images/avatars/avatar1.jpg"},
title:"talta",
date: "seila",
description: "fora bolsonaro",
hashtags:"seila",
image:"/images/posts/post1.png"},

{
    id:3,
    author:{name: 'aonde foi',
   username: 'fodase',
avatar:"/images/avatars/avatar1.jpg"},
title:"talta",
date: "seila",
description: "fora bolsonaro",
hashtags:"seila",
image:"/images/posts/post1.png"},
];



function Feed(){
    const classes = useStyles();

return(

    <div className={classes.root}>
        {posts.map(post => (   


        <PostCard key={post.id} post = {post}></PostCard>
               ))}
        
    </div>

 )
}

export default Feed;

