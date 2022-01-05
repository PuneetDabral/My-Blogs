import { Grid} from '@material-ui/core';
import { useState,useEffect} from 'react';
import {Link } from 'react-router-dom';
import { getAllposts } from '../../service/api';




//components
import Post from './Post';

const Posts = () => {
  const [posts,setPosts] = useState([])
 // let posts=[1,2,3,4,5,6]   //lg large screen mai 3 size ka ek component or mediam mai 4 size or small mai 12 or grid ka size 12
  useEffect(()=>{
    const fetchData = async ()=>{
     let data = await getAllposts();
     console.log(data);
     setPosts(data);
    }
    fetchData();
  },[])
 
    return (
      posts.map(post=>(
        <Grid item lg={3} sm={4} xs={12}>
        <Link to={`/details/${post._id}`} style={{textDecoration:'none', color:'inherit'}} >
          <Post post={post}/>
        </Link>
          
       </Grid>

      ))
       
        
    )
}

export default Posts;