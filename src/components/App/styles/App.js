import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    topContainer: {
        display: 'flex',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform:'translate(-50%,-50%)',
        height:'auto',
        minHeight:'50rem',
        margin:'0 1rem',
        padding:'5rem',
        borderRadius:'5px',
        boxShadow:'0 1rem 2rem rgba(0,0,0,.6)',
    },
    darkModeSwitch:{
        position:'absolute',
        top:'0',
        right:'0',
       
    },
    secondaryContainer: {
        margin: '1rem',
    },
    gridItem: {
        padding: '1rem',
        
    },
    gridItemHistory:{
        borderRadius:'5px',
        border:'1px solid black'
    }



}));