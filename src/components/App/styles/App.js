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
        height:'auto',
    },
    gridItemHistory:{
        borderRadius:'5px',
       
    },
    title:{
        textDecoration:'underline',
    },
    result:{
        fontSize:'1.5rem',
        paddingTop:'.5rem',
    },
    [theme.breakpoints.down('sm')] :{
        topContainer:{
            margin:'0',
            
            top:'0',
            left:'0',
            height:'100%',
            transform:'none',
        }
    },


}));