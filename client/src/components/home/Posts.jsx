import { Grid, Box } from '@material-ui/core';


//components
import Post from './Post';

const Posts = () => {
  let posts=[1,2,3,4,5,6]
  

    return (
      posts.map(post=>(
        <Grid item lg={3} sm={4} xs={12}>
          <Post/>
          
       </Grid>

      ))
       
        
    )
}

export default Posts;