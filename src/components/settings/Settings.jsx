import React, {useEffect} from 'react';
import { Drawer, IconButton, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import SecurityIcon from '@material-ui/icons/Security';
import Switches from '../common/Switch'
import AssignmentIcon from '@material-ui/icons/Assignment';
import SelectSeeMyClipPads from './SelectSeeMyClipPads'
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import useStyles from "./stylesSettings"
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import AddUsers from './AddUsers'

export default function Settings({isOpenSettings, onClickButtonSettingsHandler}) {
    const history = useHistory()
    const classes = useStyles()
    const { data } = useSelector((state)=> state)
    const {currentClipPad} = useSelector((state) => state)
    const currentClipPadName = Object.keys(currentClipPad)
    const clipPadNamesList = Object.keys(data)
    const [name, setName] = React.useState('');


    


    const users = currentClipPad[currentClipPadName] && currentClipPad[currentClipPadName].users





console.log(users)
    useEffect(()=>selectedClipPad(name), [name])
    const selectedClipPad = (name) => {
        if (!!name && name != currentClipPadName[0]) {
             history.push(`/clip-board/${name}`)
           return data[name] 
        }
    }

    const handleChange = (event) => {
        setName(event.target.value); 
      };
             
    return(
        <Drawer anchor="right" open={isOpenSettings} className={classes.settingsContainer}>
            <div className={`${classes.settingsItem} ${classes.settingsOther}`}>
                <IconButton onClick={onClickButtonSettingsHandler} >
                    <CloseIcon className={classes.closeButton}/>
                </IconButton>
                <p className={classes.settingsTopTitle}>
                {name ? name : currentClipPadName[0]} settings
                </p>
            </div>
            <div className={classes.settingsItem}>
                <p className={classes.settingsTitle}> Clip pad name </p>
                <div className={classes.settingsOther}>
                    <IconButton className={classes.iconEmail}>
                        <AssignmentIcon />
                    </IconButton>
                    <TextField
                    className={classes.settingsInput}
                    label={name ? name : currentClipPadName[0]} 
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
                    label={currentClipPad[currentClipPadName] && currentClipPad[currentClipPadName].emailSettings}
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
                
                {/* {users.map((users) => <AddUsers users={users} key={users}/>)} */}
                

                <Button className={classes.buttonSend} variant="contained" color="primary">
                    Send
                </Button>
            </div>

            <div>
                <div className={`${classes.settingsFlex} ${classes.borderBottom}`}> 
                    <SelectSeeMyClipPads 
                                className={classes.selectSeeMyClipPads} 
                                clipPadNamesList={clipPadNamesList}
                                handleChange={handleChange}
                                name={name}
                                />
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
                <div className={`${classes.settingsFlex} ${classes.settingsItem}`}> 
                    <IconButton className={classes.iconAddUser}>
                        <ShareIcon />
                    </IconButton>
                    <p className={classes.titleAddUser}> Share</p>
                </div>
            </div>
            <Button className={classes.buttonconfirm} variant="contained" color="primary" onClick={onClickButtonSettingsHandler}>
                    Confirm
            </Button>
            
        </Drawer>
    )
}