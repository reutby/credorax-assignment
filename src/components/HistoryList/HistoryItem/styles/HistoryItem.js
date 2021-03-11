import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    itemContainer:{
        display:'flex',
        flexDirection:'column',
        borderRadius:'5px',
        boxShadow:'0 1rem 2rem rgba(0,0,0,.6)',
        padding:'1rem',
        
    },
    secondRow:{
        display:'flex',
        alignItems:'center',
    },
    result:{
        fontWeight:'bold',
        fontSize:'1.6rem',
    }

}));