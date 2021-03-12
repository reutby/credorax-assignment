import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    itemContainer:{
        display:'flex',
        justifyContent:'space-between',
        borderRadius:'5px',
        boxShadow:'0 1rem 2rem rgba(0,0,0,.6)',
        alignItems:'center',
        padding:'1rem',
        width:'37rem',        
    },
    secondRow:{
        
        display:'flex',
        flexDirection:'column',
        
    },
    result:{
        fontWeight:'bold',
        fontSize:'1.6rem',
    },
    
    [theme.breakpoints.down('xs')] :{
        itemContainer:{
            width:'auto', 

        }
    }
    

}));