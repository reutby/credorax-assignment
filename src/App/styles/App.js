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
        padding:'5rem',
        borderRadius:'5px',
        boxShadow:'0 1rem 2rem rgba(0,0,0,.6)',
    },
    darkModeSwitch:{
        position:'absolute',
        top:'0',
        right:'0',
       
    },
    label:{
        fontSize:'1.5rem',
    },
    secondaryContainer: {
        margin: '1rem',
        display:'flex',
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
    [theme.breakpoints.down('sm')]:{
        topContainer:{
            width:'auto',
        }
    },
    [theme.breakpoints.down('xs')] :{
        topContainer:{
            width:'100%',
            margin:'0',
            padding:'3rem 2rem',
            top:'0',
            left:'0',
            height:'100vh',
            transform:'none',
        }
    },


}));