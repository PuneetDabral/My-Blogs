
import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyle=makeStyles({
    component:{
        background:'#ffffff',
        color:'black'

    },
    container:{
        justifyContent: 'center',
        '& > *':{    //parent class to child class
            padding:20,

        }
    },

    link:{
        textDecoration:'none',
        color:'inherit'
    }

});



//react hook
const Home=()=>{
    const classes= useStyle();
    return(
<AppBar className={classes.component}>
  <Toolbar className={classes.container}>
     <Link to='/' className={classes.link}><Typography>HOME</Typography></Link> 
      <Typography>ABOUT</Typography>
      <Typography>CONTACT</Typography>
      <Typography>LOGIN</Typography>
  </Toolbar>
</AppBar>
    )
    
}
export default Home;