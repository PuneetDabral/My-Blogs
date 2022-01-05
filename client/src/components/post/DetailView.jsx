import { Box,makeStyles, Typography} from "@material-ui/core";
import {Edit,Delete} from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { getPost } from "../../service/api.js";

const useStyle=makeStyles((theme)=>({
    container:{
        padding:'0 100px',
        [theme.breakpoints.down('md')]:{
            padding:0   
        }
    },
    image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover'

    },
    icons:{
        float:'right'
    },
    icon:{
        margin:5,
        border:'1px solid #878787',
        padding:5,
        borderRadius:10

    },
    heading:{
        fontSize:35,
        fontWeight:600,
        textAlign:'center',
        margin:'50px 0 10px 0'
    },
    subhead:{
        color:'#878787',
        display:'flex',
        margin:'20px 0',
        [theme.breakpoints.down('md')]:{
           display:'block'
        }
    }

}))


const DetailView=({match})=>{
    const classes =useStyle();
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
 
    
    const [posti,setPost]=useState({});
    useEffect(()=>{
        const fetchData = async()=>{
        let data = await getPost( match.params.id);
         console.log(data);
         setPost(data);
        }
        fetchData();
    }, [])


    
    return(
       <Box className={classes.container}>
           <img src={url} alt='banner' className={classes.image} />
           <Box className={classes.icons}>
              <Link to='/update'> <Edit className={classes.icon} color="primary"/></Link>
               <Delete className={classes.icon} color="error"/>
           </Box>
           <Typography className={classes.heading}>Title of the Blog</Typography>

           <Box className={classes.subhead}>
               <Typography>Author:<span style={{fontWeight:600}}>Dabral</span></Typography>
               <Typography style={{marginLeft:'auto'}}>03 Januery 2022</Typography>
           </Box>
           <Typography>It is a long established fact that a reader will be distracted by the readable content of 
           a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
           distribution of letters, as opposed to using 'Content here, content here', making it look like readable 
           English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
            have evolved over the years,sometimes by accident, sometimes on purpose (injected humour and the like).</Typography>
       </Box>
    )

}

export default DetailView;

