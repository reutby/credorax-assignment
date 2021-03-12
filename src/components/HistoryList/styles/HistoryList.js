import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    title:{
        textDecoration:'underline',
    },
    listHistoryContainer:{
        marginTop:'1rem',
        maxHeight:'40rem',
        overflowY:'scroll',
        // flexDirection:'column',
        backgroundColor:'transparent',
        position:'relative',
        
    },
    [theme.breakpoints.down('sm')] :{
        listHistoryContainer:{
            maxHeight:'30rem',
        }
    }
  

}));