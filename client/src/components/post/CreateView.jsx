import { Box,makeStyles,FormControl, InputBase, Button, TextareaAutosize } from "@material-ui/core";
import {AddCircle} from '@material-ui/icons';

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
   

}))



const CreateView=()=>{   //functional componnent
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const classes =useStyle();
    
    return(
        <Box className={classes.container}>
            <img src={url} alt='banner' className={classes.image} />

            <FormControl className={classes.form}>
                <AddCircle fontSize="large" color="action"/>
                <InputBase placeholder="title" className={classes.textfield} />
                <Button variant="contained" color="primary">Publish</Button>
            </FormControl>

            <TextareaAutosize 
                rowsMin={5}
                placeholder="tell your story...."
                className={classes.textarea}
            />
        </Box>
    )

}

export default CreateView;