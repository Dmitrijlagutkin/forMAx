import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    settingsContainer: {
        fontFamily: "Roboto"
    },
    settingsItem: {
       padding: "20px 20px 30px",
       borderBottom: "1px solid #2c79c5"
    },
    settingsTop: {
        position: "relaitive"
    },
    closeButton: {
        position: "absolute",
        top: "0px",
        left: "0px"
    },
    settingsTopTitle: {
        textAlign: "end",
        marginTop: "5px",
        fontWeight: "500"
    },
    settingsInput: {
        '& label.Mui-focused': {
            color: '#2c79c5',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#2c79c5',
            },
          },
    }
}))

export default useStyles