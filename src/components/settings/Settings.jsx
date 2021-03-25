import { Drawer, IconButton, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from "./stylesSettings"

export default function Settings({isOpenSettings, onClickButtonSettingsHandler}) {
    const classes = useStyles()

    return(
        <Drawer anchor="right" open={isOpenSettings} className={classes.settingsContainer}>
            <div className={`${classes.settingsItem} ${classes.settingsTop}`}>
                <IconButton onClick={onClickButtonSettingsHandler} className={classes.closeButton}>
                    <CloseIcon />
                </IconButton>
                <p className={classes.settingsTopTitle}>
                    This Clip Pad Settings
                </p>
            </div>
            <div className={classes.settingsItem}>
                <p> Clip pad name </p>
                <TextField
                className={classes.settingsInput}
                label="Clip pad name"
                variant="outlined"
                />
            </div>
            <div className={classes.settingsItem}>
                <p> Email settings for thiss clip pad </p>
                <TextField
                className={classes.settingsInput}
                label="Email"
                variant="outlined"
                />
            </div>
            <div className={classes.settingsItem}>
                <p> Add user for this clip pad </p>
            </div>
        </Drawer>
    )
}