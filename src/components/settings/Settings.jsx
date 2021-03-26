import { Drawer, IconButton, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ListIcon from '@material-ui/icons/List';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import SecurityIcon from '@material-ui/icons/Security';
import Switches from '../common/Switch'
import AssignmentIcon from '@material-ui/icons/Assignment';
import useStyles from "./stylesSettings"


export default function Settings({isOpenSettings, onClickButtonSettingsHandler}) {
    const classes = useStyles()

    return(
        <Drawer anchor="right" open={isOpenSettings} className={classes.settingsContainer}>
            <div className={`${classes.settingsItem} ${classes.settingsOther}`}>
                <IconButton onClick={onClickButtonSettingsHandler} >
                    <CloseIcon className={classes.closeButton}/>
                </IconButton>
                <p className={classes.settingsTopTitle}>
                    This Clip Pad Settings
                </p>
            </div>
            <div className={classes.settingsItem}>
                <p className={classes.settingsTitle}> Clip pad name </p>
                <div className={classes.settingsOther}>
                    {/* <p className={classes.settingsName}>Name</p> */}
                    <IconButton className={classes.iconEmail}>
                        <AssignmentIcon />
                    </IconButton>
                    <TextField
                    className={classes.settingsInput}
                    label="Clip pad name"
                    variant="outlined"
                    size="small"
                    />
                </div>
                
            </div>

            <div className={classes.settingsItem}>
                <p className={classes.settingsTitle}> Email settings for thiss clip pad </p>
                <div className={classes.settingsOther}>
                    <IconButton className={classes.iconEmail}>
                        <MailOutlineIcon />
                    </IconButton>
                    <TextField
                    className={classes.settingsInput}
                    label="Email"
                    variant="outlined"
                    size="small"
                    />
                </div>
            </div>

            <div className={classes.settingsItem}>
                <div className={classes.settingsFlex}> 
                    <IconButton className={classes.iconAddUser}>
                        <GroupAddIcon />
                    </IconButton>
                    <p className={classes.titleAddUser}> Add user for this clip pad </p>
                </div>
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
                    label="Add user email"
                    variant="outlined"
                    size="small"
                    />
                    <p className={classes.userStatus}>status - </p>
                    <p className={classes.userStatus}>joined </p>
                </div>
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
                    label="Add user email"
                    variant="outlined"
                    size="small"
                    />
                    <p className={classes.userStatus}>status - </p>
                    <p className={classes.userStatus}>invited </p>
                </div>
                <Button className={classes.buttonSend} variant="contained" color="primary">
                    Send
                </Button>
            </div>

            <div>
                <div className={`${classes.settingsFlex} ${classes.borderBottom}`}> 
                    <IconButton className={classes.iconAddUser}>
                        <ListIcon />
                    </IconButton>
                    <p className={classes.titleAddUser}> See all your clip pads</p>
                </div>
            </div>

            <div className={classes.borderBottom}>           
                <div className={classes.settingsFlex}> 
                    <IconButton className={classes.iconAddUser}>
                        <SecurityIcon />
                    </IconButton>
                    
                    <p className={classes.titleAddUser}>Privaci settings</p>
                </div>
                <div className={classes.settingsFlexCenter}> 
                    <p className={classes.privaceText}>Privace</p>
                    <Switches/>
                    <p className={classes.privaceText}>Pablic</p>
                </div>
            </div>

            <div>
                <div className={classes.settingsFlex}> 
                    <IconButton className={classes.iconAddUser}>
                        <ShareIcon />
                    </IconButton>
                    <p className={classes.titleAddUser}> Share</p>
                </div>
            </div>
            
        </Drawer>
    )
}