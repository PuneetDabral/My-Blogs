import { Grid} from '@material-ui/core';
import {Link } from 'react-router-dom';



//components
import Post from './Post';

const Posts = () => {
  let posts=[1,2,3,4,5,6]   //lg large screen mai 3 size ka ek component or mediam mai 4 size or small mai 12 or grid ka size 12
  

    return (
      posts.map(post=>(
        <Grid item lg={3} sm={4} xs={12}>
        <Link to={'/details'} style={{textDecoration:'none', color:'inherit'}} >
          <Post/>
        </Link>
          
       </Grid>

      ))
       
        
    )
}

export default Posts;