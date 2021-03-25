import useStyles from "../styleClipBoard"
import ClipColumnItem from "./ClipColumnItem"
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Paper, IconButton, TextField } from "@material-ui/core"
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';
import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import {addItem} from '../../../redux/actions/index'
import {changeColumnName} from '../../../redux/actions/'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ActionModal from '../../common/ActionModal'

export default function ClipColumn({column, index, targetPad, clipPadName}) {
    const classes = useStyles()

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenEditName, setIsOpenEditName] = useState(false)
    const [columnName, setColumnName] = useState(column.columnName)
    const [items, setItems] = useState(column.items)
    const dispatch = useDispatch()

    const onOpenHandler = () => setIsOpenModal(true)
    const onCloseHandler = () => setIsOpenModal(false)
    const targetListColumns = targetPad.columns.map((col)=>{
        if(col.columnName === columnName) {
            col.items = items
        }
        return col
    })

    const targetListColumnsChangedName = targetPad.columns.map((col)=>{
        if(col.columnName === column.columnName) {
            col.columnName = columnName
        }
        return col
    })
   
    const changedClipPad = {
        emailSettings: targetPad.emailSettings,
        isPrivate: targetPad.isPrivate,
        users: targetPad.users,
        columns: targetListColumns
    }

    const changedClipPadColumnName = {
        emailSettings: targetPad.emailSettings,
        isPrivate: targetPad.isPrivate,
        users: targetPad.users,
        columns: targetListColumnsChangedName
    }

    useEffect(()=>dispatch(addItem({clipPadName, changedClipPad})), [items])
     
    const onClickAddItem = () => {
        setItems([...items, 
            {
                itemText: "Write your text here",
                img: null
            }
        ])
    }

    const onEditButtonHandler = () => {
        setIsOpenEditName(!isOpenEditName)
    }

    const onAcceptButtonHandler = () => {
        setIsOpenEditName(!isOpenEditName)
        dispatch(changeColumnName({clipPadName, changedClipPadColumnName}))
    }

    const onChangeName = (e) => setColumnName(e.target.value)
    
    const onClickCancelEdit = () => {
        setColumnName(column.columnName)
        setIsOpenEditName(!isOpenEditName)
    }

    return(
        <>
        <Draggable draggableId={`${column.columnName}${index}`} index={index}>
            {(provided)=>(
            <Paper className={classes.clipColumn} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <h4 className={classes.columnTitle}>
                        {!isOpenEditName ? 
                        <>
                            <span> {columnName} </span> 
                            <div>
                                <IconButton className={classes.editColumnButton} onClick={onEditButtonHandler}>                            
                                    <CreateIcon/>
                                </IconButton>
                                <IconButton className={classes.editColumnButton} onClick={onOpenHandler}>                            
                                    <DeleteForeverIcon />
                                </IconButton>
                            </div>
                        </>:
                        <>
                            <TextField
                            onChange={onChangeName}
                            defaultValue = {columnName}
                            className={classes.editColumnName}
                            label="Enter column name"
                            variant="outlined"
                            /> 
                            <IconButton className={classes.editColumnButton} onClick={onAcceptButtonHandler}>                            
                                <DoneIcon />
                            </IconButton>
                            <IconButton className={classes.editColumnButton} onClick={onClickCancelEdit}>
                                <BlockIcon />
                            </IconButton>
                        </>} 
                    </h4>
                    <Droppable droppableId={`columnDroppable${index}`} type="items">
                        {(provided)=>(
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {items.map((item, index)=> <ClipColumnItem key={`${item.itemText}${index}`} item={item} index={index}/>)}
                            {provided.placeholder}
                        </div>
                        )}
                    </Droppable>
                    <IconButton className={classes.addItemButton} onClick={onClickAddItem}>
                        <AddIcon />  
                    </IconButton>
            </Paper>
            )}
        </Draggable>
        <ActionModal open={isOpenModal} handleClose={onCloseHandler} attentionTitle={"Are you sure"} attentionMessage={"Do you want delete colomn"}/>
        </>
    )
}