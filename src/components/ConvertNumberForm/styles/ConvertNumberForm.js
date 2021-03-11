import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    
    form:{
        display:'flex',
        alignItems:'start',
        justifyContent:'center',
        flexDirection:'column',
        '& > *':{
            marginBottom:'2rem',
        }
    },
    submitButton:{
        
        marginTop:'1rem',
        fontSize:'1rem',
    },
    buttonsContainer:{
        display:'flex',
        justifyContent:'space-between',
        
        // alignItems:'space-between',
        '& < *':{

        }
    },
    title:{
        textDecoration:'underline',
       
    },
    textField:{
        width:'60%',
    },
    input:{
        fontSize:'1.5rem',
    },
    label:{
        fontSize:'1.5rem',
    }
  

}));