import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import useStyles from "./stylesSettings"
import { IconButton, TextField } from '@material-ui/core';

export default function AddUsers(users) {
	const classes = useStyles()

	return(
		<div className={classes.settingsOther}>
                    <div className={classes.iconPlusMinus}>
                        <IconButton >
                            <AddCircleIcon className={classes.iconAddUser}/>
                        </IconButton>
                        <IconButton >
                            <RemoveCircleIcon className={classes.iconAddUser}/>
                        </IconButton>
                    </div>
                    <TextField
                    className={classes.settingsInput}
                    label={users}
                    variant="outlined"
                    size="small"
                    />
                    <p className={classes.userStatus}>status - </p>
                    <p className={classes.userStatus}>invited </p>
                </div>
	)
 
}


