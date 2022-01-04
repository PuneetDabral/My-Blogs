import { Box,makeStyles,FormControl, InputBase, Button, TextareaAutosize } from "@material-ui/core";
import {AddCircle} from '@material-ui/icons';
import { useState } from "react";
import {useHistory} from 'react-router-dom';

//function
import { createPost } from "../../service/api";

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
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:10
    },
    textfield:{
        flex:1,   //strech to full screen
        margin:'0 30px',
        fontSize:25
    },
    textarea:{
        width:'100%',
        marginTop:50,
        border:'none',
        fontSize:18,
        '&:focus-visible':{
            outline:'none'
        }

    }
   

}));

const intialValue ={
    title:'',
    description:'',
    picture:'',
    username:'Dabral',
    categories:'All',
    createDate:new Date()

}



const CreateView=()=>{   //functional componnent
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    const history = useHistory();
    const classes =useStyle();
    
    //use for send the data from the text filed to mongdb process and save it 
    const [post ,setPost] = useState( intialValue);  //use cant not dit=rect change the value of post

    const handleChange=(e)=>{
        setPost({...post,[e.target.name]:e.target.value})   //match name to the object name and fill the value 

    }

    const savePost =async()=>{
        await createPost(post);
        history.push('/');
    }


    return(
        <Box className={classes.container}>
            <img src={url} alt='banner' className={classes.image} />

            <FormControl className={classes.form}>
                <AddCircle fontSize="large" color="action"/>

                <InputBase
                 onChange={(e)=>handleChange(e)}
                  placeholder="title"  
                  className={classes.textfield}
                  name='title'
                   />

                <Button onClick={()=>savePost()} variant="contained" color="primary">Publish</Button>
            </FormControl>

            <TextareaAutosize 
                rowsMin={5}
                placeholder="tell your story...."
                className={classes.textarea}
                onChange={(e)=>handleChange(e)}
                name='description'
            />
        </Box>
    )

}

export default CreateView;