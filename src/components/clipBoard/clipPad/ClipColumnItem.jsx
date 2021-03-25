import useStyles from "../styleClipBoard"
import Avatar from '@material-ui/core/Avatar';
import { Draggable } from 'react-beautiful-dnd';
import { Paper, IconButton } from "@material-ui/core"
import { useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';

export default function ClipColumnItem({item, index}) {
    const classes = useStyles()

    const [isOpenTextArea, setIsOpenTextArea] = useState(false)
    const [itemText, setItemText] = useState(item.itemText)
    const onCLickToggleTextArea = () => setIsOpenTextArea(!isOpenTextArea)
    const onChangeFile = (e) => console.log(e.target.files)
    const onChangeText = (e) => setItemText(e.target.value)
    const onClickCancelInputText = () => {
        setItemText(item.itemText)
        setIsOpenTextArea(!isOpenTextArea)
    }

    return(
        <Draggable draggableId={`itemDragg${item.itemText}${index}`} index={index}>
            {(provided)=>(
                <Paper  className={classes.clipColumnItem} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}> 
                    <div className={classes.imgContainer}>
                        {item.img ?
                            <Avatar variant="rounded" src={item.img} className={classes.itemImg}/> :
                            <Avatar variant="rounded" className={classes.itemImg}>
                                Add your image
                            </Avatar>
                        }
                        <IconButton className={classes.changeImgButton}>
                            <CreateIcon />
                            <input type="file" className={classes.inputFile} onChange={onChangeFile}/>
                        </IconButton>
                    </div>
                    <div className={classes.itemText}>
                        {!isOpenTextArea ?
                        <>
                            <p>{itemText}</p>
                            <IconButton className={classes.changeImgButton} onClick={onCLickToggleTextArea}>
                                <CreateIcon />
                            </IconButton>
                        </> :
                        <>
                            <TextareaAutosize
                            rowsMax={7}
                            style={{width:"120px"}}
                            defaultValue={itemText}
                            onChange={onChangeText}
                            />
                            <div className={classes.buttonSection} >
                                <IconButton onClick={onCLickToggleTextArea}>
                                    <DoneIcon />
                                </IconButton>
                                <IconButton onClick={onClickCancelInputText}>
                                    <BlockIcon />
                                </IconButton>
                            </div>
                        </>
                        }
                    </div>
                </Paper>
            )}
        </Draggable>
    )
}