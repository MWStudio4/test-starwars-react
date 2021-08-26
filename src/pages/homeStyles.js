import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {
  // console.info(`Theme`, theme);
  return {
    root: {
      minHeight: '100vh',
      backgroundColor: theme.palette.background.paper,
    },
    progressWrap: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 2, 6, 2),
      borderRadius: 6,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.secondary[300],
    },
    formContainer: {
      padding: theme.spacing(6, 2, 6, 2),
      backgroundColor: theme.palette.background.paper,
    },
    field: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    inline: {
      display: 'inline',
    },
    pagination: {
      marginTop: 20,
    },
  }
})
