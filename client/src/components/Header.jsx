
import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core'

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
    }

});



//react hook
const Home=()=>{
    const classes= useStyle();
    return(
<AppBar className={classes.component}>
  <Toolbar className={classes.container}>
      <Typography>HOME</Typography>
      <Typography>ABOUT</Typography>
      <Typography>CONTACT</Typography>
      <Typography>LOGIN</Typography>
  </Toolbar>
</AppBar>
    )
    
}
export default Home;